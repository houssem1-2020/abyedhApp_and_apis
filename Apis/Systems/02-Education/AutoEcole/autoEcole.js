const express = require('express')
const multer = require('multer')
const AutoEcole = express.Router()
const connection = require('../../connection.js')
const { spawn } = require('child_process');
const path = require("path");
const fs = require('fs');

//Multer.js
//const DIR = 'C:/Users/kheli/Desktop/PROJECTS/abyedh/abyedh.system/AutoEcole/public/houssem';
//const DIR = `C:/Users/hp/Desktop/BackUp/NouvBCK/`; 
const DIR = 'C:/Users/Administrator/Desktop/Abyedh/CDN/Images/Directory';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,  DIR );
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname +  Date.now() + '-'  + Math.floor(Math.random() * 9999999999999) + '.' + file.mimetype.split('/')[1])
    }
});
const upload = multer({  storage: storage, array: true });

// const accountSid = "ACce5a5fdffd330db55f27599aff6e635d";
// const authToken = "45ee080b9cf3212d2c6ea803c77f44ec"
// const verifySid = "VA52c47a4ff3b0b9028c16fd53ffd63533";
// const client = require("twilio")(accountSid, authToken);


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

    const SaveWithMulter = () =>{
        //Multer.js
        const DIR = 'C:/Users/kheli/Desktop/PROJECTS/abyedh/abyedh.system/AutoEcole/public/houssem';
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null,  DIR );
            },
            filename: (req, file, cb) => {
                cb(null, Date.now() + '-'  + Math.floor(Math.random() * 9999999999999) + '.'+ file.mimetype.split('/')[1])
            }
        });
        const upload = multer({  storage: storage });
    }

