const express = require('express')
const multer = require('multer')
const Admin = express.Router()
const connection = require('../connection.js')
const ADIL = require('../ADIL.js')

const path = require("path");

//Multer.js
const DIR = 'C:/Users/kheli/Desktop/PROJECTS/abyedh/abyedh.system/Admin/public/houssem';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,  DIR );
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-'  + Math.floor(Math.random() * 9999999999999) + '.'+ file.mimetype.split('/')[1])
    }
});
const upload = multer({  storage: storage });


//connection.end()

/*####################################[USEFUL]#####################################*/
    /*Generate FID, CID, C_ID, ,ID*/    
    const GenerateID = async (length,tabelName,IdName) =>{ 
      function SelectAllID(ID,table) {
            return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
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
    Admin.post('/LogIn', (req, res) => {
        const logInD = req.body.LoginData;
        function Connect(){
            connection.changeUser({database : 'dszrccqg_registration'}, () => {});
            let sql = `SELECT * FROM system_login WHERE Identification = '${logInD.Log}' AND PasswordSalt   = '${logInD.Pwd}' AND SystemKey ='ADMIN' ` ;
            connection.query(sql, (err, rows, fields) => {
              if (err) throw err;
              if (rows.length == 0 ) {
                let tokenTable = [Exist = 'false', KEY = 'null',]; 
                res.send(JSON.stringify(tokenTable));
              } 
              else {
                  let tokenTable = [Exist = 'true', KEY = rows[0].PID];
                  res.send(JSON.stringify(tokenTable)); 
               }
            }); 
        }

        //render
        Connect()
    })

/*####################################[MAIN]#######################################*/
      /* statistics */
      Admin.post('/ma/stat', (req, res) => {
              let PID =  req.body.PID;
              let Today = new Date().toISOString().split('T')[0]

              function NumRowsTable(table,db) {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT PK FROM 08_vente_en_gros_${table} WHERE PID = ${PID}`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows.length);
                        })
                });
              }
              function ClientDistrubition() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT Gouv,COUNT(1) as Totale FROM 08_vente_en_gros_clients  WHERE PID  = '${PID}' GROUP BY Gouv ORDER BY Gouv;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
              }
              function GenreDistrubition() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT Genre,COUNT(1) as Totale FROM 08_vente_en_gros_articles  WHERE PID  = '${PID}' GROUP BY Genre ORDER BY Genre;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
              }
              function CommandeDistrubition() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                        let sql = `SELECT State,COUNT(1) as Totale FROM 08_vente_en_gros_demande  WHERE PID  = '${PID}' GROUP BY State ORDER BY State;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
              }
              function RecetteDepo() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT Cre_Date,SUM(Tota) as Totale FROM 08_vente_en_gros_factures  WHERE PID  = '${PID}' GROUP BY Cre_Date ORDER BY Cre_Date LIMIT 10;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
              }
              function FetchAllCamion() {
                  return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_system'}, () => {});
                    let sql = `SELECT Cam_ID, Cam_Name, Matricule, Chauffeur  FROM 08_vente_en_gros_camion  WHERE PID  = '${PID}' `;
                     connection.query(sql, (err, rows, fields) => {
                        if (err) return reject(err);
                        resolve(rows);
                    })
                  });
              }
              function CalculateRecette(camId) {
                  return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_system'}, () => {});
                    let sql = `SELECT SUM(Tota) AS RCT
                               FROM 08_vente_en_gros_camion_facture  WHERE PID  = '${PID}'  AND  Camion = ${camId} AND Cre_Date = '${Today}'`;
                     connection.query(sql, (err, rows, fields) => {
                        if (err) return reject(err);
                        if (rows[0].RCT == null) {resolve('0.000');} else {resolve(rows[0].RCT.toFixed(3));}
                        
                    })
                  });
              }
              function CheckActivationState() {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_registration'}, () => {});
                      let sql = `SELECT * FROM system_activation WHERE PID  = '${PID}'`;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                           resolve(rows[0]);
                          
                      })
                     });
              }
              function RequestSystem() {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_registration'}, () => {});
                      let sql = `SELECT COUNT(1) as Tot FROM system_subscription_request `;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                           resolve(rows[0].Tot);
                          
                      })
                     });
              }

              // Call, Function
              async function StatForMainPage() {
                  const camionList = await FetchAllCamion(); 
                  for (var i = 0; i < camionList.length; i++) {
                      camionList[i].Recette = await CalculateRecette(camionList[i].Cam_ID)
                  }

                  let main = {};
                    main.clientsNum = await NumRowsTable('clients'); 
                    main.articlesNum = await NumRowsTable('articles'); 
                    main.camionsNum = await NumRowsTable('camion'); 
                    main.facturesNum = await NumRowsTable('factures'); 
                    main.clientDistro = await ClientDistrubition(); 
                    main.genreDistro = await  GenreDistrubition(); 
                    main.commandeDistro = await  CommandeDistrubition(); 
                    main.RecetteDepo = await  RecetteDepo(); 
                    main.camionStat = camionList; 
                    main.activationState = await CheckActivationState();
                    main.RequestSystem = await RequestSystem();

                    res.send(main)
              }

              //render
              StatForMainPage(); 

      })

/*####################################[COMMUNICATIONS]#############################*/

      /*fetch all request */
      Admin.post('/communication', (req, res) => {
            let PID = req.body.PID;
            connection.changeUser({database : 'information_schema'}, () => {});
            let sql = `SELECT * FROM tables WHERE TABLE_SCHEMA = 'dszrccqg_communications' AND TABLE_NAME != 'message_conversations' AND TABLE_NAME != 'message_contents' AND TABLE_NAME != '0000'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

/*####################################[ANNUAIRE]###################################*/

      /*fetch all request */
      Admin.post('/annuaire', (req, res) => {
            let PID = req.body.PID;
            connection.changeUser({database : 'information_schema'}, () => {});
            let sql = `SELECT * FROM tables WHERE TABLE_SCHEMA = 'dszrccqg_directory' AND TABLE_NAME != 'message_conversations' AND TABLE_NAME != 'message_contents' AND TABLE_NAME != '0000'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

/*####################################[USERS]######################################*/

      /*fetch all request */
      Admin.post('/users', (req, res) => {
            let PID = req.body.PID;
            connection.changeUser({database : 'information_schema'}, () => {});
            let sql = `SELECT * FROM dszrccqg_profile.user_general_data 
                       INNER JOIN dszrccqg_registration.profile_login ON  dszrccqg_profile.user_general_data.UID = dszrccqg_registration.profile_login.UID 
                       WHERE  1 `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

/*####################################[CLIENTS]####################################*/

      /*fetch all request */
      Admin.post('/clients', (req, res) => {
            let PID = req.body.PID;
            connection.changeUser({database : 'information_schema'}, () => {});
            let sql = `SELECT * FROM dszrccqg_registration.system_subscription 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_registration.system_subscription.UID  = dszrccqg_profile.user_general_data.UID 
                       WHERE  1 `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /*fetch all request */
      Admin.post('/clients/request', (req, res) => {
            let PID = req.body.PID;
            connection.changeUser({database : 'dszrccqg_registration'}, () => {});
            let sql = `SELECT * FROM system_subscription_request `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })




module.exports = Admin