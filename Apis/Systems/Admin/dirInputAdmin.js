const express = require('express')
const multer = require('multer')
const AdminInputDir = express.Router()
const connection = require('../connection.js')
const ADIL = require('../ADIL.js')
const path = require("path");

//Multer.js
//const DIR = 'C:/Users/hp/Desktop/PROJECTS/ABYEDH/Assets';
const DIR = 'C:/Users/Administrator/Desktop/Abyedh/CDN/Profiles';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,  DIR );
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-'  + Math.floor(Math.random() * 9999999999999) + '.'+ file.mimetype.split('/')[1])
    }
});
const upload = multer({storage: storage});


//connection.end()

/*####################################[USEFUL]#####################################*/
    /*Generate FID, CID, C_ID, ,ID*/    
    const GenerateID = async (length,tabelName,dataBase,IdName) =>{ 
      function SelectAllID(ID,table) {
            return new Promise((resolve, reject) => {
                connection.changeUser({database : dataBase}, () => {});
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
    AdminInputDir.post('/LogIn', (req, res) => {
        const logInD = req.body.LoginData;
        function Connect(){
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `SELECT * FROM 000_abyedh_team WHERE Identification = '${logInD.Log}' AND PasswordSalt   = '${logInD.Pwd}'` ;
            connection.query(sql, (err, rows, fields) => {
              if (err) throw err
              res.json(rows[0])

            });
        }

        //render
        Connect()
    })

/*####################################[AJOUTER]####################################*/

      /*fetch all request */
      AdminInputDir.post('/nouveaux/ajouter', (req, res) => {
        (async() => {
            let tag = req.body.tag;
            let entreData = req.body.entreData;
            let PID = await GenerateID(1111111111, `${ADIL[tag].directoryTable}`,`dszrccqg_directory`,'PID');
            connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `INSERT INTO  ${ADIL[tag].directoryTable}(PID, Name,Gouv,Deleg,Adress,Phone) VALUES(${PID},'${entreData.Name}','${entreData.Gouv}','${entreData.Deleg}','${entreData.Adress}','${entreData.Phone}');`;  
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json({PID:PID});
            })
        })()        
      })

      /*fetch all request */
      AdminInputDir.post('/nouveaux/position', (req, res) => {
            let PID = req.body.PID;
            let position = req.body.position;
            connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `INSERT INTO  000_abyedh_profile_location(PID, Lng, Lat) VALUES(${PID},'${position.Lng}','${position.Lat}');`;  
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })       
      })

      /*fetch all request */
      AdminInputDir.post('/nouveaux/image', upload.single("Images"), (req, res) => {
          let PID = req.body.PID;
          let Genre = req.body.Genre;
          let Name = req.file.filename;
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `INSERT INTO  000_abyedh_profile_photoes(PID, ImageLink, ImageTag) VALUES(${PID},'${Name}','${Genre}');`;  
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
          })        
      })

      /*fetch all request */
      AdminInputDir.post('/nouveaux/horaire', (req, res) => {
            let PID = req.body.PID;
            let horaire = req.body.horaire;
            let allDay = req.body.allaDay;
            connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `INSERT INTO 000_abyedh_profile_horaires(PID, WorkingTime, ALL_Time) VALUES(${PID},'${horaire}','${allDay}');`;  
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })       
      })


/*####################################[MODIFIER]####################################*/

      /*fetch all request */
      AdminInputDir.post('/modifier/generale', (req, res) => {
            let tag = req.body.tag;
            let entreData = req.body.entreData;
            let PID = req.body.PID
            connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `UPDATE ${ADIL[tag].directoryTable}
                       SET   Name = '${entreData.Name}', Gouv = '${entreData.Gouv}',  Deleg = '${entreData.Deleg}',  Adress = '${entreData.Adress}', Phone =  '${entreData.Phone}'
                       WHERE PID = ${PID};`;  
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                 
      })

      /*fetch all request */
      AdminInputDir.post('/nouveaux/position', (req, res) => {
            let PID = req.body.PID;
            let position = req.body.position;
            connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `INSERT INTO  000_abyedh_profile_location(PID, Lng, Lat) VALUES(${PID},'${position.Lng}','${position.Lat}');`;  
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })       
      })

      /*fetch all request */
      AdminInputDir.post('/nouveaux/image', upload.single("Images"), (req, res) => {
          let PID = req.body.PID;
          let Genre = req.body.Genre;
          let Name = req.file.filename;
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `INSERT INTO  000_abyedh_profile_photoes(PID, ImageLink, ImageTag) VALUES(${PID},'${Name}','${Genre}');`;  
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
          })        
      })

      /*fetch all request */
      AdminInputDir.post('/nouveaux/horaire', (req, res) => {
            let PID = req.body.PID;
            let horaire = req.body.horaire;
            let allDay = req.body.allaDay;
            connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `INSERT INTO 000_abyedh_profile_horaires(PID, WorkingTime, ALL_Time) VALUES(${PID},'${horaire}','${allDay}');`;  
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })       
      })


/*####################################[MAIN]#######################################*/
      /* statistics */
      AdminInputDir.post('/ma/stat', (req, res) => {
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

                    res.send(main)
              }

              //render
              StatForMainPage(); 

      })

/*####################################[REQUEST]####################################*/

      /*fetch all request */
      AdminInputDir.post('/commande', (req, res) => {
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




module.exports = AdminInputDir