/*####################################[LOGIN]######################################*/
  /* Login */
  AutoEcole.post('/LogIn', (req, res) => {
      const logInD = req.body.LoginData;
      function Connect(){
          connection.changeUser({database : 'dszrccqg_registration'}, () => {});
          let sql = `SELECT * FROM system_login WHERE Identification = '${logInD.Log}' AND PasswordSalt   = '${logInD.Pwd}' AND SystemKey ='AutoEcole'` ;
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

  /* Check autorisation */
  AutoEcole.get('/Permission', (req, res) => {
      const PID = req.body.pid;
      let sql = `SELECT * FROM admin_setting WHERE SystemTag  = '${PID}'` ;
      connection.query(sql, (err, rows, fields) => {
        if (err) throw err
        res.send(rows);
      }); 
  })

/*####################################[MAIN]#######################################*/
      /* statistics */
      AutoEcole.post('/ma/stat', (req, res) => {
              let PID =  req.body.PID;
              let Today = new Date().toISOString().split('T')[0]

              function NumRowsTable(table,db) {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT PK FROM 02_autoecole_${table} WHERE PID = ${PID}`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows.length);
                        })
                });
              }

              function SeanceEvolution() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT SE_Date, COUNT(PK) as Totale FROM 02_autoecole_seances WHERE PID  = '${PID}'  GROUP BY SE_Date ORDER BY SE_Date LIMIT 10;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
              }

              function EleveDistrubition() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT Gouv,COUNT(1) as Totale FROM 02_autoecole_condidat  WHERE PID  = '${PID}' GROUP BY Gouv ORDER BY Gouv;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
              }
               
              function AbonnemmentDistrubition() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT 02_autoecole_abonnement.Forfait_ID, COUNT(1) as Totale , 02_autoecole_forfait.F_Name
                                   FROM 02_autoecole_abonnement  
                                   LEFT JOIN 02_autoecole_forfait ON 02_autoecole_abonnement.Forfait_ID = 02_autoecole_forfait.F_ID
                                   WHERE 02_autoecole_abonnement.PID  = '${PID}' GROUP BY 02_autoecole_abonnement.Forfait_ID ORDER BY 02_autoecole_abonnement.Forfait_ID;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
              }
              function ProffesseurDistrubition() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT Poste,COUNT(1) as Totale FROM 02_autoecole_team  WHERE PID  = '${PID}' GROUP BY Poste ORDER BY Poste;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
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

                  let main = {};
                    main.seancesNum = await NumRowsTable('seances'); 
                    main.abonnementNum = await NumRowsTable('abonnement'); 
                    main.elevesNum = await NumRowsTable('condidat'); 
                    main.classesNum = await NumRowsTable('voitures'); 
                    main.equipeNum = await NumRowsTable('team'); 

                     main.evolutionSeance = await SeanceEvolution(); 

                    main.eleveDistro = await EleveDistrubition(); 
                    main.classesDistro = []; 
                    main.abonnemmentDistro = await  AbonnemmentDistrubition(); 
                    main.teamDistro = await  ProffesseurDistrubition(); 
     
                    main.activationState = await CheckActivationState();

                    res.send(main)
              }

              //render
              StatForMainPage(); 

      })

/*####################################[REQUEST]####################################*/
      
      /* request data */
      AutoEcole.post('/request', (req, res) => {
            let PID = req.body.PID;
            connection.changeUser({database : 'dszrccqg_communications'}, () => {});
            let sql = `SELECT * FROM dszrccqg_communications.03_autoecole_inscrie 
                       LEFT JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.03_autoecole_inscrie.UID = dszrccqg_profile.user_general_data.UID 
                       LEFT JOIN dszrccqg_system.02_autoecole_condidat ON dszrccqg_communications.03_autoecole_inscrie.UID = dszrccqg_system.02_autoecole_condidat.Releted_UID
                       WHERE  dszrccqg_communications.03_autoecole_inscrie.PID = '${PID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })
      
      /* request data */
      AutoEcole.post('/request/info', (req, res) => {
            let PID = req.body.PID;
            let RID = req.body.CID;
            connection.changeUser({database : 'dszrccqg_communications'}, () => {});
            let sql = `SELECT * FROM dszrccqg_communications.03_autoecole_inscrie 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.03_autoecole_inscrie.UID = dszrccqg_profile.user_general_data.UID 
                       LEFT JOIN dszrccqg_system.02_autoecole_condidat ON dszrccqg_communications.03_autoecole_inscrie.UID = dszrccqg_system.02_autoecole_condidat.Releted_UID
                       WHERE  dszrccqg_communications.03_autoecole_inscrie.PID = '${PID}' AND dszrccqg_communications.03_autoecole_inscrie.R_ID = '${RID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows[0]);
            })
                
      })


      // /* request control : Update commande state  */
      // AutoEcole.post('/request/controle', (req, res) => {
      //       let PID = req.body.PID;
      //       let R_ID = req.body.RID;
      //       let State = req.body.state;
      //       connection.changeUser({database : 'dszrccqg_communications'}, () => {});
      //       let sql = `UPDATE 03_autoecole_inscrie
      //                  SET State = '${State}'
      //                  WHERE R_ID = '${R_ID}' AND PID = ${PID}`;
      //        connection.query(sql, (err, rows, fields) => {
      //         if (err){ throw err}
      //         res.json(rows);
      //       })
                
      // })
      /* request control : Update commande state  */
      AutoEcole.post('/request/controle', (req, res) => {
            (async() => {
                let TAG = req.body.TAG;
                let PID = req.body.PID;
                let UID = req.body.UID;
                let genreTag = req.body.genreTag;
                let R_ID = req.body.RID;
                let State = req.body.state
                let Data = req.body.data
                let DataGenre = req.body.dataGenre
                let actionName = req.body.actionName
                let saveNotif = req.body.saveNotif

                function UpdateRequest() {
                    return new Promise((resolve, reject) => {
                      connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                      let sql = `UPDATE ${REQUESTS[genreTag].communicTable}
                                 SET State = '${State}'   ${Data ? `, ${DataGenre} = '${Data}' `: ''}
                                 WHERE R_ID = '${R_ID}' AND PID = ${PID} `;
                       connection.query(sql, (err, rows, fields) => {
                          if (err) return reject(err);
                          resolve(rows);
                      })
                    });
                }

                // Call, Function
                async function SaveRequest() {
                      const requestData = {}
                      requestData.update = await UpdateRequest()
                      //{saveNotif ? requestData.notif = await UserIssue(UID,PID,R_ID,TAG,REQUESTS[genreTag].communicTable,genreTag,actionName) : requestData.notif = []}
                      //requestData.notif = await UserIssue(UID,PID,R_ID,TAG,'03_autoecole_inscrie','docteur_rdv','docteur_rdv_saved')
                    
                  res.send(requestData)
                }

                SaveRequest();
            })()
                
      })

      /* comptes */
      AutoEcole.post('/request/accepter', (req, res) => {
          (async() => {
              let PID = req.body.PID;
              let factureD = req.body.factureD;
              let FID = await GenerateID(1111111111,`01_docteur_seances`,'T_ID');
              let articleL = JSON.stringify(factureD.articles)
              let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
              let ToTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `INSERT INTO 01_docteur_seances (PID, T_ID,Caisse_ID,Final_Value,Espece, T_Date, T_Time,Client,State, Paye_Bons, Is_Commande ,Articles) 
                       VALUES (${PID},'${FID}','INDCMD','${factureD.totale}','0','${Today}','${ToTime}', 'PASSAGER' ,'Waitting','','${factureD.CommandeID}','${articleL}')`;
              connection.query(sql, (err, rows, fields) => {
                if (err) throw err
                res.json({FID:FID});
                
              }); 
       })() 
                
      })

/*####################################[ABONNEMENT]#################################*/
    
    /* selectionner tous les factures */
    AutoEcole.post('/abonnement', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * , 02_autoecole_condidat.CD_Name ,  02_autoecole_abonnement.State AS Pay_State FROM 02_autoecole_abonnement 
                     LEFT JOIN 02_autoecole_condidat ON 02_autoecole_abonnement.Condidat_ID = 02_autoecole_condidat.CD_ID
                     LEFT JOIN 02_autoecole_forfait ON 02_autoecole_abonnement.Forfait_ID = 02_autoecole_forfait.F_ID  
                     WHERE 02_autoecole_abonnement.PID = ${PID} LIMIT 200`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}

            res.json(rows);
          })
              
    })
    /*Ajouter Camion*/
    AutoEcole.post('/abonnement/ajouter', (req, res) => {
          (async() => {
              let PID = req.body.PID
              let abonnemmentData = req.body.abonnemmentData
              let AB_ID =   await GenerateID(1111111111,`02_autoecole_abonnement`,'AB_ID');
              let sql = `INSERT INTO 02_autoecole_abonnement (PID, AB_ID , Forfait_ID, Condidat_ID , AB_Date, AB_Depart_Date, AB_Termine_Date , AB_Genre, AB_Permis, State, AB_Resultat, AB_Paymment) 
                         VALUES (${PID} ,${AB_ID},'${abonnemmentData.Forfait_ID}', '${abonnemmentData.Condidat_ID}','${abonnemmentData.AB_Depart_Date}','${abonnemmentData.AB_Depart_Date}','','${abonnemmentData.AB_Genre}','${abonnemmentData.AB_Permis}','NonPayee','En Cours','[]') `;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })  
          })()             
    })

    /*Ajouter Camion*/
    AutoEcole.post('/abonnement/resultat', (req, res) => {
 
              let PID = req.body.PID
              let AB_ID = req.body.AB_ID
              let changerResultData = req.body.changerResultData
 
              let sql = `UPDATE 02_autoecole_abonnement
                         SET AB_Resultat = '${changerResultData.AB_Resultat}' 
                         WHERE AB_ID = '${AB_ID}' AND PID = ${PID}`;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })  
           
    })


    /* selectionner tous les factures */
    AutoEcole.post('/abonnement/resumer', (req, res) => {
           let PID = req.body.PID
           let date = req.body.targetDate
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `SELECT * , 02_autoecole_condidat.CD_Name ,  02_autoecole_abonnement.State AS Pay_State FROM 02_autoecole_abonnement 
                     LEFT JOIN 02_autoecole_condidat ON 02_autoecole_abonnement.Condidat_ID = 02_autoecole_condidat.CD_ID
                     LEFT JOIN 02_autoecole_forfait ON 02_autoecole_abonnement.Forfait_ID = 02_autoecole_forfait.F_ID  
                     WHERE 02_autoecole_abonnement.AB_Depart_Date >= '${date.start}' AND 02_autoecole_abonnement.AB_Depart_Date <= '${date.end}' `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })        
      })

    /* selectioner un facture et ses articles 
    AutoEcole.post('/abonnement/select', (req, res) => {
           let PID = req.body.PID
           let FID = req.body.fid
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `SELECT * , COALESCE(02_autoecole_condidat.CD_Name, 'PASSAGER') AS CD_Name ,  02_autoecole_abonnement.State AS Pay_State FROM 02_autoecole_abonnement 
                     LEFT JOIN 02_autoecole_condidat ON 02_autoecole_abonnement.Membre_ID = 02_autoecole_condidat.CD_ID
                     LEFT JOIN 02_autoecole_forfait ON 02_autoecole_abonnement.Forfait_ID = 02_autoecole_forfait.F_ID
                     WHERE 02_autoecole_abonnement.PID = '${PID}' AND 02_autoecole_abonnement.AB_ID = ${FID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.send(rows);
          })         
    })*/
    AutoEcole.post('/abonnement/select', (req, res) => {
          let PID = req.body.PID
          let FID = req.body.fid
          function FetchAbonnementData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * , 02_autoecole_condidat.CD_Name ,  02_autoecole_abonnement.State AS Pay_State FROM 02_autoecole_abonnement 
                         LEFT JOIN 02_autoecole_condidat ON 02_autoecole_abonnement.Condidat_ID = 02_autoecole_condidat.CD_ID
                         LEFT JOIN 02_autoecole_forfait ON 02_autoecole_abonnement.Forfait_ID = 02_autoecole_forfait.F_ID  
                         WHERE 02_autoecole_abonnement.PID = '${PID}' AND 02_autoecole_abonnement.AB_ID = ${FID} `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows[0]);
                })
              });
          }

          function SelectSeances() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 02_autoecole_seances  WHERE PID = ${PID} AND SE_Abonnemment = ${FID}`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

           



            // Call, Function
          async function query() {
              const clientListe = {}; 
              clientListe.Data = await FetchAbonnementData()
              clientListe.Seances = await  SelectSeances()
              clientListe.Paymment = []
            res.send(clientListe)
          }
          query();               
    })

    AutoEcole.post('/abonnement/payee', (req, res) => {
           let PID = req.body.PID
           let editPaymment = req.body.editPaymment 
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `UPDATE 02_autoecole_abonnement
                      SET AB_Paymment = '${JSON.stringify(editPaymment.toEdit)}'
                      WHERE AB_ID = '${editPaymment.FID}' AND PID =  ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })         
    })
    /* modifier un facture */
    AutoEcole.post('/abonnement/modifier', (req, res) => {
           let PID = req.body.PID
           let abonnemmentData = req.body.abonnemmentData
           let AB_ID = req.body.AB_ID
            
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `UPDATE 02_autoecole_abonnement
                      SET Forfait_ID = '${abonnemmentData.Forfait_ID}', Condidat_ID = '${abonnemmentData.Condidat_ID}', AB_Depart_Date = '${abonnemmentData.AB_Depart_Date}', AB_Genre = '${abonnemmentData.AB_Genre}', AB_Permis ='${abonnemmentData.AB_Permis}' 
                      WHERE AB_ID = '${AB_ID}' AND PID = ${PID}`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })         
    })

    /* modifier un facture */
    AutoEcole.post('/abonnement/supprimer', (req, res) => {
           let PID = req.body.PID
           let FID = req.body.FID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `DELETE FROM 02_autoecole_abonnement WHERE  T_ID = '${FID}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })         
    })

/*####################################[SEANCES]####################################*/

      /* featch tou les camion*/
      AutoEcole.post('/seances', (req, res) => {
              let PID = req.body.PID
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `SELECT * 
                        FROM 02_autoecole_seances
                        LEFT JOIN 02_autoecole_abonnement ON 02_autoecole_seances.SE_Abonnemment = 02_autoecole_abonnement.AB_ID
                        LEFT JOIN 02_autoecole_condidat ON 02_autoecole_abonnement.Condidat_ID = 02_autoecole_condidat.CD_ID
                        WHERE 02_autoecole_seances.PID = ${PID} LIMIT 200`;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })             
      })

      /* featch tou les camion*/
      AutoEcole.post('/seances/info', (req, res) => {
              let PID = req.body.PID
              let SID = req.body.SID
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `SELECT * 
                        FROM 02_autoecole_seances
                        LEFT JOIN 02_autoecole_abonnement ON 02_autoecole_seances.SE_Abonnemment = 02_autoecole_abonnement.AB_ID
                        LEFT JOIN 02_autoecole_condidat ON 02_autoecole_abonnement.Condidat_ID = 02_autoecole_condidat.CD_ID
                        WHERE 02_autoecole_seances.PID = '${PID}' AND 02_autoecole_seances.SE_ID = '${SID}'`;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })             
      })

      
      /*Ajouter Camion*/
      AutoEcole.post('/seances/ajouter', (req, res) => {
          (async() => {
              let PID = req.body.PID
              let seanceData = req.body.seanceData
              let SE_ID =   await GenerateID(1111111111,`02_autoecole_seances`,'SE_ID');
              let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
              let ToTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
              let trajetListeSTF = JSON.stringify(seanceData.trajetListe)
              let sql = `INSERT INTO 02_autoecole_seances (SE_ID, PID,  SE_Genre,  SE_Activite , SE_Trajets,  SE_Abonnemment, Voiture_ID, Moniteur_ID, SE_Date, SE_Time ) 
                         VALUES ('${SE_ID}','${PID}', '${seanceData.SE_Genre}', ${seanceData.SE_Activite}, '${trajetListeSTF}','${seanceData.SE_Abonnemment}','${seanceData.Voiture_ID}','${seanceData.Moniteur_ID}', '${seanceData.SE_Date}','${ToTime}')`;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })  
          })()             
      })

      /* modifier un camion */
      AutoEcole.post('/seances/modifier', (req, res) => {
            let PID = req.body.PID
            let SE_ID = req.body.SE_ID
            let seanceData = req.body.seanceData
            let trajetListeSTF = JSON.stringify(seanceData.trajetListe)
            let sql = `UPDATE 02_autoecole_seances
                      SET SE_Genre = '${seanceData.SE_Genre}', SE_Activite = ${seanceData.SE_Activite} , SE_Activite = ${trajetListeSTF}, SE_Abonnemment = '${seanceData.SE_Abonnemment}', SE_Abonnemment ='${seanceData.SE_Abonnemment}' , Moniteur_ID ='${seanceData.Moniteur_ID}' , SE_Date ='${seanceData.SE_Date}'   
                      WHERE SE_ID = '${SE_ID}' AND PID =  ${PID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){res.json(err)}
                res.json(rows);
            })          
      })


      /*PRINTING*/ 

      //facture du jour 
     AutoEcole.post('/seances/resumer', (req, res) => {
         let PID = req.body.PID
         let date = req.body.targetDate
         connection.changeUser({database : 'dszrccqg_system'}, () => {});
         let sql = `SELECT * 
                        FROM 02_autoecole_seances
                        LEFT JOIN 02_autoecole_abonnement ON 02_autoecole_seances.SE_Abonnemment = 02_autoecole_abonnement.AB_ID
                        LEFT JOIN 02_autoecole_condidat ON 02_autoecole_abonnement.Condidat_ID = 02_autoecole_condidat.CD_ID
                        WHERE 02_autoecole_seances.PID = ${PID} AND  02_autoecole_seances.SE_Date >= '${date.start}' AND 02_autoecole_seances.SE_Date <= '${date.end}' `;
         connection.query(sql, (err, rows, fields) => {
          if (err){ throw err}
          res.send(rows);
          })         
     })

      /* modifier un facture */
      AutoEcole.post('/seances/supprimer', (req, res) => {
           let PID = req.body.PID
           let SID = req.body.SID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `DELETE FROM 02_autoecole_seances WHERE  SE_ID = '${SID}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })         
      })

