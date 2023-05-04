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
            connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE Gouv = '${gouv}' LIMIT 50;`; // AND Deleg = '${deleg}' 
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
                      profileData.position = false
                    
                  res.send(profileData)
                }
                query();
                    
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
                let sql = `INSERT INTO 01_docteur_rdv(R_ID, PID, UID, user , Genre, comment, RDV_Date , R_Date ,State) 
                           VALUES('${R_ID}','${PID}','${UID}','','','${ReqData.comment}','${ReqData.date}','${Today}','W')`;
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
                let sql = `INSERT INTO 01_pharmacie_shop(R_ID, PID, UID, Wanted_Day, Articles , R_Date ,State) 
                           VALUES('${R_ID}','${PID}','${UID}','${ReqData.Wanted_Day}','${JSON.stringify(ReqData.articles)}','${Today}','W')`;
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
                let sql = `INSERT INTO 01_pharmacie_rdv(R_ID, PID, UID, user , Genre, comment, RDV_Date , R_Date ,State) 
                           VALUES('${R_ID}','${PID}','${UID}','','','${ReqData.comment}','${ReqData.date}','${Today}','W')`;
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

    Search.post('/Action/garderie-inscrie', (req, res) => {
      (async() => {
          let TAG = req.body.TAG;
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ReqData = req.body.inscrieData;
          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' );
          let Time = new Date().toLocaleTimeString('fr-FR');
          let R_ID =  await GenerateID(11111111111111111111,`02_garderie_inscrie`,'R_ID','dszrccqg_communications');

          function InsertRequest() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `INSERT INTO 02_garderie_inscrie(R_ID, PID, UID, Name , birthday, level, R_Date ,State) 
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
                requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'02_garderie_inscrie','garderie_inscrie','garderie_inscrie_saved')
              
            res.send(requestData)
          }

          SaveRequest();
      })()           
    })

/*####################################[Suivie]######################################*/
    

module.exports = Search