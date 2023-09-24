const express = require('express')
const Search = express.Router()
const connection = require('../connection.js')
const ADIL = require('../ADIL.js')
const path = require("path");

/*####################################[USEFUL]#####################################*/
    /*Generate FID, CID, C_ID, ,ID*/    
    const GenerateID = async (length,tabelName,IdName,dbName) =>{ 
      function SelectAllID(ID,table) {
            return new Promise((resolve, reject) => {
                connection.changeUser({database : dbName}, () => {});
                let sql = `SELECT ${ID} FROM ${table} WHERE 1`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
      }
      function Generate(array,IDN,length) {
         return new Promise((resolve, reject) => {
            
            let acceptable = false;
            do {
            let ID = Math.floor(Math.random() * length);
            let exist = array.find((article) => article.IDN == ID); 
            if (!exist) { 
              resolve(ID) ;  
              acceptable = true; 
            } else{ acceptable = false; reject(err)}
          }
          while (acceptable = false);
          });
      }
      let arrayFromDb = await SelectAllID(IdName,tabelName)
      return await Generate(arrayFromDb,IdName,length);  
    }

/*####################################[Search]#####################################*/
      Search.post('/search', (req, res) => {
            let tag = req.body.tag;
            let gouv = req.body.gouv;
            let deleg = req.body.deleg;
            let genre = req.body.genre;
            connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE Gouv = '${gouv}' ${ADIL[tag].SearchByGenre ? `AND Genre = '${genre}'` : ''}   ORDER BY CASE WHEN Deleg = '${deleg}' THEN 0 ELSE 1 END LIMIT 50;`; // AND Deleg = '${deleg}' 
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /*For scroll bar */
      Search.post('/search/limited', (req, res) => {
            let tag = req.body.tag;
            let gouv = req.body.gouv;
            let deleg = req.body.deleg;
            let PID = req.body.PID;
            connection.changeUser({database : 'dszrccqg_communications'}, () => {});
            let sql = `SELECT * FROM dszrccqg_communications.08_vente_en_gros_demande 
                      INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.08_vente_en_gros_demande.UID = dszrccqg_profile.user_general_data.UID 
                      WHERE  dszrccqg_communications.08_vente_en_gros_demande.PID = '${PID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /*FROM CHATGPT*/
      // Search.post('/search/key', async (req, res) => {
      //   function GetGeneralData(query, values) {
      //     return new Promise((resolve, reject) => {
      //       connection.query(query, values, (err, rows, fields) => {
      //         if (err) {
      //           console.error('Database Error:', err);
      //           return reject(err);
      //         }
      //         resolve(rows);
      //       });
      //     });
      //   }

      //   try {
      //     const Targetkey = req.body.key;
      //     let unionQueries = [];

      //     Object.keys(ADIL).forEach((key) => {
      //       const directoryTable = ADIL[key].directoryTable;
      //       const query = `SELECT Name, PID, Gouv, Deleg, Adress, ? as Tag FROM ${directoryTable} WHERE Name LIKE ?`;
      //       unionQueries.push(query);
      //     });

      //     const finalQuery = unionQueries.join(' UNION ALL ') + ' ORDER BY Name;';

      //     connection.changeUser({ database: 'dszrccqg_directory' }, () => {});
          
      //     const results = await Promise.all(
      //       unionQueries.map(async (query) => {
      //         return GetGeneralData(query, [Targetkey, `%${Targetkey}%`]);
      //       })
      //     );

      //     const profileData = results.flat(); // Flatten the array of arrays

      //     res.send(profileData);
      //   } catch (error) {
      //     console.error('Error:', error);
      //     res.status(500).send('An error occurred.');
      //   }
      // });


      Search.post('/search/key', (req, res) => {
            let Targetkey = req.body.key;
            let LastSql = ''

            function GenerateSqlStatment() {
              return new Promise((resolve, reject) => {
                Object.keys(ADIL).forEach(function(key, index) {
                    let text = `SELECT Name, PID, Gouv, Deleg, Adress,  '${key}' as Tag FROM ${ADIL[key].directoryTable} WHERE Name like '%${Targetkey}%'
                                ${index == Object.keys(ADIL).length -1  ? ' ' : 'UNION ALL ' } `
                    LastSql = LastSql.concat(text);
                    
                });
                LastSql = LastSql.concat(' ORDER BY Name;');
 
                resolve(LastSql)
              });
            }
            function GetGeneralData(getSqll) {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                       connection.query(getSqll, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows);
                      })
                    });
            }

          // Call, Function
            async function query() {
                const sqlSTAT = await GenerateSqlStatment()
                const profileData = await GetGeneralData(sqlSTAT)
                res.send(profileData)
            }
          query();          
      })