/*####################################[OFFRES]#####################################*/

    //fetch all article */
    AutoEcole.post('/forfait', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 02_autoecole_forfait WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

   /* selectioner un client */
    AutoEcole.post('/forfait/select', (req, res) => {
          let PID = req.body.PID
          let Code = req.body.code

          function FetchMembreData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 02_autoecole_forfait WHERE F_ID = '${Code}' AND PID = ${PID}`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    if (!rows[0]) {resolve([{ Name:null , }]);} else {resolve(rows[0]);}
                })
              });
          }

          function SelectAbonnement() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * , 02_autoecole_condidat.CD_Name ,  02_autoecole_abonnement.State AS Pay_State FROM 02_autoecole_abonnement 
                         LEFT JOIN 02_autoecole_condidat ON 02_autoecole_abonnement.Condidat_ID = 02_autoecole_condidat.CD_ID
                         LEFT JOIN 02_autoecole_forfait ON 02_autoecole_abonnement.Forfait_ID = 02_autoecole_forfait.F_ID  
                         WHERE 02_autoecole_abonnement.PID = '${PID}' AND 02_autoecole_abonnement.Forfait_ID = '${Code}'  `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

 

            // Call, Function
          async function query() {
              const clientListe = {}; 
              clientListe.Data = await FetchMembreData()
              clientListe.Abonnement = await SelectAbonnement()
            res.send(clientListe)
          }
          query();               
    })

    /* ajouter article */
    AutoEcole.post('/forfait/ajouter', (req, res) => {
        (async() => {
            let PID = req.body.PID;
            let forfaitD = req.body.forfaitD;
            let F_ID =   await GenerateID(1111111111,`02_autoecole_forfait`,'F_ID');
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `INSERT INTO 02_autoecole_forfait (PID  ,F_ID, F_Name, Tarif, NB_Seance) 
                       VALUES ('${PID}','${F_ID}','${forfaitD.F_Name}', '${forfaitD.Tarif}','${forfaitD.NB_Seance}') `;
             connection.query(sql, (err, rows, fields) => {
              if (err){res.json(err)}
                res.json(rows);
            }) 
        })()          
    })


    /* modifier article  */
    AutoEcole.post('/forfait/modifier', (req, res) => {
          let PID = req.body.PID
          let F_ID = req.body.F_ID
          let forfaitData = req.body.forfaitData
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 02_autoecole_forfait
                     SET F_Name = '${forfaitData.F_Name}',  Tarif = '${forfaitData.Tarif}', NB_Seance = '${forfaitData.NB_Seance}' 
                     WHERE F_ID = '${F_ID}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })    
           //res.json(fields)      
    })

    /* modifier article  */
    AutoEcole.post('/forfait/modifier/image', (req, res) => {
          let PID = req.body.PID
          let path = req.body.path
          let Code = req.body.code
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 02_autoecole_forfait
                     SET Photo_Path = '${path}'
                     WHERE A_Code = '${Code}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })    
           //res.json(fields)      
    })

    /* supprimer article */
    AutoEcole.post('/forfait/supprimer', (req, res) => {
          let articleData = req.body.articleD
          // let sql = `INSERT INTO alimentaire_article
          //           (A_Code,Name, Prix_vente, Quantite, Prix_achat, Genre, Socite, Repture, TVA,Groupage,facturable) 
          //           VALUES ('${articleData.A_Code}','${articleData.Name}','${articleData.PrixV}','${articleData.Qte}','${articleData.PrixA}','${articleData.Genre}','${articleData.Socite}','${articleData.Repture}','${articleData.TVA}','${articleData.Groupage}','') `;
          //  connection.query(sql, (err, rows, fields) => {
          //   if (err){res.json(err)}
          //     res.json(rows);
          // })    
           res.json(articleData)      
    })

/*####################################[CONDIDAT]###################################*/

    /* selectioner tous les client */
    AutoEcole.post('/condidat', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT *  FROM 02_autoecole_condidat  WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })         
    })

    /* selectioner un client */
    AutoEcole.post('/condidat/info', (req, res) => {
          let PID = req.body.PID;
          let condidatId = req.body.condidatId
          function FetchMembreData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 02_autoecole_condidat WHERE PID = ${PID} AND CD_ID = ${condidatId}`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    if (!rows[0]) {resolve([{ Name:null , }]);} else {resolve(rows[0]);}
                })
              });
          }

          function SelectExamain(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 02_autoecole_calendrier WHERE Salle_ID = '${Name}' AND PID = ${PID} `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          function SelectAbonnemment() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 02_autoecole_abonnement WHERE Condidat_ID = '${condidatId}' AND PID = '${PID}'`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
         }

         function SelectSeances(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * 
                        FROM 02_autoecole_seances
                        LEFT JOIN 02_autoecole_abonnement ON 02_autoecole_seances.SE_Abonnemment = 02_autoecole_abonnement.AB_ID
                        LEFT JOIN 02_autoecole_condidat ON 02_autoecole_abonnement.Condidat_ID = 02_autoecole_condidat.CD_ID
                        WHERE 02_autoecole_abonnement.Condidat_ID = '${condidatId}' AND 02_autoecole_seances.PID = '${PID}'`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
         }


            // Call, Function
          async function query() {
              const clientListe = {}; 
              clientListe.Data = await FetchMembreData()
              clientListe.examain = await  SelectExamain(clientListe.Data.Releted_UID)
              clientListe.abonnemment = await SelectAbonnemment()
              clientListe.Seances = await SelectSeances(condidatId)
            res.send(clientListe)
          }
          query();               
    })
     
    //check article in abyedhDB */
    AutoEcole.post('/condidat/checkAbyedhDb', (req, res) => {
          let UID = req.body.UID;
          connection.changeUser({database : 'dszrccqg_profile'}, () => {});
          let sql = `SELECT * FROM user_general_data WHERE UID = '${UID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows[0]);
          })
              
    })

    /* selectioner tous les client */
    AutoEcole.post('/condidat/verification', (req, res) => {
          let PID = req.body.PID;
          let UID = req.body.UID;
          let CD_ID = req.body.CD_ID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 02_autoecole_condidat
                     SET Releted_UID = ${UID}
                     WHERE CD_ID = ${CD_ID} AND PID = ${PID}`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /* selectioner tous les client */
    AutoEcole.post('/condidat/verification/checkID', (req, res) => {
          let PID = req.body.PID;
          let UID = req.body.UID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 02_autoecole_condidat WHERE Releted_UID = ${UID} AND PID = ${PID}`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })
    
    /* Ajouter client */
    AutoEcole.post('/condidat/ajouter', (req, res) => {
      (async() => {
        let PID = req.body.PID;
        let condidatData = req.body.condidatData
        let CID = await GenerateID(1111111111,'02_autoecole_condidat','CD_ID');
        let Today = new Date().toISOString().split('T')[0]
          let sql = `INSERT INTO 02_autoecole_condidat (CD_ID, PID, Releted_UID,  CD_Name, Creation_Date, CD_Phone, CD_Adress, CD_Naissance , CD_State, Gouv, Deleg) 
                     VALUES (${CID}, ${PID},'${condidatData.Releted_UID}','${condidatData.Name}','${Today}','${condidatData.CD_Phone}','${condidatData.CD_Adress}','${condidatData.CD_Naissance}','null','${condidatData.Gouv}', '${condidatData.Deleg}' );`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })
        })()      
    })

    /* modifier un client */
    AutoEcole.post('/condidat/modifier', (req, res) => {
        let PID = req.body.PID;
        let condidatData = req.body.condidatData
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `UPDATE 02_autoecole_condidat
                   SET CD_Name = '${condidatData.CD_Name}',  CD_Phone = '${condidatData.CD_Phone}' , CD_Adress = '${condidatData.CD_Adress}' ,  Gouv = '${condidatData.Gouv}' , Deleg = '${condidatData.Deleg}' , CD_Naissance = '${condidatData.CD_Naissance}'
                   WHERE CD_ID = ${condidatData.CD_ID} AND PID = ${PID}`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })     
    })

    /* map : liste des location */
    AutoEcole.post('/condidat/fidelite', (req, res) => {
           let PID = req.body.PID;
           let genre = req.body.genre
           let start = req.body.start
           let finish = req.body.finish
           let top = req.body.Top
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql1 = `SELECT  01_docteur_seances.S_Patient, SUM(Final_Value) as Totale, 01_docteur_seances.T_Date , 02_autoecole_condidat.CD_Name, 02_autoecole_condidat.CD_ID, COALESCE(02_autoecole_condidat.CD_Name, 'PASSAGER') AS ME_Name
                      FROM 01_docteur_seances 
                      LEFT JOIN 02_autoecole_condidat ON 01_docteur_seances.S_Patient = 02_autoecole_condidat.CD_ID
                      WHERE 01_docteur_seances.T_Date > '${start}' AND 01_docteur_seances.T_Date < '${finish}' 
                      GROUP BY 01_docteur_seances.S_Patient ORDER BY SUM(Final_Value) DESC LIMIT ${top};`

           let sql2 = `SELECT COUNT(1) as Totale , 01_docteur_seances.S_Patient , 02_autoecole_condidat.CD_Name , 02_autoecole_condidat.CD_ID, COALESCE(02_autoecole_condidat.CD_Name, 'PASSAGER') AS ME_Name
                      FROM 01_docteur_seances  
                      LEFT JOIN 02_autoecole_condidat ON 01_docteur_seances.S_Patient = 02_autoecole_condidat.CD_ID
                      WHERE 01_docteur_seances.T_Date > '${start}' AND 01_docteur_seances.T_Date < '${finish}'  
                      GROUP BY 01_docteur_seances.S_Patient ORDER BY COUNT(1) DESC LIMIT ${top};`

           connection.query(genre == 'Totale' ? sql1 : sql2 , (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

/*####################################[VOITURES]###################################*/

    //fetch all article */
    AutoEcole.post('/voitures', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 02_autoecole_voitures WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /* selectioner un client */
    AutoEcole.post('/voitures/info', (req, res) => {
          let PID = req.body.PID;
          let classeID = req.body.classeID
          function FetchClasseData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 02_autoecole_voitures WHERE PID = '${PID}' AND VO_ID = ${classeID}`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    if (!rows[0]) {resolve([{ Name:null , }]);} else {resolve(rows[0]);}
                })
              });
          }

          function SelectSeances(Classes) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT *  FROM 02_autoecole_seances WHERE PID = ${PID} AND  Voiture_ID = '${classeID}'  `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function SelectEleve(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 02_autoecole_condidat WHERE PID = ${PID} AND CD_Classe = '${classeID}'  `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function SelectExamain(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 02_autoecole_calendrier WHERE Classes_ID = '${Name}' AND PID = ${PID} `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
 

            // Call, Function
          async function query() {
              const clientListe = {}; 
              clientListe.Data = await FetchClasseData()

              clientListe.Seances = await SelectSeances(classeID)
              clientListe.Eleve = [] //await SelectEleve(classeID)
              clientListe.Examain = [] //await  SelectExamain(classeID)
 

            res.send(clientListe)
          }
          query();               
    })

    /* ajouter article */
    AutoEcole.post('/voitures/ajouter', (req, res) => {
      (async() => {
          let PID = req.body.PID;
          let voitureData = req.body.voitureData;
          let VO_ID = await GenerateID(1111111111,'02_autoecole_voitures','VO_ID');
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `INSERT INTO 02_autoecole_voitures (PID , VO_ID, VO_Name, VO_Genre, VO_Matricule, VO_Identifiant , VO_Pwd) 
                       VALUES ('${PID}','${VO_ID}','${voitureData.VO_Name}','${voitureData.VO_Genre}','${voitureData.VO_Matricule}','${voitureData.VO_Identifiant}','${voitureData.VO_Pwd}' ) `;
             connection.query(sql, (err, rows, fields) => {
              if (err){res.json(err)}
                res.json(rows);
            })
      })()             
    })



    //selectioner calendar articles : ba3ed 7otha m3a elli fou9ha 
    AutoEcole.post('/voitures/niveauxListe', (req, res) => {
            let PID = req.body.PID
            let Code = req.body.code
            function FetchPlatInfo() {
                return new Promise((resolve, reject) => {
                   connection.changeUser({database : 'dszrccqg_system'}, () => {});
                    let sql = `SELECT * FROM 02_autoecole_voitures WHERE P_Code = '${Code}' AND PID = ${PID}`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                  })
                });
            }
            
            function FetchInFacture() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT * FROM 02_autoecole_abonnement WHERE  Articles LIKE '%${Code}%' AND PID = ${PID}`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }

            // Call, Function
            async function StockArticleCalendar() {
                const platInfo = {}; 
                platInfo.Data = await FetchPlatInfo()
                platInfo.InFacture = await FetchInFacture()
              res.send(platInfo)
            }

            //
            StockArticleCalendar();
              
    })

    /* modifier article  */
    AutoEcole.post('/voitures/modifier', (req, res) => {
          let PID = req.body.PID
          let VO_ID = req.body.VO_ID
          let voitureData = req.body.voitureData
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 02_autoecole_voitures
                     SET VO_Name = '${voitureData.VO_Name}', VO_Genre = '${voitureData.VO_Genre}', VO_Matricule = '${voitureData.VO_Matricule}', VO_Identifiant = '${voitureData.VO_Identifiant}',   VO_Pwd = '${voitureData.VO_Pwd}' 
                     WHERE VO_ID = '${VO_ID}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })          
    })

    /* modifier article  */
    AutoEcole.post('/voitures/modifier/ingredient', (req, res) => {
          let PID = req.body.PID
          let articleListe = JSON.stringify(req.body.articleListe)
          let Cout = req.body.Cout
          let CodePlat = req.body.CodePlat
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 02_autoecole_voitures
                     SET Cout = '${Cout}', Ingredient = '${articleListe}'
                     WHERE P_Code = '${CodePlat}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })    
           //res.json(fields)      
    })

    /* modifier article  */
    AutoEcole.post('/voitures/modifier/image', (req, res) => {
          let PID = req.body.PID
          let path = req.body.path
          let Code = req.body.code
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 02_autoecole_voitures
                     SET Photo_Path = '${path}'
                     WHERE P_Code = '${Code}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })        
    })

    /* supprimer article */
    AutoEcole.post('/voitures/supprimer', (req, res) => {
          let articleData = req.body.articleD
          // let sql = `INSERT INTO alimentaire_article
          //           (A_Code,Name, Prix_vente, Quantite, Prix_achat, Genre, Socite, Repture, TVA,Groupage,facturable) 
          //           VALUES ('${articleData.A_Code}','${articleData.Name}','${articleData.PrixV}','${articleData.Qte}','${articleData.PrixA}','${articleData.Genre}','${articleData.Socite}','${articleData.Repture}','${articleData.TVA}','${articleData.Groupage}','') `;
          //  connection.query(sql, (err, rows, fields) => {
          //   if (err){res.json(err)}
          //     res.json(rows);
          // })    
           res.json(articleData)      
    })

    /* fetch familles */
    AutoEcole.post('/voitures/niveaux', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 02_autoecole_voitures_niveaux WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /*ajouter famille */
    AutoEcole.post('/voitures/niveaux/ajouter', (req, res) => {
        let PID = req.body.PID
        let familleData = req.body.familleD
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `INSERT INTO 02_autoecole_voitures_niveaux (Genre,Description,PID) 
                   VALUES ('${familleData.Name}','${familleData.Description}','${PID}')`;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
            
    })

    /* modifier famille */
    AutoEcole.post('/voitures/niveaux/modifier', (req, res) => {
        let PID = req.body.PID
        let familleData = req.body.familleD
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `UPDATE 02_autoecole_voitures_niveaux 
                   SET Genre = '${familleData.Name}' , Description =  '${familleData.Description}'
                    WHERE PK = ${familleData.PK} AND PID = '${PID}' `;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
            
    })

/*####################################[TEAM]#######################################*/

      /* selectioner tous l'01_docteur_team */
      AutoEcole.post('/team', (req, res) => {
            let PID = req.body.PID;
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `SELECT *  FROM 01_docteur_team WHERE PID = ${PID} `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.send(rows);
            })         
      })

      /* Ajouter client */
      AutoEcole.post('/team/ajouter', (req, res) => {
        (async() => {
          let PID = req.body.PID;
          let teamD = req.body.teamD
          let CID = await GenerateID(1111111111,'01_docteur_team','T_ID');
          let Today = new Date().toISOString().split('T')[0]
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `INSERT INTO 01_docteur_team (PID, T_ID, T_Name, T_CIN, T_Phone, T_Adress, Poste,  Started_At, Finish_at)
                       VALUES (${PID} , ${CID},'${teamD.Name}','${teamD.T_CIN}','${teamD.Phone}','${teamD.Adress}','${teamD.Poste}','${Today}','');`;
              connection.query(sql, (err, rows, fields) => {
                if (err){ throw err}
               res.json(rows);
              })
          })()      
      })

      /* modifier un client */
      AutoEcole.post('/team/modifier', (req, res) => {
          let PID = req.body.PID;
          let teamData = req.body.teamData
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 01_docteur_team
                     SET T_Name = '${teamData.T_Name}',  T_Phone = '${teamData.T_Phone}' , T_Adress = '${teamData.T_Adress}' ,  T_Gouv = '${teamData.T_Gouv}' , T_Deleg = '${teamData.T_Deleg}' , T_CIN = '${teamData.T_CIN}'
                     WHERE T_ID = ${teamData.T_ID} AND PID = ${PID}`;
              connection.query(sql, (err, rows, fields) => {
                if (err){ throw err}
               res.json(rows);
              })     
      })
      
      /* modifier un client */
      AutoEcole.post('/team/pwd/modifier', (req, res) => {
          let PID = req.body.PID;
          let teamData = req.body.teamData
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 01_docteur_team
                     SET Identifiant = '${teamData.Identifiant}',  Password = '${teamData.Password}'  
                     WHERE T_ID = ${teamData.T_ID} AND PID = ${PID}`;
              connection.query(sql, (err, rows, fields) => {
                if (err){ throw err}
               res.json(rows);
              })     
      })

      /* selectioner un client */
      AutoEcole.post('/team/info', (req, res) => {
          let PID = req.body.PID;
          let TID = req.body.Team_ID
          function FetchTeamData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 01_docteur_team WHERE T_ID = ${TID} AND PID = ${PID} `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows[0]);
                })
              });
          }
          function SelectPresence(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 01_docteur_team_presence WHERE Team_ID = ${TID}  `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function SelectAvances(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 01_docteur_team_avance WHERE Team_ID = ${TID}  `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          // function SelectFactures(Name) {
           //    return new Promise((resolve, reject) => {
           //     connection.changeUser({database : 'dszrccqg_system'}, () => {});
           //     let sql = `SELECT * FROM ${TAG}_facture WHERE C_Name = '${TID}' `;
            //      connection.query(sql, (err, rows, fields) => {
            //         if (err) return reject(err);
            //         resolve(rows);
            //     })
           //    });
          // }


            // Call, Function
          async function query() {
              const teamData = {} 
              teamData.Data = await  FetchTeamData();
              teamData.Presence = await  SelectPresence(TID)
              teamData.Avances = await SelectAvances(TID)
              //teamData.Facture = await SelectFactures(teamData.Name)
            res.send(teamData)
          }
          query();               
      })


      /* selectioner tous les client */
      AutoEcole.post('/team/verification', (req, res) => {
            let PID = req.body.PID;
            let UID = req.body.UID;
            let T_ID = req.body.T_ID;
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `UPDATE 01_docteur_team
                       SET Releted_UID = ${UID}
                       WHERE T_ID = ${T_ID} AND PID = ${PID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* selectioner tous les client */
      AutoEcole.post('/team/anavce', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `SELECT * , 01_docteur_team_avance.PK AS TPK
                       FROM 01_docteur_team_avance 
                       LEFT JOIN 01_docteur_team ON 01_docteur_team.T_ID =  01_docteur_team_avance.Team_ID 
                       WHERE 01_docteur_team_avance.PID = ${PID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* selectioner tous les client */
      AutoEcole.post('/team/anavce/ajoute', (req, res) => {
          let PID = req.body.PID;
          let avanceD = req.body.avanceD;
          let Today = new Date().toISOString().split('T')[0]
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `INSERT INTO 01_docteur_team_avance (PID, Team_ID, AV_Date, Valeur)
                       VALUES (${PID}, '${avanceD.Team_ID}','${Today}','${avanceD.Valeur}');`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* modifier un facture */
      AutoEcole.post('/team/anavce/supprimer', (req, res) => {
             let PID = req.body.PID
             let PK = req.body.PK
             connection.changeUser({database : 'dszrccqg_system'}, () => {});
             let sql = `DELETE FROM 01_docteur_team_avance WHERE PK = ${PK}  AND PID = ${PID} `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })         
      })

      /* selectioner tous les client */
      AutoEcole.post('/team/presence', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `SELECT * 
                       FROM 01_docteur_team_presence 
                       LEFT JOIN 01_docteur_team ON 01_docteur_team.T_ID =  01_docteur_team_presence.Team_ID 
                       WHERE 01_docteur_team_presence.PID = ${PID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      AutoEcole.post('/team/presence/ajoute', (req, res) => {
          let PID = req.body.PID;
          let presenceD = req.body.presenceD;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `INSERT INTO 01_docteur_team_presence (PID, Team_ID, PR_Date, Genre)
                       VALUES (${PID}, '${presenceD.Team_ID}','${presenceD.PR_Date}','${presenceD.Genre}');`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* modifier un facture */
      AutoEcole.post('/team/presence/supprimer', (req, res) => {
             let PID = req.body.PID
             let PK = req.body.PK
             connection.changeUser({database : 'dszrccqg_system'}, () => {});
             let sql = `DELETE FROM 01_docteur_team_presence WHERE PK = ${PK}  AND PID = ${PID} `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })         
      })

      /* selectioner tous les client */
      AutoEcole.post('/team/poste', (req, res) => {
        let TAG = req.body.PID;
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 01_docteur_team_poste WHERE PID = '${TAG}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
      })

      /*ajouter famille */
      AutoEcole.post('/team/poste/ajouter', (req, res) => {
          let PID = req.body.PID
          let posteD = req.body.posteD
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `INSERT INTO 01_docteur_team_poste (PID, Poste ,Description,Salaire,Experience_Target) 
                     VALUES ('${PID}', '${posteD.Poste}','${posteD.Description}','${posteD.Salaire}','${posteD.Description}')`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
            res.json(rows);
          })
              
      })

      /* modifier famille */
      AutoEcole.post('/team/poste/modifier', (req, res) => {
        let PID = req.body.PID
        let posteD = req.body.posteD
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `UPDATE 01_docteur_team_poste 
                   SET Poste = '${posteD.Poste}' , Salaire = '${posteD.Salaire}' ,  Description =  '${posteD.Description}'
                   WHERE PK = ${posteD.PK} AND PID = '${PID}' `;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
            
      })

 
/*&&&&&&&&&&&&&&&&&[PROFILE]&&&&&&&&&&&&&&&&&*/

  /* Profile Data  */
  AutoEcole.post('/profile', (req, res) => {
          let PID = req.body.PID;
          let Today = new Date().toISOString().split('T')[0]
          function GetGeneralData() {
            return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                    let sql = `SELECT * FROM 02_autoecole WHERE PID = '${PID}'`;
                     connection.query(sql, (err, rows, fields) => {
                      if(err) return reject(err);
                      resolve(rows);
                    })
            });
          }
          function GetPasswordData() {
            return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_registration'}, () => {});
                    let sql = `SELECT * FROM system_login  WHERE PID  = '${PID}' ;`;
                     connection.query(sql, (err, rows, fields) => {
                      if(err) return reject(err);
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
                    connection.changeUser({database : 'dszrccqg_directory'}, () => {});
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

          // Call, Function
          async function query() {
                let main = {};
                main.general = await GetGeneralData(); 
                main.password = await GetPasswordData(); 
                main.review = await GetRating(); 
                main.images = await GetImages(); 
                main.likes = await GetLikes(); 
                main.horaire = await  GetHoraire(); 
            res.send(main)
          }
          query(); 
  })

  AutoEcole.post('/profile/print', (req, res) => {
        let PID = req.body.PID;
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `SELECT * FROM 02_autoecole WHERE PID = ${PID}`;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
  })

  /* modifier Images 
  AutoEcole.post('/profile/images/ajouter', upload.single("ProfileImage"), (req, res) => {
          let PID = req.body.PID;
          let ImgPID = req.body.PID
          let link = req.file.filename;
          let dest = JSON.stringify(req.file.destination);
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `UPDATE profile_photoes
                     SET ImageLink = '${link}'
                     WHERE PID = '${PID}' AND ImageTag = '${ImgTag}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(req.body);
          })        
  })*/

  /* Modifier Profle Data  */
  AutoEcole.post('/profile/update/general', (req, res) => {
        let PID = req.body.PID
        let profileD = req.body.profileDataSent
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `UPDATE 02_autoecole
                   SET Genre = '${profileD.Genre}', Gouv = '${profileD.Gouv}' ,  Deleg = '${profileD.Deleg}' ,  Phone = '${profileD.Phone}' , Matricule_F  = '${profileD.Matricule_F}', Name = '${profileD.Name}' , Localite = '${profileD.Adress}' ,  Adress = '${profileD.Adress}' 
                   WHERE  PID = '${PID}' `;
         connection.query(sql, (err, rows, fields) => {
          if (err){res.json(err)}
            res.json(rows);
          })         
  })

  /* Modifier Password   */
  AutoEcole.post('/profile/update/password', (req, res) => {
          let PID = req.body.PID
          let passwordD = req.body.passwordDataSent
          connection.changeUser({database : 'dszrccqg_registration'}, () => {});
          let sql = `UPDATE system_login
                     SET Identification = '${passwordD.Identification}', PasswordSalt = '${passwordD.PasswordSalt}'
                     WHERE PID = '${PID}' AND SystemKey = 'Restaurant' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* Modifier Horaire   */
  AutoEcole.post('/profile/update/position', (req, res) => {
          let PID = req.body.PID
          let positionD = req.body.positionDataSent
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `UPDATE 02_autoecole
                     SET Lat = '${positionD[0]}', Lng = '${positionD[1]}' 
                     WHERE  PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* modifier Images */
  AutoEcole.post('/profile/images/ajouter', upload.array("Images",5), (req, res) => {
          let PID = req.body.PID;
          let link = req.files;
          //let dest = JSON.stringify(req.file.destination);
          let sqlText = ''
          link.map( (data) => {
            sqlText = sqlText.concat(" ", `('${PID}', '${data.filename}'),`);
         })

          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `INSERT INTO 000_abyedh_profile_photoes (PID , ImageLink)
                     VALUES ${sqlText.slice(0, -1)} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
          })    

    })

  AutoEcole.post('/profile/images/deletefile', async function(req, res, next) {

          const fileName = req.body.fileName;
          //const filePath = `C:/Users/hp/Desktop/BackUp/NouvBCK/${fileName}`; 
          const filePath = `C:/Users/Administrator/Desktop/Abyedh/CDN/Images/Directory/${fileName}`;
          req.fileName = fileName
          
          fs.unlink(filePath, (err) => {
              if (err) {
                console.error(err);
                //res.status(500).send('Error deleting file');
                return;
              }

              //res.send('File deleted');
              
          }); 
          
          next();
  }, function(req, res) {
        let fileNameToDelete =  req.fileName
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `DELETE FROM 000_abyedh_profile_photoes WHERE ImageLink = '${fileNameToDelete}' ;`;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
            res.json(rows)
        }) 
  });


  /* Modifier Horaire   */
  AutoEcole.post('/profile/update/horaire', (req, res) => {
          let PID = req.body.PID
          let settingD = req.body.settingDataSent
          let genre = req.body.genre
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 02_autoecole_setting
                     SET ${genre} = '${settingD}' 
                     WHERE  PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* Modifier Images   */
  /* Repler Comment   */

/*&&&&&&&&&&&&&&&&&[SETTING]&&&&&&&&&&&&&&&&&*/

  AutoEcole.post('/parametre', (req, res) => {
          let PID = req.body.PID;
          let Today = new Date().toISOString().split('T')[0]
          function GetConfirmation() {
            return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                    let sql = `SELECT * FROM 02_autoecole WHERE PID = ${PID}`;
                     connection.query(sql, (err, rows, fields) => {
                      if(err) return reject(err);
                      resolve(rows[0]);
                    })
            });
          }
          function GetActivation() {
            return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_registration'}, () => {});
                    let sql = `SELECT * FROM system_activation  WHERE PID  = '${PID}' ;`;
                     connection.query(sql, (err, rows, fields) => {
                      if(err) return reject(err);
                      resolve(rows[0]);
                    })
            });
          }
          function GetSetting() {
            return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_system'}, () => {});
                    let sql = `SELECT * FROM  02_garderie_setting WHERE PID = '${PID}';`;
                     connection.query(sql, (err, rows, fields) => {
                      if(err) return reject(err);
                      resolve(rows[0]);
                    })
            });
          }

          // Call, Function
          async function query() {
                let main = {};
                main.confirmation = await  GetConfirmation(); 
                main.activation = await GetActivation(); 
                main.setting = await GetSetting(); 
            res.send(main)
          }
          query(); 
  })
  
  /* Update Setting   */
  AutoEcole.post('/parametre/update', (req, res) => {
          let PID = req.body.PID
          let settingD = req.body.settingDataSent
          let genre = req.body.genre
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 02_autoecole_setting
                     SET ${genre} = '${settingD}' 
                     WHERE  PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* Update Setting   */
  AutoEcole.post('/parametre/confirmer', (req, res) => {
          let PID = req.body.PID
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `UPDATE 02_autoecole
                     SET Activated = 'true' 
                     WHERE  PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* Update Setting   */
  AutoEcole.post('/parametre/paymment', (req, res) => {
           let PID = req.body.PID
           let Genre = req.body.Genre
           let Today = new Date().toISOString().split('T')[0]
           let paymmentD = req.body.paymmentD; 

           connection.changeUser({database : 'dszrccqg_registration'}, () => {});
           let sql = `INSERT INTO system_activation_paymment(PID, Genre, Name,  Location, CodeP, Montant, Secret_Code,  Phone,  P_Date, State)
                      VALUES(${PID},'${Genre}','${paymmentD.Name}','${paymmentD.Location}', '${paymmentD.CodeP}', '${paymmentD.Montant}', '${paymmentD.Secret_Code}', '${paymmentD.Phone}','${Today}','W')`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
            res.json(rows);
          })         
  })

/*&&&&&&&&&&&&&&&&&[DOCUMENTATION]&&&&&&&&&&&*/
    /* ajouter un messages */
    AutoEcole.post('/documentation/messages', (req, res) => {
           let PID = req.body.PID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `SELECT *  FROM 00_abyedh_messages_sav  WHERE PID = '${PID}' ORDER BY Sent_Date ASC, Sent_Time ASC`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /* ajouter un messages */
    AutoEcole.post('/documentation/ajouter', (req, res) => {
           let Today = new Date().toISOString().split('T')[0]
           let ToTime = new Date().toLocaleTimeString([],{ hourCycle: 'h23'})
           let PID = req.body.PID
           let MID  = Math.floor(Math.random() * 10000000000);
           let msgD = req.body.msgC; //JSON.stringify(req.body.msgC)
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `INSERT INTO 00_abyedh_messages_sav(M_ID,PID,Sender_Genre,Sender,SystemTag,Content,Sent_Date,Sent_Time)
                      VALUES(${MID},${PID},'SYSTEM','SYSTEM','ABYEDH', '${msgD}' ,'${Today}','${ToTime}')`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
            res.json(rows);
          })
              
    })

    /*
     AutoEcole.post('/verification', (req, res) => {
          client.verify.v2
          .services(verifySid)
          .verifications.create({ to: "+21696787676", channel: "sms" })
          .then((verification) => console.log(verification.status))
          .then(() => {
            const readline = require("readline").createInterface({
              input: process.stdin,
              output: process.stdout,
            });
            readline.question("Please enter the OTP:", (otpCode) => {
              client.verify.v2
                .services(verifySid)
                .verificationChecks.create({ to: "+21696787676", code: otpCode })
                .then((verification_check) => console.log(verification_check.status))
                .then(() => readline.close());
            });
          });             
      })
      */

/*&&&&&&&&&&&&&&&&&[MESSAGES]&&&&&&&&&&&&&&&&*/

    //*selectionner message */
    AutoEcole.post('/messages', (req, res) => {
           let PID = req.body.PID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `SELECT *  FROM 00_abyedh_messages_sav  WHERE PID = '${PID}' ORDER BY StartedAt ASC`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    //*selectionner message */
    AutoEcole.post('/message', (req, res) => {
           let PID = req.body.PID
           let MID = req.body.MID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `SELECT *  FROM 00_abyedh_messages_sav  WHERE PID = '${PID}' ORDER BY Sent_Date ASC, Sent_Time ASC`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /* ajouter un messages */
    AutoEcole.post('/message/ajouter', (req, res) => {
           let Today = new Date().toISOString().split('T')[0]
           let ToTime = new Date().toLocaleTimeString([],{ hourCycle: 'h23'})
           let PID = req.body.PID
           let MID  = Math.floor(Math.random() * 10000000000);
           let msgD = req.body.msgC; //JSON.stringify(req.body.msgC)
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `INSERT INTO system_messages(M_ID,PID,Sender_Genre,Sender,SystemTag,Content,Sent_Date,Sent_Time)
                      VALUES(${MID},${PID},'SYSTEM','SYSTEM','ABYEDH', '${msgD}' ,'${Today}','${ToTime}')`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
            res.json(rows);
          })
              
    })

/*&&&&&&&&&&&&&&&&&[SAUVGARDER ]&&&&&&&&&&&&&*/
    /*Sauvgarder les donneé desirable */
    AutoEcole.post('/tools/export/done', (req, res) => {
        let fileName =  req.body.fileName + '-' + new Date().toLocaleDateString('fr-FR').split( '/' ).join( '-' ) + '-' + Date.now()
        let exportedTable = req.body.exportedTable
        let PID =  req.body.PID
        const converted = exportedTable.flatMap(({ name, where }) => [name, '--where', where]);
        const exportProcess = spawn("C:/xampp/mysql/bin/mysqldump.exe", [
          '-u',
          'root',
          'dszrccqg_system', 
          ...converted,
          '--no-create-info', 
          '-r',
          `C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp/${fileName}.sql` //C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp/
        ]);
         exportProcess.stdout.on('data', (data) => {
          console.log(`stdout: ${data}`);
        });

        exportProcess.stderr.on('data', (data) => {
          console.log(`stderr: ${data}`);
        });

        exportProcess.on('close', (code) => {
          res.send({file:fileName});
        });
    })

    AutoEcole.get('/tools/export/download/:file', (req, res) => {
      res.download(`C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp/${req.params.file}.sql`);
    })

    AutoEcole.post('/tools/export/calclength', (req, res) => {
      fs.readdir('C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp', (err, files) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error reading directory');
          return;
        }

        res.send(`Number of files: ${files.size}`);
      });
    })

    AutoEcole.post('/tools/export/calcsize', (req, res) => {
        let totalSize = 0;
        fs.readdir('C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp', (err, files) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error reading directory');
            return;
          }
          for (const file of files) {
            if (!file.startsWith('garderie_1567154730')) continue;
            const filePath = path.join('C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp', file);
            fs.stat(filePath, (err, stat) => {
              if (err) {
                console.error(err);
                res.status(500).send('Error getting file size');
                return;
              }

              totalSize += stat.size;

              if (files.indexOf(file) === files.length - 1) {
                res.send({totSize: totalSize});
              }
            });
          }
        });
    })

    AutoEcole.post('/tools/export/clear', (req, res) => {
        fs.readdir('C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp', (err, files) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error reading directory');
            return;
          }

          for (const file of files) {
            if (!file.startsWith('garderie_1567154730')) continue;
            const filePath = path.join('C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp', file);
            fs.unlink(filePath, (err) => {
              if (err) {
                console.error(err);
                res.status(500).send('Error deleting file');
                return;
              }

              if (files.indexOf(file) === files.length - 1) {
                res.send('All files deleted');
              }
            });
          }
        });
    })
    
/*&&&&&&&&&&&&&&&&&[Mettre A Jour]&&&&&&&&&&&*/
    /* fetch main Tools */
    AutoEcole.post('/update', (req, res) => {
         let PID = req.body.PID
         let Today = new Date().toISOString().split('T')[0]

          function FetchStock() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `SELECT * FROM 02_autoecole_forfait WHERE PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchStockFamille() {
            return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 02_autoecole_forfait_genre WHERE PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchFacture() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * , COALESCE(02_autoecole_condidat.CD_Name, 'PASSAGER') AS CD_Name ,02_autoecole_abonnement.State AS Pay_State FROM 02_autoecole_abonnement 
                           LEFT JOIN 02_autoecole_condidat ON 02_autoecole_abonnement.Membre_ID = 02_autoecole_condidat.CD_ID 
                           LEFT JOIN 02_autoecole_seances ON 02_autoecole_abonnement.Caisse_ID = 02_autoecole_seances.C_ID 
                           WHERE 02_autoecole_abonnement.PID = ${PID}`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchCommandes() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `SELECT * FROM dszrccqg_communications.03_autoecole_commande 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.03_autoecole_commande.UID = dszrccqg_profile.user_general_data.UID 
                       WHERE  dszrccqg_communications.03_autoecole_commande.PID = '${PID}'`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function FetchReservation(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `SELECT * FROM dszrccqg_communications.03_autoecole_souscription 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.03_autoecole_souscription.UID = dszrccqg_profile.user_general_data.UID 
                       WHERE  dszrccqg_communications.03_autoecole_souscription.PID = '${PID}'`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function FetchCamion() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 02_autoecole_seances WHERE  PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchClient() {
            return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT *  FROM 02_autoecole_condidat  WHERE PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }

          // Call, Function
          async function query() {
                  const updateData = [{}]; 
                updateData[0].commande = [] //await FetchCommandes()
                updateData[0].reservation = [] //await FetchReservation()
                updateData[0].stock = [] //await FetchStock()
                updateData[0].stockFamille = [] //await FetchStockFamille()
                updateData[0].facture = [] //await FetchFacture()
                updateData[0].camion = [] //await FetchCamion()
                updateData[0].client = [] //await FetchClient()
              res.send(updateData)
         }
          query();
    })


module.exports = AutoEcole