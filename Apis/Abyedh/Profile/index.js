const express = require('express')
const Profile = express.Router()
const connection = require('../connection.js')
const ADIL = require('../ADIL.js')
const REQUESTS = require('../REQUESTS.js')


/*####################################[USEFUL]#####################################*/
    /*Generate FID, CID, C_ID, ,ID*/    
    const GenerateID = async (length,tabelName,IdName) =>{ 
      function SelectAllID(ID,table) {
            return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_registration'}, () => {});
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

/*####################################[LOGIN]######################################*/
   /* Login */
   Profile.post('/LogIn', (req, res) => {
	      const logInD = req.body.LoginData;
      	function ExistTance(){
      		return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_registration'}, () => {});
              let sql = `SELECT * FROM profile_login WHERE PhoneNum = '${logInD.Log}' AND PasswordHash   = '${logInD.Pwd}'`;
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

/*####################################[SIGNUP]#########################################*/
  Profile.post('/SignUp/checkExistance', (req, res) => {
      const phone = req.body.phone;
      connection.changeUser({database : 'dszrccqg_registration'}, () => {});
        let sql = `SELECT * FROM profile_login WHERE PhoneNum = '${phone}'`;
         connection.query(sql, (err, rows, fields) => {
          if (err){ throw err}
          res.json(rows[0]);
        })
   })

  Profile.post('/SignUp/Save', (req, res) => {
    (async() => {
          const signUpData = req.body.signUpD;
          const Gouv = req.body.gouv;
          const Deleg = req.body.deleg;
          const Photo = req.body.isSelected;
          const PWD = req.body.password;
          let UID =   await GenerateID(1111111111,`profile_login`,'UID');
          function SavePassword(){
            return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_registration'}, () => {});
                let sql = `INSERT INTO profile_login(UID,PhoneNum,PasswordHash) VALUES(${UID}, '${signUpData.Phone}', '${PWD}') `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
            });

          }

          function SaveUserData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_profile'}, () => {});
                let sql = `INSERT INTO user_general_data(UID,Name,BirthDay,PhoneNum,BirthGouv,BirthDeleg,Sex,PictureId) 
                           VALUES(${UID}, '${signUpData.Name}', '${signUpData.BirthDay}','${signUpData.Phone}', '${Gouv}','${Deleg}', '${signUpData.Gender}', '${Photo}') ` ;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);

                })
              });
          }

          function SaveSetting() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_profile'}, () => {});
                let sql = `INSERT INTO dash_setting(UID,Favorite,Documents,Directory) 
                           VALUES(${UID}, '', '', '{"Gouv":"${Gouv}","Deleg":"${Deleg}"}')` ;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);

                })
              });
          }


          // Call, Function
        async function query() {
            const CheckPassword = await SavePassword(); 
            const CheckUserData = await SaveUserData(); 
            const CheckSetting = await SaveSetting(); 

            if (CheckPassword.length != 0 && CheckUserData.length != 0 && CheckSetting.length != 0) { 
              let UserLogIn = {Saved: true, UID: UID,  UserD : {UID : UID , Name : signUpData.Name , BirthDay : signUpData.BirthDay , PhoneNum : signUpData.Phone , BirthGouv : Gouv , BirthDeleg : Deleg , Sex : signUpData.Gender , PictureId: Photo} };
              res.send(UserLogIn)
            } else {
              let UserLogIn = {Saved: false, UserD : []};
              res.send(UserLogIn)
            }
        }
        query();
    })()   
  })

/*####################################[MAIN]#########################################*/
    Profile.post('/main', (req, res) => {
            let UID = req.body.UID;
            function FetchAllFeeds() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_profile'}, () => {});
                  let sql = `SELECT * FROM dash_feeds WHERE  UID = '${UID}' ORDER BY Notif_Date DESC, Notif_Time DESC LIMIT 10 `;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }
            function GetRequestData(RID, genre) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                  let sql = `SELECT * FROM  ${REQUESTS[genre].communicTable} WHERE  R_ID = '${RID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                      
                  })
                });
            }
            function GetPIDData(PID,genre) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                  let sql = `SELECT * FROM  ${ADIL[genre].directoryTable} WHERE  PID = '${PID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                  })
                });
            }

              // Call, Function
            async function query() {
                const feedList = await FetchAllFeeds(); 
                for (var i = 0; i < feedList.length; i++) {
                  feedList[i].RequestData = await GetRequestData(feedList[i].R_ID,feedList[i].Notif_Genre,)
                  feedList[i].PidData = await GetPIDData(feedList[i].PID, feedList[i].P_Genre)
                }
              res.send(feedList)
            }
            query();
      
    })

    Profile.post('/main/limitted', (req, res) => {
            let UID = req.body.UID;
            function FetchAllFeeds() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_profile'}, () => {});
                  let sql = `SELECT * FROM dash_feeds WHERE  UID = '${UID}' LIMIT 10`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }
            function GetRequestData(RID, genre) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                  let sql = `SELECT * FROM  ${REQUESTS[genre].communicTable} WHERE  R_ID = '${RID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                      
                  })
                });
            }
            function GetPIDData(PID,genre) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                  let sql = `SELECT * FROM  ${ADIL[genre].directoryTable} WHERE  PID = '${PID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                  })
                });
            }

              // Call, Function
            async function query() {
                const feedList = await FetchAllFeeds(); 
                for (var i = 0; i < feedList.length; i++) {
                  feedList[i].RequestData = await GetRequestData(feedList[i].R_ID,feedList[i].Notif_Genre,)
                  feedList[i].PidData = await GetPIDData(feedList[i].PID, feedList[i].P_Genre)
                }
              res.send(feedList)
            }
            query();
      
    })

