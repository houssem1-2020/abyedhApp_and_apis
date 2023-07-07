const express = require('express')
const multer = require('multer')
const GymRouter = express.Router()
const connection = require('../../connection.js')
const { spawn } = require('child_process');
const path = require("path");
const fs = require('fs');

//Multer.js
//const DIR = 'C:/Users/kheli/Desktop/PROJECTS/abyedh/abyedh.system/GymRouter/public/houssem';
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
        const DIR = 'C:/Users/kheli/Desktop/PROJECTS/abyedh/abyedh.system/GymRouter/public/houssem';
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
  GymRouter.post('/LogIn', (req, res) => {
      const logInD = req.body.LoginData;
      function Connect(){
          connection.changeUser({database : 'dszrccqg_registration'}, () => {});
          let sql = `SELECT * FROM system_login WHERE Identification = '${logInD.Log}' AND PasswordSalt   = '${logInD.Pwd}' AND SystemKey ='Gym'` ;
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
  GymRouter.get('/Permission', (req, res) => {
      const PID = req.body.pid;
      let sql = `SELECT * FROM admin_setting WHERE SystemTag  = '${PID}'` ;
      connection.query(sql, (err, rows, fields) => {
        if (err) throw err
        res.send(rows);
      }); 
  })

/*####################################[MAIN]#######################################*/
      /* statistics */
      GymRouter.post('/ma/stat', (req, res) => {
              let PID =  req.body.PID;
              let Today = new Date().toISOString().split('T')[0]

              function NumRowsTable(table,db) {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT PK FROM 06_gym_${table} WHERE PID = ${PID}`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows.length);
                        })
                });
              }

              function ClientDistrubition() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT Gouv,COUNT(1) as Totale FROM 06_gym_membres  WHERE PID  = '${PID}' GROUP BY Gouv ORDER BY Gouv;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
              }
              function ForfaitGenreDistrubition() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT 06_gym_abonnement.Forfait_ID, COUNT(1) as Totale , 06_gym_forfait.F_Name
                                   FROM 06_gym_abonnement  
                                   LEFT JOIN 06_gym_forfait ON 06_gym_abonnement.Forfait_ID = 06_gym_forfait.F_ID
                                   WHERE 06_gym_abonnement.PID  = '${PID}' GROUP BY 06_gym_abonnement.Forfait_ID ORDER BY 06_gym_abonnement.Forfait_ID;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
              }
              function SouscriptionDistrubition() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                        let sql = `SELECT State,COUNT(1) as Totale FROM 06_gym_souscription  WHERE PID  = '${PID}' GROUP BY State ORDER BY State;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
              }
              function SeanceEvolution() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT SE_Date, COUNT(PK) as Totale FROM 06_gym_abonnement_seances WHERE PID  = '${PID}'  GROUP BY SE_Date ORDER BY SE_Date LIMIT 10;`;
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
                    main.membreNum = await NumRowsTable('membres'); 
                    main.forfaitNum = await NumRowsTable('forfait'); 
                    main.abonnementNum = await NumRowsTable('abonnement'); 
                    main.equipemmentNum = await NumRowsTable('equipement'); 
                    main.equipeNum = await NumRowsTable('team'); 

                    main.evolutionSeance = await SeanceEvolution(); 
                    
                    main.clientDistro = await ClientDistrubition(); 
                    main.forfaitDistro = await  ForfaitGenreDistrubition(); 
                    main.commandeDistro = await  SouscriptionDistrubition(); 
     
                    main.activationState = await CheckActivationState();

                    res.send(main)
              }

              //render
              StatForMainPage(); 

      })

/*####################################[REQUEST]####################################*/
      
      /* selectioner un client */
      GymRouter.post('/request', (req, res) => {
          let PID = req.body.PID;   
          function FetchReservation(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `SELECT * FROM dszrccqg_communications.06_gym_souscription 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.06_gym_souscription.UID = dszrccqg_profile.user_general_data.UID 
                       WHERE  dszrccqg_communications.06_gym_souscription.PID = '${PID}'`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

            // Call, Function
          async function query() {
              const requestData = {} 
              requestData.Reservation = await FetchReservation()
            res.send(requestData)
          }
          query();               
      })


      /* request data 
      GymRouter.post('/commande/info', (req, res) => {
            let PID = req.body.PID;
            let RID = req.body.CID;
            connection.changeUser({database : 'dszrccqg_communications'}, () => {});
            let sql = `SELECT * FROM dszrccqg_communications.06_gym_commande 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.06_gym_commande.UID = dszrccqg_profile.user_general_data.UID 
                       LEFT JOIN dszrccqg_system.06_gym_membres ON dszrccqg_communications.06_gym_commande.UID = dszrccqg_system.06_gym_membres.Releted_UID 
                       WHERE  dszrccqg_communications.06_gym_commande.PID = '${PID}' AND dszrccqg_communications.06_gym_commande.R_ID = '${RID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })*/
       /* request data */
      GymRouter.post('/reservation/info', (req, res) => {
            let PID = req.body.PID;
            let RID = req.body.CID;
            connection.changeUser({database : 'dszrccqg_communications'}, () => {});
            let sql = `SELECT * FROM dszrccqg_communications.06_gym_souscription 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.06_gym_souscription.UID = dszrccqg_profile.user_general_data.UID 
                       LEFT JOIN dszrccqg_system.06_gym_membres ON dszrccqg_communications.06_gym_souscription.UID = dszrccqg_system.06_gym_membres.Releted_UID
                       WHERE  dszrccqg_communications.06_gym_souscription.PID = '${PID}' AND dszrccqg_communications.06_gym_souscription.R_ID = '${RID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* request control : Update commande state  
      GymRouter.post('/commande/controle', (req, res) => {
            let PID = req.body.PID;
            let R_ID = req.body.RID;
            let State = req.body.state;
            connection.changeUser({database : 'dszrccqg_communications'}, () => {});
            let sql = `UPDATE 06_gym_commande
                       SET State = '${State}'
                       WHERE R_ID = '${R_ID}' AND PID = ${PID} `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })*/
      /* request control : Update commande state  */
      GymRouter.post('/reservation/controle', (req, res) => {
            let PID = req.body.PID;
            let R_ID = req.body.RID;
            let State = req.body.state;
            connection.changeUser({database : 'dszrccqg_communications'}, () => {});
            let sql = `UPDATE 06_gym_souscription
                       SET State = '${State}'
                       WHERE R_ID = '${R_ID}' AND PID = ${PID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* comptes */
      GymRouter.post('/commande/facturer', (req, res) => {
          (async() => {
              let PID = req.body.PID;
              let factureD = req.body.factureD;
              let FID = await GenerateID(1111111111,`06_gym_abonnement`,'T_ID');
              let articleL = JSON.stringify(factureD.articles)
              let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
              let ToTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `INSERT INTO 06_gym_abonnement (PID, T_ID,Caisse_ID,Final_Value,Espece, T_Date, T_Time,Client,State, Paye_Bons, Is_Commande ,Articles) 
                       VALUES (${PID},'${FID}','INDCMD','${factureD.totale}','0','${Today}','${ToTime}', 'PASSAGER' ,'Waitting','','${factureD.CommandeID}','${articleL}')`;
              connection.query(sql, (err, rows, fields) => {
                if (err) throw err
                res.json({FID:FID});
                
              }); 
        })() 
                
      })

/*####################################[EQUIPEMMENT]################################*/

    //fetch all article */
    GymRouter.post('/equipemment', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 06_gym_equipement WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    //fetch all article */
    GymRouter.post('/equipemment/info', (req, res) => {
          let PID = req.body.PID;
          let Code = req.body.Code;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 06_gym_equipement WHERE PID = '${PID}' AND INS_Code = ${Code}`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    //check article in abyedhDB */
    GymRouter.post('/equipemment/checkAbyedhDb', (req, res) => {
          let Code = req.body.Code;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 000_abyedh_articles WHERE A_Code = '${Code}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows[0]);
          })
              
    })


    /* ajouter article */
    GymRouter.post('/equipemment/ajouter', (req, res) => {
          let PID = req.body.PID;
          let equipemmentD = req.body.equipemmentD;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `INSERT INTO 06_gym_equipement (PID ,INS_Code, INS_Name, INS_Genre,INS_Qte, Description, Photo_Path) 
                     VALUES ('${PID}','${equipemmentD.INS_Code}','${equipemmentD.INS_Name}','${equipemmentD.INS_Genre}','${equipemmentD.INS_Qte}','${equipemmentD.Description}', 'tools.jpg' ) `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
          })          
    })


    /* modifier article  */
    GymRouter.post('/equipemment/modifier', (req, res) => {
          let PID = req.body.PID
          let equipemmentD = req.body.equipemmentD
          let INS_Code = req.body.INS_Code
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 06_gym_equipement
                     SET INS_Name = '${equipemmentD.INS_Name}', INS_Genre = '${equipemmentD.INS_Genre}',   INS_Qte = '${equipemmentD.INS_Qte}',  Description = '${equipemmentD.Description}'
                     WHERE INS_Code = '${INS_Code}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
    })

    /* modifier article  */
    GymRouter.post('/equipemment/modifier/image', (req, res) => {
          let PID = req.body.PID
          let path = req.body.path
          let Code = req.body.code
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 06_gym_equipement
                     SET Photo_Path = '${path}'
                     WHERE INS_Code = '${Code}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })        
    })
 

    /* fetch familles */
    GymRouter.post('/equipemment/famille', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 06_gym_equipement_genre WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /*ajouter famille */
    GymRouter.post('/equipemment/familles/ajouter', (req, res) => {
        let PID = req.body.PID
        let familleData = req.body.familleD
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `INSERT INTO 06_gym_equipement_genre (Genre,Description,PID) 
                   VALUES ('${familleData.Name}','${familleData.Description}','${PID}')`;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
            
    })

    /* modifier famille */
    GymRouter.post('/equipemment/familles/modifier', (req, res) => {
        let PID = req.body.PID
        let familleData = req.body.familleD
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `UPDATE 06_gym_equipement_genre 
                   SET Genre = '${familleData.Name}' , Description =  '${familleData.Description}'
                   WHERE PK = ${familleData.PK} AND PID = '${PID}' `;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
            
    })

/*####################################[OFFRES]#####################################*/

    //fetch all article */
    GymRouter.post('/forfait', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 06_gym_forfait WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })


    /* selectioner un client */
    GymRouter.post('/forfait/select', (req, res) => {
          let PID = req.body.PID
          let Code = req.body.code
          function FetchMembreData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 06_gym_forfait WHERE F_ID = '${Code}' AND PID = ${PID}`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    if (!rows[0]) {resolve([{ Name:null , }]);} else {resolve(rows[0]);}
                })
              });
          }

 

          function SelectAbonnement() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * , COALESCE(06_gym_membres.ME_Name, 'PASSAGER') AS ME_Name ,  06_gym_abonnement.State AS Pay_State FROM 06_gym_abonnement 
                           LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID
                           LEFT JOIN 06_gym_forfait ON 06_gym_abonnement.Forfait_ID = 06_gym_forfait.F_ID  
                           WHERE 06_gym_abonnement.PID = ${PID} AND 06_gym_abonnement.Forfait_ID = '${Code}'  `;
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
    GymRouter.post('/forfait/ajouter', (req, res) => {
        (async() => {
            let PID = req.body.PID;
            let forfaitD = req.body.forfaitD;
            let F_ID =   await GenerateID(1111111111,`06_gym_forfait`,'F_ID');
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `INSERT INTO 06_gym_forfait (PID  ,F_ID, F_Name, Tarif, NB_Seance) 
                       VALUES ('${PID}','${F_ID}','${forfaitD.F_Name}', '${forfaitD.Tarif}','${forfaitD.NB_Seance}') `;
             connection.query(sql, (err, rows, fields) => {
              if (err){res.json(err)}
                res.json(rows);
            }) 
        })()          
    })


    /* modifier article  */
    GymRouter.post('/forfait/modifier', (req, res) => {
          let PID = req.body.PID
          let F_ID = req.body.F_ID
          let forfaitData = req.body.forfaitData
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 06_gym_forfait
                     SET F_Name = '${forfaitData.F_Name}',  Tarif = '${forfaitData.Tarif}', NB_Seance = '${forfaitData.NB_Seance}'
                     WHERE F_ID = '${F_ID}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })    
           //res.json(fields)      
    })


    /* supprimer article */
    GymRouter.post('/forfait/supprimer', (req, res) => {
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

/*####################################[SEANCES]####################################*/

      /* featch tou les camion*/
      GymRouter.post('/seances', (req, res) => {
              let PID = req.body.PID
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `SELECT * 
                        FROM 06_gym_abonnement_seances
                        LEFT JOIN 06_gym_abonnement ON 06_gym_abonnement_seances.Abonnement_ID = 06_gym_abonnement.AB_ID
                        LEFT JOIN 06_gym_forfait ON 06_gym_abonnement.Forfait_ID = 06_gym_forfait.F_ID
                        LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID
                        WHERE 06_gym_abonnement_seances.PID = ${PID} LIMIT 200`;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })             
      })

      /* featch tou les camion*/
      GymRouter.post('/seances/info', (req, res) => {
              let PID = req.body.PID
              let SID = req.body.SID
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `SELECT * 
                        FROM 06_gym_abonnement_seances
                        LEFT JOIN 06_gym_abonnement ON 06_gym_abonnement_seances.Abonnement_ID = 06_gym_abonnement.AB_ID
                        LEFT JOIN 06_gym_forfait ON 06_gym_abonnement.Forfait_ID = 06_gym_forfait.F_ID
                        LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID
                        WHERE 06_gym_abonnement_seances.PID = ${PID} AND 06_gym_abonnement_seances.SE_ID = ${SID}`;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })             
      })

      
      /*Ajouter Camion*/
      GymRouter.post('/seances/ajouter', (req, res) => {
          (async() => {
              let PID = req.body.PID
              let seanceD = req.body.seanceD
              let SE_ID =   await GenerateID(1111111111,`06_gym_abonnement_seances`,'SE_ID');
              let sql = `INSERT INTO 06_gym_abonnement_seances (PID,SE_ID, Abonnement_ID, Membre_ID, SE_Date, SE_Time,  SE_State) 
                        VALUES (${PID} , ${SE_ID},'${seanceD.Abonnement_ID}', '${seanceD.Membre_ID}','${seanceD.SE_Date}','${seanceD.SE_Time}','C') `;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })  
        })()             
      })

      /* modifier un camion */
      GymRouter.post('/seances/modifier', (req, res) => {
            let PID = req.body.PID
            let SE_ID = req.body.SE_ID
            let seanceData = req.body.seanceData
            let sql = `UPDATE 06_gym_abonnement_seances
                      SET Abonnement_ID = '${seanceData.Abonnement_ID}' , Membre_ID = '${seanceData.Membre_ID}' , SE_Date = '${seanceData.SE_Date}' , SE_Time = '${seanceData.SE_Time}'  
                      WHERE PID = ${PID} AND SE_ID = '${SE_ID}' `;
             connection.query(sql, (err, rows, fields) => {
              if (err){res.json(err)}
                res.json(rows);
            })          
      })

      /* modifier un facture */
      GymRouter.post('/seances/supprimer', (req, res) => {
             let PID = req.body.PID
             let SE_ID = req.body.SE_ID
             connection.changeUser({database : 'dszrccqg_system'}, () => {});
             let sql = `DELETE FROM 06_gym_abonnement_seances WHERE SE_ID = '${SE_ID}' AND PID = ${PID} `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })         
      })
 
/*####################################[ABONNEMENT]#################################*/
    
    /* selectionner tous les factures */
    GymRouter.post('/abonnement', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * , COALESCE(06_gym_membres.ME_Name, 'PASSAGER') AS ME_Name ,  06_gym_abonnement.State AS Pay_State FROM 06_gym_abonnement 
                     LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID
                     LEFT JOIN 06_gym_forfait ON 06_gym_abonnement.Forfait_ID = 06_gym_forfait.F_ID  
                     WHERE 06_gym_abonnement.PID = ${PID} LIMIT 200`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}

            res.json(rows);
          })
              
    })

    /*Ajouter Camion*/
    GymRouter.post('/abonnement/ajouter', (req, res) => {
          (async() => {
              let PID = req.body.PID
              let abonnemmentData = req.body.abonnemmentData
              let AB_ID =   await GenerateID(1111111111,`06_gym_abonnement`,'AB_ID');
              let sql = `INSERT INTO 06_gym_abonnement (PID, AB_ID , Forfait_ID, Membre_ID ,AB_Depart_Date, AB_Saisson, AB_Depart_Time, AB_Termine_Time,State, AB_Paymment) 
                         VALUES (${PID} ,${AB_ID},'${abonnemmentData.Forfait_ID}', '${abonnemmentData.Membre_ID}','${abonnemmentData.AB_Depart_Date}','${abonnemmentData.AB_Saisson}','${abonnemmentData.AB_Depart_Time}','${abonnemmentData.AB_Termine_Time}','NonPayee','[]') `;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })  
          })()             
    })

    /*Ajouter Camion*/
    GymRouter.post('/abonnement/renouveller', (req, res) => {
          (async() => {
              let PID = req.body.PID
              let abonnemmentData = req.body.abonnemmentData
              let renouvellmmentData = req.body.renouvellmmentData
              let AB_ID =   await GenerateID(1111111111,`06_gym_abonnement`,'AB_ID');
              let sql = `INSERT INTO 06_gym_abonnement (PID, AB_ID , Forfait_ID, Membre_ID ,AB_Depart_Date, AB_Saisson, AB_Depart_Time, AB_Termine_Time,State, AB_Paymment) 
                         VALUES (${PID} ,${AB_ID},'${abonnemmentData.Forfait_ID}', '${abonnemmentData.Membre_ID}','${renouvellmmentData.AB_Depart_Date}','${renouvellmmentData.AB_Saisson}','${abonnemmentData.AB_Depart_Time}','${abonnemmentData.AB_Termine_Time}','NonPayee','[]') `;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })  
          })()             
    })

    /* selectioner un client */
    GymRouter.post('/abonnement/select', (req, res) => {
          let PID = req.body.PID
           let FID = req.body.fid
          function FetchAbonnementData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * , COALESCE(06_gym_membres.ME_Name, 'PASSAGER') AS ME_Name ,  06_gym_abonnement.State AS Pay_State FROM 06_gym_abonnement 
                         LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID
                         LEFT JOIN 06_gym_forfait ON 06_gym_abonnement.Forfait_ID = 06_gym_forfait.F_ID
                         WHERE 06_gym_abonnement.PID = '${PID}' AND 06_gym_abonnement.AB_ID = ${FID} `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows[0]);
                })
              });
          }

          function SelectSeances() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 06_gym_abonnement_seances  WHERE PID = ${PID} AND Abonnement_ID = ${FID}`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          function SelectPaymment() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 06_gym_abonnement_seances  WHERE PID = ${PID} AND Abonnement_ID = ${FID}`;
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
              clientListe.Paymment = await SelectPaymment()
            res.send(clientListe)
          }
          query();               
    })

    /* selectionner tous les factures */
    GymRouter.post('/abonnement/resumer', (req, res) => {
           let PID = req.body.PID
           let date = req.body.targetDate
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `SELECT * , COALESCE(06_gym_membres.ME_Name, 'PASSAGER') AS ME_Name , COALESCE(06_gym_forfait.F_Name, 'COMMANDE') AS CA_Name ,06_gym_abonnement.State AS Pay_State FROM 06_gym_abonnement 
                     LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID 
                     LEFT JOIN 06_gym_forfait ON 06_gym_abonnement.Forfait_ID = 06_gym_forfait.F_ID 
                     WHERE 06_gym_abonnement.AB_Depart_Date >= '${date.start}' AND 06_gym_abonnement.AB_Termine_Date <= '${date.end}' `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })        
    })

    /* modifier un facture */
    GymRouter.post('/abonnement/modifier', (req, res) => {
           let PID = req.body.PID
           let abonnemmentData = req.body.abonnemmentData
           let AB_ID = req.body.AB_ID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `UPDATE 06_gym_abonnement
                      SET Forfait_ID = '${abonnemmentData.Forfait_ID}', Membre_ID = '${abonnemmentData.Membre_ID}', AB_Depart_Date = '${abonnemmentData.AB_Depart_Date}', AB_Saisson = '${abonnemmentData.AB_Saisson}', AB_Depart_Time ='${abonnemmentData.AB_Depart_Time}' , AB_Termine_Time ='${abonnemmentData.AB_Termine_Time}' 
                      WHERE AB_ID = '${AB_ID}' AND PID =  ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })         
    })
    GymRouter.post('/abonnement/payee', (req, res) => {
           let PID = req.body.PID
           let editPaymment = req.body.editPaymment 
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `UPDATE 06_gym_abonnement
                      SET AB_Paymment = '${JSON.stringify(editPaymment.toEdit)}'
                      WHERE AB_ID = '${editPaymment.FID}' AND PID =  ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })         
    })
    /* modifier un facture */
    GymRouter.post('/abonnement/supprimer', (req, res) => {
           let PID = req.body.PID
           let FID = req.body.FID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `DELETE FROM 06_gym_abonnement WHERE  T_ID = '${FID}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })         
    })