/*####################################[Profile]####################################*/
    /* fetch data */
    Search.post('/profile', (req, res) => {
                let tag = req.body.tag;
                let PID = req.body.PID;
                let Today = new Date().toISOString().split('T')[0]
                function GetGeneralData() {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                      let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE  PID = '${PID}'`;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows);
                      })
                    });
                }
                function GetRating() {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                          let sql = `SELECT * FROM dszrccqg_directory.000_abyedh_profile_avis 
                                     INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_directory.000_abyedh_profile_avis.UID = dszrccqg_profile.user_general_data.UID 
                                     WHERE  dszrccqg_directory.000_abyedh_profile_avis.PID = '${PID}';`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }
                function GetImages() {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                          let sql = `SELECT * FROM 000_abyedh_profile_photoes  WHERE PID  = '${PID}' ;`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }
                function GetLikes() {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_profile'}, () => {});
                          let sql = `SELECT * FROM dszrccqg_profile.dash_favorite  
                                     INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_profile.dash_favorite.UID = dszrccqg_profile.user_general_data.UID 
                                      WHERE  dszrccqg_profile.dash_favorite.PID = '${PID}';`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }
                function GetHoraire() {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                      let sql = `SELECT * FROM 000_abyedh_profile_horaires  WHERE PID  = '${PID}' `;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows);
                      })
                    });
                }
                function GetSetting(camId) {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_system'}, () => {});
                      let sql = `SELECT  * FROM 08_vente_en_gros_setting WHERE PID = ${PID}`;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows)
                      })
                    });
                }

                  // Call, Function
                async function query() {
                    const profileData = {}
                      profileData.genrale = await GetGeneralData()
                      profileData.rating = await GetRating()
                      profileData.likes = await GetLikes()
                      profileData.photoes = await GetImages()
                      profileData.horaire = await GetHoraire()
                      profileData.setting = await GetSetting()
                      profileData.position = [profileData.genrale[0].Lat , profileData.genrale[0].Lng]
                    
                  res.send(profileData)
                }
                query();
                    
    })
    Search.post('/profile/activation', (req, res) => {
          let tag = req.body.tag;
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE PID = '${PID}' ;`; // AND Deleg = '${deleg}' 
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows[0]);
          })
              
    })
    /* add comment */
    Search.post('/profile/commentaire', (req, res) => {
            let tag = req.body.tag;
            let gouv = req.body.gouv;
            let deleg = req.body.deleg;
            connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE Gouv = '${gouv}' LIMIT 50;`; // AND Deleg = '${deleg}' 
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
    })

    /* add to favorite */
    Search.post('/profile/favorite', (req, res) => {
            let tag = req.body.tag;
            let gouv = req.body.gouv;
            let deleg = req.body.deleg;
            connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE Gouv = '${gouv}' LIMIT 50;`; // AND Deleg = '${deleg}' 
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

/*####################################[Request]####################################*/
    
    const UserIssue = async (UID,PID,R_ID,TAG,TableName,ReqTag,NotifTag) =>{
            let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
            let Time = new Date().toLocaleTimeString('fr-FR');

            function AddUserNotification() {
              return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_profile'}, () => {});
                      let sql = `INSERT INTO dash_feeds(R_ID, UID, PID, Notif_Name, Notif_Genre, P_Genre, Notif_Date, Notif_Time, State) 
                                 VALUES('${R_ID}','${UID}','${PID}','${NotifTag}','${ReqTag}','${TAG}','${Today}','${Time}','W');`;
                       connection.query(sql, (err, rows, fields) => {
                        if(err) return reject(err);
                        resolve(rows);
                      })
              });
            }
            function AddUserFeed() {
              return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_profile'}, () => {});
                      let sql = `INSERT INTO dash_suivie(R_ID, UID , PID , Notif_Name, P_Genre, Table_Name, Notif_Date, State) 
                                 VALUES('${R_ID}','${UID}','${PID}','${ReqTag}','${TAG}','${TableName}','${Today}','${NotifTag}');`;
                       connection.query(sql, (err, rows, fields) => {
                        if(err) return reject(err);
                        resolve(rows);
                      })
              });
            }

            let notifAdded = await AddUserNotification()
            let feedAdded = await AddUserFeed()
            return ([notifAdded,feedAdded]);
    }

    Search.post('/Action/docteur-rdv', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.rendyVousData;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`01_docteur_rdv`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 01_docteur_rdv(R_ID, PID, UID, user , Genre, comment, RDV_Date , RDV_Time , R_Date ,State) 
                           VALUES('${R_ID}','${PID}','${UID}','','','${ReqData.comment}','${ReqData.date}','${ReqData.time}','${Today}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'01_docteur_rdv','docteur_rdv','docteur_rdv_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })

    Search.post('/Action/pharmacie-shop', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.commandeD;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`01_pharmacie_shop`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 01_pharmacie_shop(R_ID, PID, UID, Wanted_Day, Wanted_Time, Livraison_Par,  Articles , R_Date ,State) 
                           VALUES('${R_ID}','${PID}','${UID}','${ReqData.Wanted_Day}','${ReqData.Wanted_Time}','${ReqData.Livraison_Par}','${JSON.stringify(ReqData.articles)}','${Today}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'01_pharmacie_shop','pharmacie_shop','pharmacie_shop_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })
    Search.post('/Action/pharmacie-shop/medicamment', (req, res) => {
          let searchForArticle = req.body.searchForArticle
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 000_abyedh_medicamment WHERE Nom LIKE '%${searchForArticle}%' AND PID = 'ABYEDH' LIMIT 5`;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
          })            
    })
    Search.post('/Action/pharmacie-rdv', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.rendyVousData;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`01_pharmacie_rdv`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 01_pharmacie_rdv(R_ID, PID, UID, RDV_Cause , RDV_Date , RDV_Time , R_Date ,State) 
                           VALUES('${R_ID}','${PID}','${UID}', '${ReqData.RDV_Cause}','${ReqData.RDV_Date}','${ReqData.RDV_Time}','${Today}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'01_pharmacie_rdv','pharmacie_rdv','pharmacie_rdv_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })

    Search.post('/Action/clinique-reserver', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.rendyVousData;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`01_clinique_reserver`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 01_clinique_reserver(R_ID, PID, UID, RES_Cause , RES_From_Date , RES_From_Time, RES_To_Date, RES_To_Time, Comment , R_Date , R_Time ,State) 
                           VALUES('${R_ID}','${PID}','${UID}', '${ReqData.RES_Cause}','${ReqData.RES_From_Date}','${ReqData.RES_From_Time}','${ReqData.RES_To_Date}', '${ReqData.RES_To_Time}','${ReqData.Comment}', '${Today}','${Time}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'01_clinique_reserver','clinique_reserver','clinique_reserver_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })

    Search.post('/Action/centre-reserver', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.rendyVousData;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`01_centre_reserver`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 01_centre_reserver(R_ID, PID, UID, RES_Cause , RES_From_Date , RES_From_Time, RES_To_Date, RES_To_Time, Comment , R_Date , R_Time ,State) 
                           VALUES('${R_ID}','${PID}','${UID}', '${ReqData.RES_Cause}','${ReqData.RES_From_Date}','${ReqData.RES_From_Time}','${ReqData.RES_To_Date}', '${ReqData.RES_To_Time}','${ReqData.Comment}', '${Today}','${Time}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'01_centre_reserver','centre_reserver','centre_reserver_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })

    Search.post('/Action/labo-rdv', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.rendyVousData;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`01_labo_rdv`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 01_labo_rdv(R_ID, PID, UID, RDV_Cause , RDV_Date , RDV_Time,   Comment , R_Date , R_Time ,State) 
                           VALUES('${R_ID}','${PID}','${UID}', '${ReqData.RDV_Cause}','${ReqData.RDV_Date}','${ReqData.RDV_Time}','${ReqData.Comment}', '${Today}','${Time}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'01_labo_rdv','labo_rdv','labo_rdv_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })

    Search.post('/Action/garderie-inscrie', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.inscrieData;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`02_garderie_inscription`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 02_garderie_inscription(R_ID, PID, UID, EL_Name , EL_Naissance, EL_Genre, Gouv, Deleg, EL_Adress, EL_Pere_Nom, EL_Pere_Phone, EL_Mere_Nom, EL_Mere_Phone , Comment, R_Date ,State) 
                           VALUES('${R_ID}','${PID}','${UID}','${ReqData.EL_Name}','${ReqData.EL_Naissance}','${ReqData.EL_Genre}','${ReqData.Gouv}','${ReqData.Deleg}','${ReqData.EL_Adress}','${ReqData.EL_Pere_Nom}','${ReqData.EL_Pere_Phone}','${ReqData.EL_Mere_Nom}','${ReqData.EL_Mere_Phone  }','${ReqData.Comment}','${Today}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'02_garderie_inscription','garderie_inscription','garderie_inscription_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })
    Search.post('/Action/garderie-souscrie', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.inscrieData;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`02_garderie_inscription`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 02_garderie_inscription(R_ID, PID, UID, Name , birthday, level, R_Date ,State) 
                           VALUES('${R_ID}','${PID}','${UID}','${ReqData.Name}','${ReqData.birthday}','${ReqData.level}','${Today}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'02_garderie_inscription','garderie_inscrie','garderie_inscrie_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })

    Search.post('/Action/librairie-shop', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.commandeD;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`02_librairie_shop`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 02_librairie_shop(R_ID, PID, UID, Wanted_Day, Wanted_Time, Livraison_Par,  Articles , R_Date ,R_Time ,State) 
                           VALUES('${R_ID}','${PID}','${UID}','${ReqData.Wanted_Day}','${ReqData.Wanted_Time}','${ReqData.Livraison_Par}','${JSON.stringify(ReqData.articles)}','${Today}','${Time}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'02_librairie_shop','librairie_shop','librairie_shop_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })

    Search.post('/Action/transporteur-request', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.commandeD;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`03_transporteur_request`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 03_transporteur_request(R_ID, PID, UID, Genre, De, Vers , Wanted_Day, Wanted_Time,  Articles , R_Date ,R_Time, State) 
                           VALUES('${R_ID}','${PID}','${UID}','${ReqData.Genre}','${JSON.stringify(ReqData.De)}','${JSON.stringify(ReqData.Vers)}','${ReqData.Wanted_Day}','${ReqData.Wanted_Time}','${JSON.stringify(ReqData.articles)}','${Today}','${Time}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'03_transporteur_request','transporteur_request','transporteur_request_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })
    Search.post('/Action/autoecole-inscrie', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.commandeD;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`03_autoecole_inscrie`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 03_autoecole_inscrie(R_ID, PID, UID, Renouvellemment, BirthDay_Check, Genre , Drive_Befor, Wanted_Times, Comment , R_Date ,R_Time, State) 
                           VALUES('${R_ID}','${PID}','${UID}','${ReqData.Renouvellemment}','${ReqData.BirthDay_Check}','${ReqData.Genre}','${ReqData.Drive_Befor}','${JSON.stringify(ReqData.Wanted_Times)}','${ReqData.Comment}','${Today}','${Time}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'03_autoecole_inscrie','autoecole_inscrie','autoecole_inscrie_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })
    Search.post('/Action/taxi-request', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.commandeD;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`03_taxi_request`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 03_taxi_request(R_ID, PID, UID,  Depart, Arrivee, Bagage, R_Date ,R_Time, State) 
                           VALUES('${R_ID}','${PID}','${UID}','${JSON.stringify(ReqData.targetPositionFrom)}','${JSON.stringify(ReqData.targetPositionTo)}','${ReqData.Bagage}','${Today}','${Time}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          function AddUserNotification(UID,PID,R_ID,TAG,TableName,ReqTag,NotifTag) {
              return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_profile'}, () => {});
                      let sql = `INSERT INTO dash_feeds(R_ID, UID, PID, Notif_Name, Notif_Genre, P_Genre, Notif_Date, Notif_Time, State) 
                                 VALUES('${R_ID}','${UID}','${PID}','${NotifTag}','${ReqTag}','${TAG}','${Today}','${Time}','W');`;
                       connection.query(sql, (err, rows, fields) => {
                        if(err) return reject(err);
                        resolve(rows);
                      })
              });
            }
            
          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await AddUserNotification(UID,PID,R_ID,TAG,'03_taxi_request','taxi_request','taxi_request_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })

    Search.post('/Action/location-request', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.commandeD;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`04_location_request`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 04_location_request(R_ID, PID, UID,  Wanted_Cars, Cause, Depart_Date, Depart_Time , Finish_Date, Finish_Time, Comment , R_Date ,R_Time, State) 
                           VALUES('${R_ID}','${PID}','${UID}', '${JSON.stringify(ReqData.Wanted_Cars)}','${ReqData.Cause}','${ReqData.Depart_Date}','${ReqData.Depart_Time}','${ReqData.Finish_Date}','${ReqData.Finish_Time}','${ReqData.Comment}','${Today}','${Time}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'04_location_request','location_request','location_request_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })

    Search.post('/Action/parking-reserver', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.commandeD;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`04_parking_reserver`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 04_parking_reserver(R_ID, PID, UID,  Car_Name, Car_Matricule, Depart_Date, Depart_Time , Finish_Date, Finish_Time, Comment , R_Date ,R_Time, State) 
                           VALUES('${R_ID}','${PID}','${UID}', '${ReqData.Car_Name}','${ReqData.Car_Matricule}','${ReqData.Depart_Date}','${ReqData.Depart_Time}','${ReqData.Finish_Date}','${ReqData.Finish_Time}','${ReqData.Comment}','${Today}','${Time}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'04_parking_reserver','parking_reserver','parking_reserver_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })

    Search.post('/Action/parking-souscrire', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.commandeD;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`04_parking_souscrire`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 04_parking_souscrire(R_ID, PID, UID,  Car_Name, Car_Matricule, Depart_Date,   Finish_Date, Sous_Genre , Comment , R_Date ,R_Time, State) 
                           VALUES('${R_ID}','${PID}','${UID}','${ReqData.Car_Name}','${ReqData.Car_Matricule}','${ReqData.Depart_Date}', '${ReqData.Finish_Date}','${ReqData.Sous_Genre}','${ReqData.Comment}','${Today}','${Time}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'04_parking_souscrire','parking_souscrire','parking_souscrire_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })


    Search.post('/Action/restaurant-commande', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.commandeD;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`05_restaurant_commande`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 05_restaurant_commande(R_ID, PID, UID, Wanted_Date, C_Articles, Table_Num , Comment , R_Date ,R_Time, State) 
                           VALUES('${R_ID}','${PID}','${UID}','${ReqData.Wanted_Date}','${JSON.stringify(ReqData.articles)}','${ReqData.Table_Num}','${ReqData.Comment}','${Today}','${Time}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'05_restaurant_commande','restaurant_commande','restaurant_commande_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })
    Search.post('/Action/restaurant-reservation', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.reservationData;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`05_restaurant_reservation`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 05_restaurant_reservation(R_ID, PID, UID, User_Name , Table_Num, Comment, Wanted_Date ,Wanted_Time , R_Date ,State) 
                           VALUES('${R_ID}','${PID}','${UID}','${ReqData.User_Name}','${ReqData.Table_Num}','${ReqData.Comment}','${ReqData.Wanted_Date}','${ReqData.Wanted_Time}', '${Today}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'05_restaurant_reservation','restaurant_reservation','restaurant_reservation_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })

    Search.post('/Action/gym-souscription', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.souscriptionData;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`06_gym_souscription`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 06_gym_souscription(R_ID, PID, UID, User_Name , User_Age, Ab_Genre, Start_At, Comment, R_Date ,State) 
                           VALUES('${R_ID}','${PID}','${UID}','${ReqData.User_Name}','${ReqData.User_Age}','${ReqData.Ab_Genre}','${ReqData.Start_At}','${ReqData.Comment}','${Today}','W')`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          // Call, Function
          async function SaveRequest() {
                const requestData = {}
                requestData.insert = await InsertRequest()
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'06_gym_souscription','gym_souscription','gym_souscription_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })


/*####################################[Suivie]######################################*/
    
    /* fetch data */
    Search.post('/suivie/docteur', (req, res) => {
                let tag = req.body.tag;
                let PID = req.body.PID;
                let UID = req.body.UID;
                let Today = new Date().toISOString().split('T')[0]

                function GetRendyVousListe() {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                      let sql = `SELECT * FROM  01_docteur_rdv WHERE  UID  = '${UID}' AND PID = ${PID}`;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows);
                      })
                    });
                }
                function GetSeancesListe() {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_system'}, () => {});
                          let sql = `SELECT * , COALESCE(01_docteur_patient.PA_Name, 'PASSAGER') AS PA_Name , COALESCE(01_docteur_ordonance.OR_Articles, '[]') AS OR_Articles ,  01_docteur_seances.State AS Pay_State FROM 01_docteur_seances 
                                     LEFT JOIN 01_docteur_patient ON 01_docteur_seances.S_Patient = 01_docteur_patient.PA_ID
                                     LEFT JOIN 01_docteur_ordonance ON 01_docteur_seances.Ordonance = 01_docteur_ordonance.OR_ID
                                     WHERE 01_docteur_seances.PID = '${PID}' AND 01_docteur_patient.Releted_UID = ${UID};`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }
                function GetOrdonanceListe() {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_system'}, () => {});
                          let sql = `SELECT * FROM 01_docteur_ordonance 
                                     LEFT JOIN 01_docteur_patient ON 01_docteur_ordonance.OR_Patient = 01_docteur_patient.PA_ID
                                     WHERE 01_docteur_ordonance.PID = ${PID} AND 01_docteur_patient.Releted_UID = ${UID} ;`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }
                  // Call, Function
                async function query() {
                    const suivieData = {}
                      suivieData.rdv = await GetRendyVousListe()
                      suivieData.seance = await GetSeancesListe()
                      suivieData.ordonance = await GetOrdonanceListe()
                  res.send(suivieData)
                }
                query();               
    })

    /* fetch data */
    Search.post('/suivie/restaurant', (req, res) => {
                let tag = req.body.tag;
                let PID = req.body.PID;
                let UID = req.body.UID;
                let Today = new Date().toISOString().split('T')[0]

                function GetCommandesListe() {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                      let sql = `SELECT * FROM  05_restaurant_commande WHERE  UID  = '${UID}' AND PID = ${PID}`;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows);
                      })
                    });
                }
                function GetReservationListe() {
                  return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                      let sql = `SELECT * FROM  05_restaurant_reservation WHERE  UID  = '${UID}' AND PID = ${PID}`;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows);
                      })
                    });
                }

                function GetFacturesListe() {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_system'}, () => {});
                          let sql = `SELECT 05_restaurant_factures.* , 05_restaurant_clients.*,  05_restaurant_caisses.C_ID, 05_restaurant_caisses.CA_Name, COALESCE(05_restaurant_caisses.CA_Name, 'COMMANDE') AS CA_Name , 05_restaurant_factures.PK AS FACT_ID, 05_restaurant_factures.State AS Pay_State,  COALESCE(05_restaurant_clients.CL_Name, 'PASSAGER') AS CL_Name
                                    FROM 05_restaurant_factures
                                    LEFT JOIN 05_restaurant_clients ON 05_restaurant_factures.Client = 05_restaurant_clients.CL_ID 
                                    LEFT JOIN 05_restaurant_caisses ON 05_restaurant_factures.Caisse_ID = 05_restaurant_caisses.C_ID
                                    WHERE 05_restaurant_factures.PID = ${PID} AND 05_restaurant_clients.Releted_UID = ${UID};`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }

                  // Call, Function
                async function query() {
                    const suivieData = {}
                      suivieData.commandes = await GetCommandesListe()
                      suivieData.reservation = await GetReservationListe()
                      suivieData.factures = await GetFacturesListe()
                      
                  res.send(suivieData)
                }
                query();               
    })

    /* fetch data */
    Search.post('/suivie/garderie', (req, res) => {
                let tag = req.body.tag;
                let PID = req.body.PID;
                let UID = req.body.UID;
                let Today = new Date().toISOString().split('T')[0]

                function GetInscriptionListe() {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                      let sql = `SELECT * FROM  02_garderie_inscription WHERE  UID  = '${UID}' AND PID = ${PID}`;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows);
                      })
                    });
                }
                function GetSouscriptionListe() {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                      let sql = `SELECT * FROM  02_garderie_souscription WHERE  UID  = '${UID}' AND PID = ${PID}`;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows);
                      })
                    });
                }

                function FetchAllChildren(RelUID) {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_system'}, () => {});
                      let sql = `SELECT * FROM  02_garderie_eleves WHERE  Releted_UID  = '${UID}' AND PID = ${PID}`;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows);
                      })
                    });
                }

                function GetSeancesListe(ChildID) {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_system'}, () => {});
                          let sql = `SELECT * 
                                    FROM 02_garderie_seances
                                    WHERE  PID = ${PID} AND  Classe_ID = '${ChildID}';`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }
                function GetExamainListe(ChildID) {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_system'}, () => {});
                          let sql = `SELECT * FROM 02_garderie_classes_examain WHERE Classes_ID = '${ChildID}' AND PID = ${PID} ;`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }
                function GetBultinListe(ChildID) {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_system'}, () => {});
                          let sql = `SELECT * FROM 02_garderie_eleves_bultin WHERE Membre_ID = ${ChildID} AND PID = ${PID} ;`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }
                function GetAvertissemntListe(ChildID) {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_system'}, () => {});
                          let sql = `SELECT * FROM 02_garderie_eleves_avertissement WHERE Membre_ID = ${ChildID} AND PID = ${PID} ;`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }
                function GetRetenueListe(ChildID) {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_system'}, () => {});
                           let sql = `SELECT * FROM 02_garderie_eleves_retenue WHERE Membre_ID = ${ChildID} AND PID = ${PID} ;`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }

                  // Call, Function
                async function query() {
                    const suivieData = {}
                      suivieData.inscription = await GetInscriptionListe()
                      suivieData.souscription = await GetSouscriptionListe()

                      const childrenListe = await FetchAllChildren(); 
                      for (var i = 0; i < childrenListe.length; i++) {
                        childrenListe[i].Seances = await GetSeancesListe(childrenListe[i].EL_Classe)
                        childrenListe[i].Examain = await GetExamainListe(childrenListe[i].EL_Classe)
                        childrenListe[i].Bultin = await GetBultinListe(childrenListe[i].EL_ID)
                        childrenListe[i].Avertissemnt = await GetAvertissemntListe(childrenListe[i].EL_ID)
                        childrenListe[i].Retenue = await GetRetenueListe(childrenListe[i].EL_ID)
                      }

                      suivieData.childrenData = childrenListe
                  res.send(suivieData)
                }
                query();               
    })

    /* fetch data */
    Search.post('/suivie/gym', (req, res) => {
                let tag = req.body.tag;
                let PID = req.body.PID;
                let UID = req.body.UID;
                let Today = new Date().toISOString().split('T')[0]

                function GetInscriptionListe() {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                      let sql = `SELECT * FROM  06_gym_souscription WHERE  UID  = '${UID}' AND PID = ${PID}`;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows);
                      })
                    });
                }
                function GetSeancesListe() {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_system'}, () => {});
                          let sql = `SELECT * 
                                    FROM 06_gym_abonnement_seances
                                    LEFT JOIN 06_gym_abonnement ON 06_gym_abonnement_seances.Abonnement_ID = 06_gym_abonnement.AB_ID
                                    LEFT JOIN 06_gym_forfait ON 06_gym_abonnement.Forfait_ID = 06_gym_forfait.F_ID
                                    LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID
                                    WHERE 06_gym_abonnement_seances.PID = ${PID} AND 06_gym_membres.Releted_UID = ${UID};`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }
                function GetAbonnemmentListe() {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_system'}, () => {});
                          let sql = `SELECT * , COALESCE(06_gym_membres.ME_Name, 'PASSAGER') AS ME_Name ,  06_gym_abonnement.State AS Pay_State FROM 06_gym_abonnement 
                                     LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID
                                     LEFT JOIN 06_gym_forfait ON 06_gym_abonnement.Forfait_ID = 06_gym_forfait.F_ID
                                     WHERE 06_gym_abonnement.PID = '${PID}' AND 06_gym_membres.Releted_UID = ${UID} ;`;
                           connection.query(sql, (err, rows, fields) => {
                            if(err) return reject(err);
                            resolve(rows);
                          })
                  });
                }
                  // Call, Function
                async function query() {
                    const suivieData = {}
                      suivieData.inscription = await GetInscriptionListe()
                      suivieData.seance = await GetSeancesListe()
                      suivieData.abonnemment = await GetAbonnemmentListe()
                  res.send(suivieData)
                }
                query();               
    })