/*####################################[SUIVIE]#######################################*/
    Profile.post('/suivie', (req, res) => {
            let UID = req.body.UID;
            function FetchAllSuivie() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_profile'}, () => {});
                  let sql = `SELECT * FROM dash_suivie WHERE  UID = '${UID}' ORDER BY Notif_Date DESC LIMIT 10`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }
            function GetRequestData(RID, genre) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                  let sql = `SELECT * FROM  ${REQUESTS[genre].communicTable} WHERE  R_ID = '${RID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                      
                  })
                });
            }
            function GetPIDData(PID,genre) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                  let sql = `SELECT * FROM  ${ADIL[genre].directoryTable} WHERE  PID = '${PID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                  })
                });
            }

              // Call, Function
            async function query() {
                const suivieList = await FetchAllSuivie(); 
                for (var i = 0; i < suivieList.length; i++) {
                  suivieList[i].RequestData = await GetRequestData(suivieList[i].R_ID,suivieList[i].Notif_Name)
                  suivieList[i].PidData = await GetPIDData(suivieList[i].PID, suivieList[i].P_Genre)
                }
              res.send(suivieList)
            }
            query();
      
    })

    Profile.post('/suivie/limitted', (req, res) => {
            let UID = req.body.UID;

            function FetchAllFeeds() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT * FROM 08_vente_en_gros_camion WHERE  PID = '${PID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }
            function GetRequestData(camId) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT SUM(Tota) AS RCT FROM 08_vente_en_gros_camion_facture WHERE Camion = ${camId} AND Cre_Date = '${Today}'  AND PID = '${PID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      if (rows[0].RCT == null) {resolve('0.000');} else {resolve(rows[0].RCT.toFixed(3));}
                      
                  })
                });
            }
            function GetPIDData(camId) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT SUM(08_vente_en_gros_camion_stock.Qte * (08_vente_en_gros_articles.Prix_vente/08_vente_en_gros_articles.Groupage)) AS FND
                            FROM 08_vente_en_gros_camion_stock 
                            INNER JOIN 08_vente_en_gros_articles ON 08_vente_en_gros_camion_stock.Article = 08_vente_en_gros_articles.A_Code
                            WHERE 08_vente_en_gros_camion_stock.Camion = ${camId}`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      if (rows[0].FND == null) {resolve('0.000');} else {resolve(rows[0].FND.toFixed(3));}
                  })
                });
            }

              // Call, Function
            async function query() {
                const camionList = await FetchAllCamion(); 
                for (var i = 0; i < camionList.length; i++) {
                  camionList[i].Recette = await CalculateRecette(camionList[i].Cam_ID)
                  camionList[i].Fond = await CalculateFond(camionList[i].Cam_ID)
                }
              res.send(camionList)
            }
            query();
      
    })

/*####################################[FAVORITE]######################################*/
    Profile.post('/favorite', (req, res) => {
            let UID = req.body.UID;
            function FetchAllFavorite() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_profile'}, () => {});
                  let sql = `SELECT * FROM dash_favorite WHERE  UID = '${UID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }
            function GetPIDData(PID,genre) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                  let sql = `SELECT * FROM  ${ADIL[genre].directoryTable} WHERE  PID = '${PID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                  })
                });
            }
              // Call, Function
            async function query() {
                const favoriteList = await FetchAllFavorite(); 
                for (var i = 0; i < favoriteList.length; i++) {
                  favoriteList[i].PidData = await GetPIDData(favoriteList[i].PID, favoriteList[i].Genre)
                }
              res.send(favoriteList)
            }
            query();            
    })

    Profile.post('/favorite/ajouter', (req, res) => {
            let UID = req.body.UID;
            let PID = req.body.PID;
            let tag = req.body.tag;
            let Name = req.body.Name;
            let Today = new Date().toISOString().split('T')[0]
            connection.changeUser({database : 'dszrccqg_profile'}, () => {});
            let sql = `INSERT INTO dash_favorite (UID, PID ,Genre, added_date, Name, Category) 
                       VALUES ('${UID}','${PID}','${tag}', '${Today}','${Name}','${ADIL[tag].FavoriteGenre}') `;
             connection.query(sql, (err, rows, fields) => {
              if (err){res.json(err)}
                res.json(rows);
            })                 
    })

    Profile.post('/favorite/remove', (req, res) => {
            let UID = req.body.UID;
            let PID = req.body.PID;
            let tag = req.body.tag;
            connection.changeUser({database : 'dszrccqg_profile'}, () => {});
            let sql = `DELETE FROM dash_favorite WHERE UID = ${UID} AND  PID = ${PID} AND  Genre = '${tag}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){res.json(err)}
                res.json(rows);
            })                 
    })

    Profile.post('/favorite/check-favorite', (req, res) => {
            let UID = req.body.UID;
            let PID = req.body.PID;
            let tag = req.body.tag;
            connection.changeUser({database : 'dszrccqg_profile'}, () => {});
            let sql = `SELECT PK FROM dash_favorite WHERE  UID = '${UID}' AND PID = ${PID} AND Genre = '${tag}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){res.json(err)}
                res.json(rows.length);
            })                 
    })

/*####################################[DOCUMMENTS]###################################*/
      Profile.post('/documment', (req, res) => {
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
      Profile.post('/mydoc', (req, res) => {
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

      /* fetch data */
      Profile.post('/documment/sante', (req, res) => {
                let tag = req.body.tag;
                let UID = req.body.UID;
                let Today = new Date().toISOString().split('T')[0]

                function GetRendyVousListe() {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                      let sql = `SELECT * 
                                  FROM  dszrccqg_communications.01_docteur_rdv 
                                  INNER JOIN dszrccqg_directory.01_docteur ON dszrccqg_communications.01_docteur_rdv.PID = dszrccqg_directory.01_docteur.PID 
                                  WHERE  dszrccqg_communications.01_docteur_rdv.UID  = '${UID}'`;

                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows);
                      })
                    });
                }
                function GetSeancesListe() {
                  return new Promise((resolve, reject) => {
                          connection.changeUser({database : 'dszrccqg_system'}, () => {});
                          let sql = `SELECT * , COALESCE(dszrccqg_system.01_docteur_patient.PA_Name, 'PASSAGER') AS PA_Name , COALESCE(dszrccqg_system.01_docteur_ordonance.OR_Articles, '[]') AS OR_Articles ,  dszrccqg_system.01_docteur_seances.State AS Pay_State FROM dszrccqg_system.01_docteur_seances 
                                     LEFT JOIN dszrccqg_system.01_docteur_patient ON dszrccqg_system.01_docteur_seances.S_Patient = dszrccqg_system.01_docteur_patient.PA_ID
                                     LEFT JOIN dszrccqg_system.01_docteur_ordonance ON dszrccqg_system.01_docteur_seances.Ordonance = dszrccqg_system.01_docteur_ordonance.OR_ID
                                     INNER JOIN dszrccqg_directory.01_docteur ON dszrccqg_system.01_docteur_ordonance.PID = dszrccqg_directory.01_docteur.PID 
                                     WHERE  dszrccqg_system.01_docteur_patient.Releted_UID = ${UID};`;
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
                                     LEFT JOIN dszrccqg_system.01_docteur_patient ON dszrccqg_system.01_docteur_ordonance.OR_Patient = dszrccqg_system.01_docteur_patient.PA_ID
                                     INNER JOIN dszrccqg_directory.01_docteur ON dszrccqg_system.01_docteur_ordonance.PID = dszrccqg_directory.01_docteur.PID 
                                     WHERE dszrccqg_system.01_docteur_patient.Releted_UID = ${UID} ;`;
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

/*####################################[CALENDAR]#####################################*/
    Profile.post('/calendar', (req, res) => {
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

    Profile.post('/calendar/limitted', (req, res) => {
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

/*####################################[SETTING]######################################*/
    Profile.post('/setting', (req, res) => {
            let UID = req.body.UID;
            function FetchGeneralData() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_profile'}, () => {});
                  let sql = `SELECT * FROM user_general_data WHERE  UID = '${UID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                  })
                });
            }
            function FetchAuth() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_registration'}, () => {});
                  let sql = `SELECT * FROM profile_login WHERE  UID = '${UID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                  })
                });
            }
            function FetchSetting() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_profile'}, () => {});
                  let sql = `SELECT * FROM dash_setting WHERE  UID = '${UID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                  })
                });
            }

              // Call, Function
            async function query() {
                const settingD = [{}]; 
                settingD[0].General = await FetchGeneralData()
                settingD[0].Auth = await FetchAuth()
                settingD[0].Setting = await FetchSetting()
                res.send(settingD[0])
            }
            query();
                
    })

    Profile.post('/setting/update', (req, res) => {
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


module.exports = Profile