/*####################################[GROUPES]####################################*/

      //fetch all article */
      GymRouter.post('/groupe', (req, res) => {
            let PID = req.body.PID;
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `SELECT * FROM 06_gym_membres_group WHERE PID = '${PID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* ajouter article */
      GymRouter.post('/groupe/ajouter', (req, res) => {
      	 (async() => {
            let PID = req.body.PID;
            let groupData = req.body.groupData;
             let GP_ID =   await GenerateID(1111111111,`06_gym_membres_group`,'GP_ID');
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `INSERT INTO 06_gym_membres_group (GP_ID, PID,  GP_Name,  GP_Genre,  GP_Activite, GP_Temps, GP_Cotch ) 
                       VALUES ('${GP_ID}','${PID}','${groupData.GP_Name}','${groupData.GP_Genre}', '${groupData.GP_Activite}','${groupData.GP_Temps}','${groupData.GP_Cotch}' ) `;
             connection.query(sql, (err, rows, fields) => {
              if (err){res.json(err)}
                res.json(rows);
            }) 
         })()            
      })


        /* modifier famille */
      GymRouter.post('/groupe/modifier', (req, res) => {
          let PID = req.body.PID
          let editGroupD = req.body.editGroupD
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 06_gym_membres_group 
                     SET GP_Name = '${editGroupD.GP_Name}' , GP_Genre =  '${editGroupD.GP_Genre}', GP_Activite =  '${editGroupD.GP_Activite}', GP_Temps =  '${editGroupD.GP_Temps}', GP_Cotch =  '${editGroupD.GP_Cotch}'
                     WHERE GP_ID = ${editGroupD.GP_ID} AND PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
            res.json(rows);
          })
              
      })

/*####################################[MEMBRES]####################################*/

    /* selectioner tous les client */
    GymRouter.post('/membres', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT *  FROM 06_gym_membres  WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })


    /* selectioner un client */
    GymRouter.post('/membres/info', (req, res) => {
          let PID = req.body.PID;
          let membreId = req.body.membreId
          function FetchMembreData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 06_gym_membres WHERE PID = ${PID} AND ME_ID = ${membreId}`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    if (!rows[0]) {resolve([{ Name:null , }]);} else {resolve(rows[0]);}
                })
              });
          }

          function SelectSouscription(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `SELECT * FROM 06_gym_souscription WHERE UID = '${Name}' AND PID = ${PID} `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          function SelectAbonnement(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * , COALESCE(06_gym_membres.ME_Name, 'PASSAGER') AS ME_Name ,  06_gym_abonnement.State AS Pay_State FROM 06_gym_abonnement 
                           LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID
                           LEFT JOIN 06_gym_forfait ON 06_gym_abonnement.Forfait_ID = 06_gym_forfait.F_ID  
                           WHERE 06_gym_abonnement.PID = ${PID} AND 06_gym_abonnement.Membre_ID = '${Name}'  `;
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
                          FROM 06_gym_abonnement_seances
                          LEFT JOIN 06_gym_abonnement ON 06_gym_abonnement_seances.Abonnement_ID = 06_gym_abonnement.AB_ID
                          LEFT JOIN 06_gym_forfait ON 06_gym_abonnement.Forfait_ID = 06_gym_forfait.F_ID
                          LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID
                          WHERE 06_gym_abonnement_seances.PID = ${PID} AND 06_gym_abonnement_seances.Membre_ID = '${Name}'  `;
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
              clientListe.Souscription = await  SelectSouscription(membreId)
              clientListe.Abonnement = await SelectAbonnement(membreId)
              clientListe.Seances = await SelectSeances(membreId)
            res.send(clientListe)
          }
          query();               
    })

    /* selectioner tous les client 
    GymRouter.post('/membres/verification/recherche', (req, res) => {
          let UID = req.body.UID;
          connection.changeUser({database : 'dszrccqg_profile'}, () => {});
          let sql = `SELECT *  FROM user_general_data  WHERE UID = '${UID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })*/

    //check article in abyedhDB */
    GymRouter.post('/membres/checkAbyedhDb', (req, res) => {
          let UID = req.body.UID;
          connection.changeUser({database : 'dszrccqg_profile'}, () => {});
          let sql = `SELECT * FROM user_general_data WHERE UID = '${UID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows[0]);
          })
              
    })

    /* selectioner tous les client */
    GymRouter.post('/membres/verification', (req, res) => {
          let PID = req.body.PID;
          let UID = req.body.UID;
          let ME_ID = req.body.ME_ID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 06_gym_membres
                     SET Releted_UID = ${UID}
                     WHERE ME_ID = ${ME_ID} AND PID = ${PID}`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /* Ajouter client */
    GymRouter.post('/membres/ajouter', (req, res) => {
      (async() => {
        let PID = req.body.PID;
        let clientD = req.body.clientD
        let CID = await GenerateID(1111111111,'06_gym_membres','ME_ID');
        let Today = new Date().toISOString().split('T')[0]
          let sql = `INSERT INTO 06_gym_membres (ME_ID, PID,  Releted_UID,  ME_Name, Creation_Date, Phone, Adress, CIN, ME_State, Gouv, Deleg) 
                     VALUES (${CID}, ${PID},'${clientD.Releted_UID}','${clientD.Name}','${Today}','${clientD.Phone}','${clientD.Adress}','${clientD.CIN}','null','${clientD.Gouv}', '${clientD.Deleg}' );`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })
        })()      
    })


    /* modifier un client */
    GymRouter.post('/membres/modifier', (req, res) => {
        let PID = req.body.PID;
        let clientD = req.body.clientD
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `UPDATE 06_gym_membres
                   SET ME_Name = '${clientD.ME_Name}',  Phone = '${clientD.Phone}' , Adress = '${clientD.Adress}' ,  Gouv = '${clientD.Gouv}' , Deleg = '${clientD.Deleg}' , CIN = '${clientD.CIN}'
                   WHERE ME_ID = ${clientD.ME_ID} AND PID = ${PID}`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })     
    })

    /* map : liste des location */
    GymRouter.post('/membres/fidelite', (req, res) => {
           let PID = req.body.PID;
           let genre = req.body.genre
           let start = req.body.start
           let finish = req.body.finish
           let top = req.body.Top
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql10 = `SELECT  06_gym_abonnement.Membre_ID, SUM(Final_Value) as Totale, 06_gym_abonnement.T_Date , 06_gym_membres.ME_Name, 06_gym_membres.ME_ID, COALESCE(06_gym_membres.ME_Name, 'PASSAGER') AS ME_Name
                      FROM 06_gym_abonnement 
                      LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID
                      WHERE 06_gym_abonnement.T_Date > '${start}' AND 06_gym_abonnement.T_Date < '${finish}' 
                      GROUP BY 06_gym_abonnement.Membre_ID ORDER BY SUM(Final_Value) DESC LIMIT ${top};`

           let sql1 = `SELECT COUNT(1) as Totale , 06_gym_abonnement_seances.Membre_ID , 06_gym_membres.ME_Name , 06_gym_membres.ME_ID, COALESCE(06_gym_membres.ME_Name, 'PASSAGER') AS ME_Name
                      FROM 06_gym_abonnement_seances  
                      LEFT JOIN 06_gym_membres ON 06_gym_abonnement_seances.Membre_ID = 06_gym_membres.ME_ID
                      WHERE 06_gym_abonnement_seances.SE_Date > '${start}' AND 06_gym_abonnement_seances.SE_Date < '${finish}'  
                      GROUP BY 06_gym_abonnement_seances.Membre_ID ORDER BY COUNT(1) DESC LIMIT ${top};`

            let sql2 = `SELECT COUNT(1) as Totale , 06_gym_abonnement.Membre_ID , 06_gym_membres.ME_Name , 06_gym_membres.ME_ID, COALESCE(06_gym_membres.ME_Name, 'PASSAGER') AS ME_Name
                      FROM 06_gym_abonnement  
                      LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID
                      WHERE 06_gym_abonnement.AB_Depart_Date > '${start}' AND 06_gym_abonnement.AB_Depart_Date < '${finish}'  
                      GROUP BY 06_gym_abonnement.Membre_ID ORDER BY COUNT(1) DESC LIMIT ${top};`

           connection.query(genre == 'Seance' ? sql1 : sql2 , (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

/*####################################[TEAM]#######################################*/

      /* selectioner tous l'06_gym_team */
      GymRouter.post('/team', (req, res) => {
            let PID = req.body.PID;
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `SELECT *  FROM 06_gym_team WHERE PID = ${PID} `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.send(rows);
            })         
      })

      /* Ajouter client */
      GymRouter.post('/team/ajouter', (req, res) => {
        (async() => {
          let PID = req.body.PID;
          let teamD = req.body.teamD
          let CID = await GenerateID(1111111111,'06_gym_team','T_ID');
          let Today = new Date().toISOString().split('T')[0]
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `INSERT INTO 06_gym_team (PID, T_ID, T_Name, T_CIN, T_Phone, T_Adress, Poste,  Started_At, Finish_at)
                       VALUES (${PID} , ${CID},'${teamD.Name}','${teamD.T_CIN}','${teamD.Phone}','${teamD.Adress}','${teamD.Poste}','${Today}','');`;
              connection.query(sql, (err, rows, fields) => {
                if (err){ throw err}
               res.json(rows);
              })
          })()      
      })

      /* modifier un client */
      GymRouter.post('/team/modifier', (req, res) => {
          let PID = req.body.PID;
          let teamData = req.body.teamData
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 06_gym_team
                     SET T_Name = '${teamData.T_Name}',  T_Phone = '${teamData.T_Phone}' , T_Adress = '${teamData.T_Adress}' ,  T_Gouv = '${teamData.T_Gouv}' , T_Deleg = '${teamData.T_Deleg}' , T_CIN = '${teamData.T_CIN}'
                     WHERE T_ID = ${teamData.T_ID} AND PID = ${PID}`;
              connection.query(sql, (err, rows, fields) => {
                if (err){ throw err}
               res.json(rows);
              })     
      })

      /* selectioner un client */
      GymRouter.post('/team/info', (req, res) => {
          let PID = req.body.PID;
          let TID = req.body.Team_ID
          function FetchTeamData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 06_gym_team WHERE T_ID = ${TID} AND PID = ${PID} `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows[0]);
                })
              });
          }
          function SelectPresence(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 06_gym_team_presence WHERE Team_ID = ${TID}  `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function SelectAvances(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 06_gym_team_avance WHERE Team_ID = ${TID}  `;
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
      GymRouter.post('/team/verification', (req, res) => {
            let PID = req.body.PID;
            let UID = req.body.UID;
            let T_ID = req.body.T_ID;
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `UPDATE 06_gym_team
                       SET Releted_UID = ${UID}
                       WHERE T_ID = ${T_ID} AND PID = ${PID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* selectioner tous les client */
      GymRouter.post('/team/anavce', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `SELECT * , 06_gym_team_avance.PK AS TPK
                       FROM 06_gym_team_avance 
                       LEFT JOIN 06_gym_team ON 06_gym_team.T_ID =  06_gym_team_avance.Team_ID 
                       WHERE 06_gym_team_avance.PID = ${PID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* selectioner tous les client */
      GymRouter.post('/team/anavce/ajoute', (req, res) => {
          let PID = req.body.PID;
          let avanceD = req.body.avanceD;
          let Today = new Date().toISOString().split('T')[0]
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `INSERT INTO 06_gym_team_avance (PID, Team_ID, AV_Date, Valeur)
                       VALUES (${PID}, '${avanceD.Team_ID}','${Today}','${avanceD.Valeur}');`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* modifier un facture */
      GymRouter.post('/team/anavce/supprimer', (req, res) => {
             let PID = req.body.PID
             let PK = req.body.PK
             connection.changeUser({database : 'dszrccqg_system'}, () => {});
             let sql = `DELETE FROM 06_gym_team_avance WHERE PK = ${PK}  AND PID = ${PID} `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })         
      })

      /* selectioner tous les client */
      GymRouter.post('/team/presence', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `SELECT * 
                       FROM 06_gym_team_presence 
                       LEFT JOIN 06_gym_team ON 06_gym_team.T_ID =  06_gym_team_presence.Team_ID 
                       WHERE 06_gym_team_presence.PID = ${PID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      GymRouter.post('/team/presence/ajoute', (req, res) => {
          let PID = req.body.PID;
          let presenceD = req.body.presenceD;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `INSERT INTO 06_gym_team_presence (PID, Team_ID, PR_Date, Genre)
                       VALUES (${PID}, '${presenceD.Team_ID}','${presenceD.PR_Date}','');`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* modifier un facture */
      GymRouter.post('/team/presence/supprimer', (req, res) => {
             let PID = req.body.PID
             let PK = req.body.PK
             connection.changeUser({database : 'dszrccqg_system'}, () => {});
             let sql = `DELETE FROM 06_gym_team_presence WHERE PK = ${PK}  AND PID = ${PID} `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })         
      })

      /* selectioner tous les client */
      GymRouter.post('/team/poste', (req, res) => {
        let TAG = req.body.PID;
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 06_gym_team_poste WHERE PID = '${TAG}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
      })

      /*ajouter famille */
      GymRouter.post('/team/poste/ajouter', (req, res) => {
          let PID = req.body.PID
          let posteD = req.body.posteD
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `INSERT INTO 06_gym_team_poste (PID, Poste ,Description,Salaire,Experience_Target) 
                     VALUES ('${PID}', '${posteD.Poste}','${posteD.Description}','${posteD.Salaire}','${posteD.Description}')`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
            res.json(rows);
          })
              
      })

      /* modifier famille */
      GymRouter.post('/team/poste/modifier', (req, res) => {
        let PID = req.body.PID
        let posteD = req.body.posteD
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `UPDATE 06_gym_team_poste 
                   SET Poste = '${posteD.Poste}' , Description =  '${posteD.Description}'
                   WHERE PK = ${posteD.PK} AND PID = '${PID}' `;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
            
      })

/*####################################[FOURNISSEUR]################################*/

    /* selectioner tous les client */
    GymRouter.post('/fournisseur', (req, res) => {
          let PID = req.body.PID
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 06_gym_fournisseur WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })          
    })

    /* selectioner un client */
    GymRouter.post('/fournisseur/info', (req, res) => {
          let PID = req.body.PID;
          let fourId = req.body.fourId
          function FetchClientData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 06_gym_fournisseur WHERE Four_ID = ${fourId}`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    if (!rows[0]) {resolve([{ Name:null , }]);} else {resolve(rows);}
                })
              });
          }
          function SelectCommandes(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM system_commande WHERE Client = '${fourId}' AND State = 'W'`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function SelectFactureCamion(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 06_gym_abonnement_seances_facture WHERE C_Name = '${fourId}' `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function SelectFactures(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 06_gym_abonnement_seances_facture WHERE C_Name = '${fourId}' `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }


            // Call, Function
          async function query() {
              const clientData = await FetchClientData(); 
              //clientData[0].Commandes = await  SelectCommandes(clientData[0].Name)
              //clientData[0].FactureCamion = await SelectFactureCamion(clientData[0].Name)
              //clientData[0].Facture = await SelectFactures(clientData[0].Name)
            res.send(clientData)
          }
          query();               
    })

    /* Ajouter client */
    GymRouter.post('/fournisseur/ajouter', (req, res) => {
      (async() => {
        let PID = req.body.PID;
        let frsD = req.body.fournisseurData
        let CID = await GenerateID(1111111111,'06_gym_fournisseur','Four_ID');
        let Today = new Date().toISOString().split('T')[0]
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `INSERT INTO 06_gym_fournisseur (PID, Releted_PID, Four_ID, Four_Code_Fiscale, Four_Name, Four_Phone, Articles_Genre, Four_Gouv, Four_Deleg, Four_Adress, Jour_Periodique, Four_State, Four_Lng, Four_Lat)
                   VALUES (${PID},'${frsD.Releted_PID}', ${CID},'${frsD.Code_Fiscale}','${frsD.Name}','${frsD.Phone}', '', '${frsD.Gouv}','${frsD.Deleg}','${frsD.Adress}','Lundi','','0','0');`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })
        })()      
    })

    //check article in abyedhDB */
    GymRouter.post('/fournisseur/checkAbyedhDb', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `SELECT * FROM 05_pv_alimentaire WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows[0]);
          })
              
    })

    /* modifier un client */
    GymRouter.post('/fournisseur/modifier', (req, res) => {
        let PID = req.body.PID;
        let frsD = req.body.fournisseurData
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 06_gym_membres
                    SET Name = '${frsD.Name}',  Phone = '${frsD.Phone}' , Adress = '${frsD.Adress}' ,  Gouv = '${frsD.Gouv}' , Deleg = '${frsD.Deleg}' , Social_Name = '${frsD.Social_Name}'
                    WHERE ME_ID = ${frsD.ME_ID}`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })     
    })

/*####################################[TOOLS]######################################*/

    /* selectioner les prix des article */

    /* selectinner le stock des articles */

    /* suivie d'un article  */

    /* enregistrer une note */


/*&&&&&&&&&&&&&&&&&[PROFILE]&&&&&&&&&&&&&&&&&*/

  /* Profile Data  */
  GymRouter.post('/profile', (req, res) => {
          let PID = req.body.PID;
          let Today = new Date().toISOString().split('T')[0]
          function GetGeneralData() {
            return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                    let sql = `SELECT * FROM 06_sport_salle WHERE PID = '${PID}'`;
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

  GymRouter.post('/profile/print', (req, res) => {
        let PID = req.body.PID;
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `SELECT * FROM 06_sport_salle WHERE PID = ${PID}`;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
  })

  /* modifier Images 
  GymRouter.post('/profile/images/ajouter', upload.single("ProfileImage"), (req, res) => {
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
  GymRouter.post('/profile/update/general', (req, res) => {
        let PID = req.body.PID
        let profileD = req.body.profileDataSent
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `UPDATE 06_sport_salle
                   SET Genre = '${profileD.Genre}', Gouv = '${profileD.Gouv}' ,  Deleg = '${profileD.Deleg}' ,  Phone = '${profileD.Phone}' , Matricule_F  = '${profileD.Matricule_F}', Name = '${profileD.Name}' , Localite = '${profileD.Adress}' ,  Adress = '${profileD.Adress}' 
                   WHERE  PID = '${PID}' `;
         connection.query(sql, (err, rows, fields) => {
          if (err){res.json(err)}
            res.json(rows);
          })         
  })

  /* Modifier Password   */
  GymRouter.post('/profile/update/password', (req, res) => {
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
  GymRouter.post('/profile/update/position', (req, res) => {
          let PID = req.body.PID
          let positionD = req.body.positionDataSent
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `UPDATE 06_sport_salle
                     SET Lat = '${positionD[0]}', Lng = '${positionD[1]}' 
                     WHERE  PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* modifier Images */
  GymRouter.post('/profile/images/ajouter', upload.array("Images",5), (req, res) => {
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

  GymRouter.post('/profile/images/deletefile', async function(req, res, next) {

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
  GymRouter.post('/profile/update/horaire', (req, res) => {
          let PID = req.body.PID
          let settingD = req.body.settingDataSent
          let genre = req.body.genre
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 06_gym_setting
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

  GymRouter.post('/parametre', (req, res) => {
          let PID = req.body.PID;
          let Today = new Date().toISOString().split('T')[0]
          function GetConfirmation() {
            return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                    let sql = `SELECT * FROM 06_sport_salle WHERE PID = ${PID}`;
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
                    let sql = `SELECT * FROM  06_gym_setting WHERE PID = '${PID}';`;
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
  GymRouter.post('/parametre/update', (req, res) => {
          let PID = req.body.PID
          let settingD = req.body.settingDataSent
          let genre = req.body.genre
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 06_gym_setting
                     SET ${genre} = '${settingD}' 
                     WHERE  PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* Update Setting   */
  GymRouter.post('/parametre/confirmer', (req, res) => {
          let PID = req.body.PID
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `UPDATE 06_sport_salle
                     SET Activated = 'true' 
                     WHERE  PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* Update Setting   */
  GymRouter.post('/parametre/paymment', (req, res) => {
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
    GymRouter.post('/documentation/messages', (req, res) => {
           let PID = req.body.PID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `SELECT *  FROM 00_abyedh_messages_sav  WHERE PID = '${PID}' ORDER BY Sent_Date ASC, Sent_Time ASC`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /* ajouter un messages */
    GymRouter.post('/documentation/ajouter', (req, res) => {
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
     GymRouter.post('/verification', (req, res) => {
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
    GymRouter.post('/messages', (req, res) => {
           let PID = req.body.PID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `SELECT *  FROM 00_abyedh_messages_sav  WHERE PID = '${PID}' ORDER BY StartedAt ASC`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    //*selectionner message */
    GymRouter.post('/message', (req, res) => {
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
    GymRouter.post('/message/ajouter', (req, res) => {
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
    GymRouter.post('/tools/export/done', (req, res) => {
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

    GymRouter.get('/tools/export/download/:file', (req, res) => {
      res.download(`C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp/${req.params.file}.sql`);
    })

    GymRouter.post('/tools/export/calclength', (req, res) => {
      fs.readdir('C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp', (err, files) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error reading directory');
          return;
        }

        res.send(`Number of files: ${files.size}`);
      });
    })

    GymRouter.post('/tools/export/calcsize', (req, res) => {
        let totalSize = 0;
        fs.readdir('C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp', (err, files) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error reading directory');
            return;
          }
          for (const file of files) {
            if (!file.startsWith('gym_1567154730')) continue;
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

    GymRouter.post('/tools/export/clear', (req, res) => {
        fs.readdir('C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp', (err, files) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error reading directory');
            return;
          }

          for (const file of files) {
            if (!file.startsWith('gym_1567154730')) continue;
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
    GymRouter.post('/update', (req, res) => {
         let PID = req.body.PID
         let Today = new Date().toISOString().split('T')[0]

          function FetchStock() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `SELECT * FROM 06_gym_forfait WHERE PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchStockFamille() {
            return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 06_gym_forfait_genre WHERE PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchFacture() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * , COALESCE(06_gym_membres.ME_Name, 'PASSAGER') AS ME_Name ,06_gym_abonnement.State AS Pay_State FROM 06_gym_abonnement 
                           LEFT JOIN 06_gym_membres ON 06_gym_abonnement.Membre_ID = 06_gym_membres.ME_ID 
                           LEFT JOIN 06_gym_abonnement_seances ON 06_gym_abonnement.Caisse_ID = 06_gym_abonnement_seances.C_ID 
                           WHERE 06_gym_abonnement.PID = ${PID}`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchCommandes() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `SELECT * FROM dszrccqg_communications.06_gym_commande 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.06_gym_commande.UID = dszrccqg_profile.user_general_data.UID 
                       WHERE  dszrccqg_communications.06_gym_commande.PID = '${PID}'`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function FetchReservation(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `SELECT * FROM dszrccqg_communications.06_gym_souscription 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.06_gym_souscription.UID = dszrccqg_profile.user_general_data.UID 
                       WHERE  dszrccqg_communications.06_gym_souscription.PID = '${PID}'`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function FetchCamion() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 06_gym_abonnement_seances WHERE  PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchClient() {
            return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT *  FROM 06_gym_membres  WHERE PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }

          // Call, Function
          async function query() {
                  const updateData = [{}]; 
                updateData[0].commande = await FetchCommandes()
                updateData[0].reservation = await FetchReservation()
                updateData[0].stock = await FetchStock()
                updateData[0].stockFamille = await FetchStockFamille()
                updateData[0].facture = await FetchFacture()
                updateData[0].camion = await FetchCamion()
                updateData[0].client = await FetchClient()
              res.send(updateData)
         }
          query();
    })


module.exports = GymRouter