/*####################################[Systems]######################################*/
    Search.post('/systems/check', (req, res) => {
          let reqID = req.body.reqID;
          connection.changeUser({database : 'dszrccqg_registration'}, () => {});
          let sql = `SELECT * FROM  directory_request WHERE  Req_ID = '${reqID}' ;`; // AND Deleg = '${deleg}' 
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    Search.post('/systems/save', (req, res) => {
       (async() => {
          let system = req.body.system;
          let addTodirectory = req.body.addTodirectory;
          let userData = JSON.stringify(req.body.userData);
          let horaireData = JSON.stringify(req.body.horaireData);
          let alwaysOpen = req.body.alwaysOpen;
          let position = JSON.stringify(req.body.position);
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
          let inscData = JSON.stringify(req.body.inscData);
          let Req_ID =  await GenerateID(11111111,`directory_request`,'Req_ID','dszrccqg_registration');
          connection.changeUser({database : 'dszrccqg_registration'}, () => {});
          let sql = `INSERT INTO directory_request (Req_ID, UserData, ProfileData , Horaire, HoraireALways, Position,  Genre, Req_Date, Req_State) 
                     VALUES ('${addTodirectory ? addTodirectory : Req_ID}','${userData}','${inscData}','${horaireData}','${alwaysOpen}','${position}','${system}', '${Today}', 'W') `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json({Req_ID: addTodirectory ? addTodirectory : Req_ID});
          })
      })()           
    })

    Search.post('/systems/user/LogIn', (req, res) => {
        const LoginUID = req.body.LoginUID;
        function ExistTance(){
          return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_registration'}, () => {});
              let sql = `SELECT * FROM profile_login WHERE UID = '${LoginUID}'`;
               connection.query(sql, (err, rows, fields) => {
                  if (err) return reject(err);
                  resolve(rows);
              })
          });

        }

        function GetUserData(UID) {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_profile'}, () => {});
              let sql = `SELECT * FROM user_general_data WHERE UID = '${UID}' ` ;
               connection.query(sql, (err, rows, fields) => {
                  if (err) return reject(err);
                  resolve(rows[0]);

              })
            });
        }


        // Call, Function
      async function query() {
          const CheckExistance = await ExistTance(); 
          if (CheckExistance.length != 0) {
            const FetchedData = await GetUserData(CheckExistance[0].UID); 
            let UserLogIn = {Exist: true, UserD : FetchedData};
            res.send(UserLogIn)
          } else {
            let UserLogIn = {Exist: false, UserD : []};
            res.send(UserLogIn)
          }
      }
      query();
   })

    Search.post('/systems/fromfcb', (req, res) => {
          let isFromFcb = req.body.isFromFcb;
          let Genre = req.body.Genre;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
          let ToTime = new Date().toLocaleTimeString('fr-FR');
          connection.changeUser({database : 'dszrccqg_registration'}, () => {});
          let sql = `INSERT INTO directory_request_fcb (Fcb_ID,Date,Time,Genre) 
                     VALUES ('${isFromFcb}','${Today}','${ToTime}','${Genre}') ;`; // AND Deleg = '${deleg}' 
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

module.exports = Search