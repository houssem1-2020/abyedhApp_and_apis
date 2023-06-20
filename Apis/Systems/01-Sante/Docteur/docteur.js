const express = require('express')
const multer = require('multer')
const DocteurRouter = express.Router()
const connection = require('../../connection.js')
const { spawn } = require('child_process');
const path = require("path");
const fs = require('fs');

//Multer.js
//const DIR = 'C:/Users/kheli/Desktop/PROJECTS/abyedh/abyedh.system/DocteurRouter/public/houssem';
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
        const DIR = 'C:/Users/kheli/Desktop/PROJECTS/abyedh/abyedh.system/DocteurRouter/public/houssem';
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
  DocteurRouter.post('/LogIn', (req, res) => {
      const logInD = req.body.LoginData;
      function Connect(){
          connection.changeUser({database : 'dszrccqg_registration'}, () => {});
          let sql = `SELECT * FROM system_login WHERE Identification = '${logInD.Log}' AND PasswordSalt   = '${logInD.Pwd}' AND SystemKey ='Docteur'` ;
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
  DocteurRouter.get('/Permission', (req, res) => {
      const PID = req.body.pid;
      let sql = `SELECT * FROM admin_setting WHERE SystemTag  = '${PID}'` ;
      connection.query(sql, (err, rows, fields) => {
        if (err) throw err
        res.send(rows);
      }); 
  })

/*####################################[MAIN]#######################################*/
      /* statistics */
      DocteurRouter.post('/ma/stat', (req, res) => {
              let PID =  req.body.PID;
              let Today = new Date().toISOString().split('T')[0]

            function NumRowsTable(table,db) {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT PK FROM 01_docteur_${table} WHERE PID = ${PID}`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows.length);
                        })
                });
            }
            function SeanceEvolution() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT S_Date, COUNT(PK) as Totale FROM 01_docteur_seances WHERE PID  = '${PID}'  GROUP BY S_Date ORDER BY S_Date LIMIT 10;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
            }
            function SeanceDistrubtion() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT 01_docteur_seances.S_Patient, COUNT(01_docteur_seances.PK) as Totale , 01_docteur_patient.PA_Name
                        		   FROM 01_docteur_seances 
                        		   INNER JOIN 01_docteur_patient ON 01_docteur_seances.S_Patient = 01_docteur_patient.PA_ID
                        		   WHERE 01_docteur_seances.PID  = '${PID}'  GROUP BY 01_docteur_seances.S_Patient ORDER BY 01_docteur_seances.S_Patient;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
            }
            function RendyVousDistrubtion() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                        let sql = `SELECT State,COUNT(1) as Totale FROM 01_docteur_rdv  WHERE PID  = '${PID}' GROUP BY State ORDER BY State;`;
                         connection.query(sql, (err, rows, fields) => {
                          if(err) return reject(err);
                          resolve(rows);
                        })
                });
            }
            function PatientDistrubtion() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_system'}, () => {});
                        let sql = `SELECT Gouv,COUNT(1) as Totale FROM 01_docteur_patient  WHERE PID  = '${PID}' GROUP BY Gouv ORDER BY Gouv;`;
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
                    main.patientNum = await NumRowsTable('patient'); 
                    main.rapportNum = await NumRowsTable('rapports'); 
                    main.ordonanceNum = await NumRowsTable('ordonance'); 
                    main.seanceNum = await NumRowsTable('seances'); 
                    main.equipeNum = await NumRowsTable('team'); 

                    main.evolutionSeance = await SeanceEvolution(); 
                    main.seanceDistro = await  SeanceDistrubtion(); 
                    main.rendyVousDistro = await  RendyVousDistrubtion();
                    main.patientDistro = await PatientDistrubtion(); 
                
                    main.activationState = await CheckActivationState();

                    res.send(main)
              }

              //render
              StatForMainPage(); 

      })

/*####################################[RENDY-VOUS]#################################*/
      
      /* request data */
      DocteurRouter.post('/request', (req, res) => {
            let PID = req.body.PID;
            connection.changeUser({database : 'dszrccqg_communications'}, () => {});
            let sql = `SELECT * FROM dszrccqg_communications.01_docteur_rdv 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.01_docteur_rdv.UID = dszrccqg_profile.user_general_data.UID 
                       WHERE  dszrccqg_communications.01_docteur_rdv.PID = '${PID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })
       /* request data */
      DocteurRouter.post('/request/info', (req, res) => {
            let PID = req.body.PID;
            let RID = req.body.CID;
            connection.changeUser({database : 'dszrccqg_communications'}, () => {});
            let sql = `SELECT * FROM dszrccqg_communications.01_docteur_rdv 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.01_docteur_rdv.UID = dszrccqg_profile.user_general_data.UID 
                       LEFT JOIN dszrccqg_system.01_docteur_patient ON dszrccqg_communications.01_docteur_rdv.UID = dszrccqg_system.01_docteur_patient.Releted_UID
                       WHERE  dszrccqg_communications.01_docteur_rdv.PID = '${PID}' AND dszrccqg_communications.01_docteur_rdv.R_ID = '${RID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })


      /* request control : Update commande state  */
      DocteurRouter.post('/request/controle', (req, res) => {
            let PID = req.body.PID;
            let R_ID = req.body.RID;
            let State = req.body.state;
            connection.changeUser({database : 'dszrccqg_communications'}, () => {});
            let sql = `UPDATE 01_docteur_rdv
                       SET State = '${State}'
                       WHERE R_ID = '${R_ID}' AND PID = ${PID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* comptes */
      DocteurRouter.post('/request/accepter', (req, res) => {
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

/*####################################[RAPPORT]####################################*/

    //fetch all article */
    DocteurRouter.post('/rapport', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 01_docteur_rapports WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    //fetch all article */
    DocteurRouter.post('/rapport/info', (req, res) => {
          let PID = req.body.PID;
          let Code = req.body.Code;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 01_docteur_rapports WHERE PID = '${PID}' AND RA_ID = ${Code}`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    //check article in abyedhDB */
    DocteurRouter.post('/rapport/checkAbyedhDb', (req, res) => {
          let Code = req.body.Code;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 000_abyedh_articles WHERE A_Code = '${Code}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows[0]);
          })
              
    })


    //selectioner calendar articles : ba3ed 7otha m3a elli fou9ha 
    DocteurRouter.post('/rapport/plat', (req, res) => {
            let PID = req.body.PID
            let Code = req.body.code
            function FetchPlatInfo() {
                return new Promise((resolve, reject) => {
                   connection.changeUser({database : 'dszrccqg_system'}, () => {});
                    let sql = `SELECT * FROM 01_docteur_rapports WHERE P_Code = '${Code}' AND PID = ${PID}`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                  })
                });
            }
            
            function FetchInFacture() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT * FROM 01_docteur_seances WHERE  Articles LIKE '%${Code}%' AND PID = ${PID}`;
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

    /* ajouter article */
    DocteurRouter.post('/rapport/ajouter', (req, res) => {
          let PID = req.body.PID;
          let articleData = req.body.articleD;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `INSERT INTO 01_docteur_rapports (PID ,P_Code,Name, Prix_vente, Prix_promo,  Cout, Genre,  Repture,  Description, Photo_Path) 
                     VALUES ('${PID}','${articleData.P_Code}','${articleData.Name}','${articleData.Prix_vente}','${articleData.Prix_promo}','${articleData.Cout}','${articleData.Genre}','${articleData.Repture}','${articleData.Description}', 'plat.png' ) `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
          })          
    })


    /* modifier article  */
    DocteurRouter.post('/rapport/modifier', (req, res) => {
          let PID = req.body.PID
          let articleNData = req.body.articleND
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 01_docteur_rapports
                     SET Name = '${articleNData.Name}', Prix_vente = '${articleNData.Prix_vente}', Cout = '${articleNData.Cout}', Genre = '${articleNData.Genre}',   Repture = '${articleNData.Repture}',  Description = '${articleNData.Description}'
                     WHERE P_Code = '${articleNData.P_Code}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })    
           //res.json(fields)      
    })
    /* modifier article  */
    DocteurRouter.post('/rapport/modifier/ingredient', (req, res) => {
          let PID = req.body.PID
          let articleListe = JSON.stringify(req.body.articleListe)
          let Cout = req.body.Cout
          let CodePlat = req.body.CodePlat
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 01_docteur_rapports
                     SET Cout = '${Cout}', Ingredient = '${articleListe}'
                     WHERE P_Code = '${CodePlat}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })    
           //res.json(fields)      
    })

    /* modifier article  */
    DocteurRouter.post('/rapport/modifier/image', (req, res) => {
          let PID = req.body.PID
          let path = req.body.path
          let Code = req.body.code
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 01_docteur_rapports
                     SET Photo_Path = '${path}'
                     WHERE P_Code = '${Code}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })        
    })

    /* supprimer article */
    DocteurRouter.post('/rapport/supprimer', (req, res) => {
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
    DocteurRouter.post('/rapport/familleplat', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 01_docteur_rapports_genre WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /*ajouter famille */
    DocteurRouter.post('/rapport/familles/ajouter', (req, res) => {
        let PID = req.body.PID
        let familleData = req.body.familleD
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `INSERT INTO 01_docteur_rapports_genre (Genre,Description,PID) 
                   VALUES ('${familleData.Name}','${familleData.Description}','${PID}')`;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
            
    })

    /* modifier famille */
    DocteurRouter.post('/rapport/familles/modifier', (req, res) => {
        let PID = req.body.PID
        let familleData = req.body.familleD
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `UPDATE 01_docteur_rapports_genre 
                   SET Genre = '${familleData.Name}' , Description =  '${familleData.Description}'
                    WHERE PK = ${familleData.PK} AND PID = '${PID}' `;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
            
    })

/*####################################[OFFRES]#####################################*/

    //fetch all article */
    DocteurRouter.post('/forfait', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 01_docteur_tarif WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    //check article in abyedhDB */
    DocteurRouter.post('/forfait/checkAbyedhDb', (req, res) => {
          let Code = req.body.Code;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 000_abyedh_articles WHERE A_Code = '${Code}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows[0]);
          })
              
    })

   /* fetach article info  */
    DocteurRouter.post('/forfait/select', (req, res) => {
          let PID = req.body.PID
          let Code = req.body.code
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 01_docteur_tarif WHERE F_ID = '${Code}' AND PID = ${PID}`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.send(rows);
          })
              
    })

    /* ajouter article */
    DocteurRouter.post('/forfait/ajouter', (req, res) => {
          let PID = req.body.PID;
          let articleData = req.body.articleD;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `INSERT INTO 01_docteur_tarif (PID ,F_ID, F_Name, Tarif, Genre) 
                     VALUES ('${PID}','${articleData.F_ID}','${articleData.F_Name}', '${articleData.Tarif}','${articleData.Genre}') `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
          })          
    })


    /* modifier article  */
    DocteurRouter.post('/forfait/modifier', (req, res) => {
          let PID = req.body.PID
          let articleNData = req.body.articleND
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 01_docteur_tarif
                     SET Name = '${articleNData.Name}',  Quantite = '${articleNData.Quantite}', Prix_achat = '${articleNData.Prix_achat}', Genre = '${articleNData.Genre}',   Repture = '${articleNData.Repture}'
                     WHERE A_Code = '${articleNData.A_Code}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })    
           //res.json(fields)      
    })

    /* modifier article  */
    DocteurRouter.post('/forfait/modifier/image', (req, res) => {
          let PID = req.body.PID
          let path = req.body.path
          let Code = req.body.code
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 01_docteur_tarif
                     SET Photo_Path = '${path}'
                     WHERE A_Code = '${Code}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })    
           //res.json(fields)      
    })

    /* supprimer article */
    DocteurRouter.post('/forfait/supprimer', (req, res) => {
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

/*####################################[ORDONNACE]#################################*/

      /* featch tou les camion*/
      DocteurRouter.post('/ordonance', (req, res) => {
              let PID = req.body.PID
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `SELECT * FROM 01_docteur_ordonance 
                         LEFT JOIN 01_docteur_patient ON 01_docteur_ordonance.OR_Patient = 01_docteur_patient.PA_ID
                         WHERE 01_docteur_ordonance.PID = ${PID} LIMIT 200`;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })             
      })

      /* featch tou les camion*/
      DocteurRouter.post('/ordonance/info', (req, res) => {
              let PID = req.body.PID
              let OR_ID = req.body.OR_ID
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `SELECT * FROM 01_docteur_ordonance 
                         LEFT JOIN 01_docteur_patient ON 01_docteur_ordonance.OR_Patient = 01_docteur_patient.PA_ID
                         WHERE 01_docteur_ordonance.PID = ${PID} AND 01_docteur_ordonance.OR_ID = ${OR_ID}`;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })             
      })

      /* selectioner un camion 
      DocteurRouter.post('/ordonance/info', (req, res) => {
            let PID = req.body.PID;
            let caisseID = req.body.camId;
            let Today = new Date().toISOString().split('T')[0]
            function FetchAllCaisseData() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT * FROM 01_docteur_ordonance WHERE PID = ${PID} AND C_ID = ${caisseID}`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows[0]);
                  })
                });
            }
            function CalculateRecette() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT SUM(Final_Value) AS RCT FROM 01_docteur_ordonance WHERE PID = ${PID} AND  Caisse_ID = ${caisseID} AND T_Date = '${Today}' `;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      if (!rows[0].RCT) {resolve('0.000');} else {resolve(rows[0].RCT.toFixed(3));}
                  })
                });
            }
            function CaisseFactures() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT * , COALESCE(01_docteur_patient.PA_Name, 'PASSAGER') AS ME_Name FROM 01_docteur_ordonance 
                             LEFT JOIN 01_docteur_patient ON 01_docteur_ordonance.Membre_ID = 01_docteur_patient.PA_ID 
                             WHERE 01_docteur_ordonance.PID = ${PID} AND  01_docteur_ordonance.Caisse_ID = ${caisseID}   LIMIT 200 `;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }


              // Call, Function
            async function query() {
                const camionList = [{}]  
                camionList[0].Data = await FetchAllCaisseData();
                camionList[0].Recette = await CalculateRecette();
                camionList[0].Facture = await CaisseFactures()
              res.send(camionList)
            }
            query();
                     
      })*/
      
      /* featch tou les camion*/
      DocteurRouter.post('/ordonance/medicamment', (req, res) => {
              let PID = req.body.PID
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `SELECT PK, Nom,Dosage,Forme,Presentation FROM 000_abyedh_medicamment WHERE 1`;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })             
      })

      /* featch tou les camion*/
      DocteurRouter.post('/ordonance/medicamment/select', (req, res) => {
              let PID = req.body.PID
              let PK = req.body.PK
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `SELECT PK, Nom,Dosage,Forme,Presentation FROM 000_abyedh_medicamment WHERE PK = ${PK}`;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })             
      })

      /*Ajouter Camion*/
      DocteurRouter.post('/ordonance/ajouter', (req, res) => {
          (async() => {
              let PID = req.body.PID
              let caisseData = req.body.caisseD
              let C_ID =   await GenerateID(1111111111,`01_docteur_ordonance`,'C_ID');
              let sql = `INSERT INTO 01_docteur_ordonance (PID, C_ID,CA_Name, Password ,Identifiant, Caisse_Fond) 
                        VALUES (${PID} ,${C_ID},'${caisseData.CA_Name}', '${caisseData.Password}','${caisseData.Identifiant}','${caisseData.Caisse_Fond}') `;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })  
        })()             
      })

      /* modifier un camion */
      DocteurRouter.post('/ordonance/modifier', (req, res) => {
            let PID = req.body.PID
            let caisseData = req.body.caisseD
            let sql = `UPDATE 01_docteur_ordonance
                      SET CA_Name = '${caisseData.CA_Name}' , Caisse_Fond = '${caisseData.Caisse_Fond}' , Identifiant = '${caisseData.Identifiant}' , Password = '${caisseData.Password}'  
                      WHERE PID = ${PID} AND C_ID = '${caisseData.C_ID}' `;
             connection.query(sql, (err, rows, fields) => {
              if (err){res.json(err)}
                res.json(rows);
            })          
      })


      /*PRINTING*/ 

      //facture du jour 
      DocteurRouter.post('/ordonance/searchrecette', (req, res) => {
             let PID = req.body.PID
             let caisseID = req.body.camId
             let targetDay = req.body.targetDay
             connection.changeUser({database : 'dszrccqg_system'}, () => {});
             let sql = `SELECT * , COALESCE(01_docteur_patient.PA_Name, 'PASSAGER') AS ME_Name FROM 01_docteur_ordonance 
                        LEFT JOIN 01_docteur_patient ON 01_docteur_ordonance.Membre_ID = 01_docteur_patient.PA_ID 
                        WHERE 01_docteur_ordonance.Caisse_ID = ${caisseID}  AND 01_docteur_ordonance.T_Date >= '${targetDay.start}' AND 01_docteur_ordonance.T_Date <= '${targetDay.end}' `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })

/*####################################[SEANCES]####################################*/
    /* selectioner un facture et ses articles */
    DocteurRouter.post('/seances', (req, res) => {
         let PID = req.body.PID
         connection.changeUser({database : 'dszrccqg_system'}, () => {});
         let sql = `SELECT * , COALESCE(01_docteur_patient.PA_Name, 'PASSAGER') AS PA_Name , COALESCE(01_docteur_ordonance.OR_Articles, '[]') AS OR_Articles ,  01_docteur_seances.State AS Pay_State FROM 01_docteur_seances 
                   LEFT JOIN 01_docteur_patient ON 01_docteur_seances.S_Patient = 01_docteur_patient.PA_ID
                   LEFT JOIN 01_docteur_ordonance ON 01_docteur_seances.Ordonance = 01_docteur_ordonance.OR_ID
                   WHERE 01_docteur_seances.PID = '${PID}'  `;
         connection.query(sql, (err, rows, fields) => {
          if (err){ throw err}
          res.send(rows);
          })         
    })

    /* selectioner un facture et ses articles */
    DocteurRouter.post('/seances/select', (req, res) => {
           let PID = req.body.PID
           let SID = req.body.SID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `SELECT * , COALESCE(01_docteur_patient.PA_Name, 'PASSAGER') AS PA_Name , COALESCE(01_docteur_ordonance.OR_Articles, '[]') AS OR_Articles ,  01_docteur_seances.State AS Pay_State FROM 01_docteur_seances 
                     LEFT JOIN 01_docteur_patient ON 01_docteur_seances.S_Patient = 01_docteur_patient.PA_ID
                     LEFT JOIN 01_docteur_ordonance ON 01_docteur_seances.Ordonance = 01_docteur_ordonance.OR_ID
                     WHERE 01_docteur_seances.PID = '${PID}' AND 01_docteur_seances.S_ID = ${SID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.send(rows);
          })         
    })

    DocteurRouter.post('/seances/ajouter', async function(req, res, next) {
          let PID = req.body.PID;
          let seanceData = req.body.seanceData;
          req.PID = req.body.PID;
          req.seanceData = req.body.seanceData

          let S_ID = await GenerateID(1111111111,`01_docteur_seances`,'S_ID');
          let OR_ID = await GenerateID(1111111111,`01_docteur_ordonance`,'OR_ID');
          req.S_ID = S_ID
          req.OR_ID = OR_ID

          let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
          let ToTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          req.Today = Today
          req.ToTime = ToTime

          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `INSERT INTO 01_docteur_seances (S_ID, PID, S_Patient, Diagnostic, Resultat, Maladie, State, State_Degre, S_Date, S_Time, Ordonance) 
                    VALUES ('${S_ID}','${PID}', '${seanceData.S_Patient}','${seanceData.Diagnostic}','${seanceData.Resultat}','0','0', '${seanceData.State_Degre}','${Today}','${ToTime}', '${seanceData.ordonance.length != 0 ? '' : OR_ID}')`;
          connection.query(sql, (err, rows, fields) => {
            if (err) throw err
            
          }); 
          if (seanceData.ordonance.length != 0) {next();} else {res.json({FID:'FID'})}        
    }, function(req, res) {
          let PID =  req.PID
          let seanceData =  req.seanceData
          let S_ID =  req.S_ID
          let OR_ID =  req.OR_ID
          let Today =  req.Today
          let ToTime =  req.ToTime

          let medicammentL = JSON.stringify(seanceData.ordonance)

          let sql = `INSERT INTO 01_docteur_ordonance (PID, OR_ID, OR_Date, OR_Time, OR_Patient, OR_State, Is_Seances, OR_Articles) 
                    VALUES ('${PID}','${OR_ID}', '${Today}','${ToTime}','${seanceData.S_Patient}','0',  '${S_ID}','${medicammentL}')`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
              res.json({OR_ID: OR_ID})
            }) 
    });

    /* modifier un facture */
    DocteurRouter.post('/seances/modifier', (req, res) => {
           let PID = req.body.PID
           let factId = req.body.factD
           let FID = req.body.fid
           let articleL = JSON.stringify(factId.articles)
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `UPDATE 01_docteur_seances
                      SET Cre_Date = '${factId.jour}', C_Name = '${factId.client}', Tota = '${factId.totale}', De = '${factId.de}', Vers ='${factId.vers}' , Chauffeur ='${factId.Chauffeur}' ,Fournisseurs ='${factId.Fournisseurs}', Articles = '${articleL}'
                      WHERE F_ID = '${FID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json({FID:FID});
          })         
    })

    /* modifier un facture */
    DocteurRouter.post('/seances/supprimer', (req, res) => {
           let PID = req.body.PID
           let FID = req.body.FID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `DELETE FROM 01_docteur_seances WHERE  T_ID = '${FID}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })         
    })

/*####################################[TARIF]######################################*/

      //fetch all article */
      DocteurRouter.post('/tables', (req, res) => {
            let PID = req.body.PID;
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `SELECT * FROM 01_docteur_tarif WHERE PID = '${PID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* ajouter article */
      DocteurRouter.post('/tables/ajouter', (req, res) => {
            let PID = req.body.PID;
            let tableData = req.body.tableD;
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `INSERT INTO 01_docteur_tarif (PID ,Table_Name,  Table_Num,  Description ) 
                       VALUES ('${PID}','${tableData.Table_Name}','${tableData.Table_Num}', '' ) `;
             connection.query(sql, (err, rows, fields) => {
              if (err){res.json(err)}
                res.json(rows);
            })          
      })


        /* modifier famille */
      DocteurRouter.post('/tables/modifier', (req, res) => {
          let PID = req.body.PID
          let edittableD = req.body.editTableD
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 01_docteur_tarif 
                     SET Table_Name = '${edittableD.Name}' , Table_Num =  '${edittableD.Num}'
                     WHERE PK = ${edittableD.PK} AND PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
            res.json(rows);
          })
              
      })

/*####################################[PATIENT]####################################*/

    /* selectioner tous les client */
    DocteurRouter.post('/patient', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT *  FROM 01_docteur_patient  WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })


    /* selectioner un client */
    DocteurRouter.post('/patient/info', (req, res) => {
          let PID = req.body.PID;
          let patientId = req.body.patientId
          function FetchMembreData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 01_docteur_patient WHERE PID = ${PID} AND PA_ID = ${patientId}`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    if (!rows[0]) {resolve([{ Name:null , }]);} else {resolve(rows[0]);}
                })
              });
          }

          function SelectRendyVous(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `SELECT * FROM 01_docteur_rdv WHERE UID = '${Name}' AND PID = ${PID} `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }

          function SelectOrdonance(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 01_docteur_seances WHERE S_Patient = '${Name}' AND PID = '${PID}'`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
         }

         function SelectSeances(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 01_docteur_ordonance WHERE OR_Patient = '${Name}' AND PID = '${PID}'`;
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
              clientListe.RDV = await  SelectRendyVous(patientId)
              clientListe.Ordonance = await SelectOrdonance(patientId)
              clientListe.Seances = await SelectSeances(patientId)
            res.send(clientListe)
          }
          query();               
    })

    /* selectioner tous les client 
    DocteurRouter.post('/patient/verification/recherche', (req, res) => {
          let UID = req.body.UID;
          connection.changeUser({database : 'dszrccqg_profile'}, () => {});
          let sql = `SELECT *  FROM user_general_data  WHERE UID = '${UID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })*/

    //check article in abyedhDB */
    DocteurRouter.post('/patient/checkAbyedhDb', (req, res) => {
          let UID = req.body.UID;
          connection.changeUser({database : 'dszrccqg_profile'}, () => {});
          let sql = `SELECT * FROM user_general_data WHERE UID = '${UID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows[0]);
          })
              
    })

    /* selectioner tous les client */
    DocteurRouter.post('/patient/verification', (req, res) => {
          let PID = req.body.PID;
          let UID = req.body.UID;
          let PA_ID = req.body.PA_ID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 01_docteur_patient
                     SET Releted_UID = ${UID}
                     WHERE PA_ID = ${PA_ID} AND PID = ${PID}`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    


    /* Ajouter client */
    DocteurRouter.post('/patient/ajouter', (req, res) => {
      (async() => {
        let PID = req.body.PID;
        let patientD = req.body.patientD
        let CID = await GenerateID(1111111111,'01_docteur_patient','PA_ID');
        let Today = new Date().toISOString().split('T')[0]
          let sql = `INSERT INTO 01_docteur_patient (PA_ID, PID,  Releted_UID,  PA_Name, Creation_Date, Phone, Adress, CIN, PA_State, Gouv, Deleg) 
                     VALUES (${CID}, ${PID},'${patientD.Releted_UID}','${patientD.Name}','${Today}','${patientD.Phone}','${patientD.Adress}','${patientD.CIN}','null','${patientD.Gouv}', '${patientD.Deleg}' );`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })
        })()      
    })




    /* modifier un client */
    DocteurRouter.post('/patient/modifier', (req, res) => {
        let PID = req.body.PID;
        let clientD = req.body.clientD
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `UPDATE 01_docteur_patient
                   SET ME_Name = '${clientD.ME_Name}',  Phone = '${clientD.Phone}' , Adress = '${clientD.Adress}' ,  Gouv = '${clientD.Gouv}' , Deleg = '${clientD.Deleg}' , CIN = '${clientD.CIN}'
                   WHERE PA_ID = ${clientD.PA_ID} AND PID = ${PID}`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })     
    })

    /* map : liste des location */
    DocteurRouter.post('/patient/fidelite', (req, res) => {
           let PID = req.body.PID;
           let genre = req.body.genre
           let start = req.body.start
           let finish = req.body.finish
           let top = req.body.Top
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql1 = `SELECT  01_docteur_seances.S_Patient, SUM(Final_Value) as Totale, 01_docteur_seances.T_Date , 01_docteur_patient.PA_Name, 01_docteur_patient.PA_ID, COALESCE(01_docteur_patient.PA_Name, 'PASSAGER') AS ME_Name
                      FROM 01_docteur_seances 
                      LEFT JOIN 01_docteur_patient ON 01_docteur_seances.S_Patient = 01_docteur_patient.PA_ID
                      WHERE 01_docteur_seances.T_Date > '${start}' AND 01_docteur_seances.T_Date < '${finish}' 
                      GROUP BY 01_docteur_seances.S_Patient ORDER BY SUM(Final_Value) DESC LIMIT ${top};`

           let sql2 = `SELECT COUNT(1) as Totale , 01_docteur_seances.S_Patient , 01_docteur_patient.PA_Name , 01_docteur_patient.PA_ID, COALESCE(01_docteur_patient.PA_Name, 'PASSAGER') AS ME_Name
                      FROM 01_docteur_seances  
                      LEFT JOIN 01_docteur_patient ON 01_docteur_seances.S_Patient = 01_docteur_patient.PA_ID
                      WHERE 01_docteur_seances.T_Date > '${start}' AND 01_docteur_seances.T_Date < '${finish}'  
                      GROUP BY 01_docteur_seances.S_Patient ORDER BY COUNT(1) DESC LIMIT ${top};`

           connection.query(genre == 'Totale' ? sql1 : sql2 , (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

/*####################################[TEAM]#######################################*/

      /* selectioner tous l'01_docteur_team */
      DocteurRouter.post('/team', (req, res) => {
            let PID = req.body.PID;
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `SELECT *  FROM 01_docteur_team WHERE PID = ${PID} `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.send(rows);
            })         
      })

      /* Ajouter client */
      DocteurRouter.post('/team/ajouter', (req, res) => {
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
      DocteurRouter.post('/team/modifier', (req, res) => {
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

      /* selectioner un client */
      DocteurRouter.post('/team/info', (req, res) => {
          let PID = req.body.PID;
          let TID = req.body.Team_ID
          function FetchTeamData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 01_docteur_team WHERE T_ID = ${TID} AND PID = ${PID} `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    if (!rows[0]) {resolve([{ Name:null , }]);} else {resolve(rows);}
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
              const teamData = await FetchTeamData(); 
              teamData[0].Presence = await  SelectPresence(teamData[0].T_ID)
              teamData[0].Avances = await SelectAvances(teamData[0].T_ID)
              //teamData[0].Facture = await SelectFactures(teamData[0].Name)
            res.send(teamData)
          }
          query();               
      })

      /* selectioner tous les client */
      DocteurRouter.post('/team/anavce', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `SELECT * 
                       FROM 01_docteur_team_avance 
                       LEFT JOIN 01_docteur_team ON 01_docteur_team.T_ID =  01_docteur_team_avance.Team_ID 
                       WHERE PID = ${PID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* selectioner tous les client */
      DocteurRouter.post('/team/anavce/ajoute', (req, res) => {
          let TAG = req.body.PID;
          let avanceD = req.body.avanceD;
          let Today = new Date().toISOString().split('T')[0]
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `INSERT INTO 01_docteur_team_avance (Team_ID, AV_Date, Valeur)
                       VALUES ('${avanceD.Team_ID}','${Today}','${avanceD.Valeur}');`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* selectioner tous les client */
      DocteurRouter.post('/team/presence', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `SELECT * 
                       FROM 01_docteur_team_presence 
                       LEFT JOIN 01_docteur_team ON 01_docteur_team.T_ID =  01_docteur_team_presence.Team_ID 
                       WHERE PID = ${PID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      DocteurRouter.post('/team/presence/ajoute', (req, res) => {
          let TAG = req.body.PID;
          let presenceD = req.body.presenceD;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `INSERT INTO 01_docteur_team_presence (Team_ID, PR_Date, Genre)
                       VALUES ('${presenceD.Team_ID}','${presenceD.PR_Date}','');`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* selectioner tous les client */
      DocteurRouter.post('/team/poste', (req, res) => {
        let TAG = req.body.PID;
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 01_docteur_team_poste WHERE PID = '${TAG}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
      })

      /*ajouter famille */
      DocteurRouter.post('/team/poste/ajouter', (req, res) => {
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
      DocteurRouter.post('/team/poste/modifier', (req, res) => {
        let PID = req.body.PID
        let posteD = req.body.posteD
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `UPDATE 01_docteur_team_poste 
                   SET Poste = '${posteD.Poste}' , Description =  '${posteD.Description}'
                   WHERE PK = ${posteD.PK} AND PID = '${PID}' `;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
            
      })

/*####################################[FOURNISSEUR]################################*/

    /* selectioner tous les client */
    DocteurRouter.post('/fournisseur', (req, res) => {
          let PID = req.body.PID
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 01_docteur_fournisseur WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })          
    })

    /* selectioner un client */
    DocteurRouter.post('/fournisseur/info', (req, res) => {
          let PID = req.body.PID;
          let fourId = req.body.fourId
          function FetchClientData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 01_docteur_fournisseur WHERE Four_ID = ${fourId}`;
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
                let sql = `SELECT * FROM 01_docteur_seances_facture WHERE C_Name = '${fourId}' `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function SelectFactures(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 01_docteur_seances_facture WHERE C_Name = '${fourId}' `;
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
    DocteurRouter.post('/fournisseur/ajouter', (req, res) => {
      (async() => {
        let PID = req.body.PID;
        let frsD = req.body.fournisseurData
        let CID = await GenerateID(1111111111,'01_docteur_fournisseur','Four_ID');
        let Today = new Date().toISOString().split('T')[0]
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `INSERT INTO 01_docteur_fournisseur (PID, Releted_PID, Four_ID, Four_Code_Fiscale, Four_Name, Four_Phone, Articles_Genre, Four_Gouv, Four_Deleg, Four_Adress, Jour_Periodique, Four_State, Four_Lng, Four_Lat)
                   VALUES (${PID},'${frsD.Releted_PID}', ${CID},'${frsD.Code_Fiscale}','${frsD.Name}','${frsD.Phone}', '', '${frsD.Gouv}','${frsD.Deleg}','${frsD.Adress}','Lundi','','0','0');`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })
        })()      
    })

    //check article in abyedhDB */
    DocteurRouter.post('/fournisseur/checkAbyedhDb', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `SELECT * FROM 05_pv_alimentaire WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows[0]);
          })
              
    })

    /* modifier un client */
    DocteurRouter.post('/fournisseur/modifier', (req, res) => {
        let PID = req.body.PID;
        let frsD = req.body.fournisseurData
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 01_docteur_patient
                    SET Name = '${frsD.Name}',  Phone = '${frsD.Phone}' , Adress = '${frsD.Adress}' ,  Gouv = '${frsD.Gouv}' , Deleg = '${frsD.Deleg}' , Social_Name = '${frsD.Social_Name}'
                    WHERE PA_ID = ${frsD.PA_ID}`;
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
  DocteurRouter.post('/profile', (req, res) => {
          let PID = req.body.PID;
          let Today = new Date().toISOString().split('T')[0]
          function GetGeneralData() {
            return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                    let sql = `SELECT * FROM 01_docteur WHERE PID = '${PID}'`;
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

  DocteurRouter.post('/profile/print', (req, res) => {
        let PID = req.body.PID;
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `SELECT * FROM 01_docteur WHERE PID = ${PID}`;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
  })

  /* modifier Images 
  DocteurRouter.post('/profile/images/ajouter', upload.single("ProfileImage"), (req, res) => {
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
  DocteurRouter.post('/profile/update/general', (req, res) => {
        let PID = req.body.PID
        let profileD = req.body.profileDataSent
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `UPDATE 01_docteur
                   SET Genre = '${profileD.Genre}', Gouv = '${profileD.Gouv}' ,  Deleg = '${profileD.Deleg}' ,  Phone = '${profileD.Phone}' , Matricule_F  = '${profileD.Matricule_F}', Name = '${profileD.Name}' , Localite = '${profileD.Adress}' ,  Adress = '${profileD.Adress}' 
                   WHERE  PID = '${PID}' `;
         connection.query(sql, (err, rows, fields) => {
          if (err){res.json(err)}
            res.json(rows);
          })         
  })

  /* Modifier Password   */
  DocteurRouter.post('/profile/update/password', (req, res) => {
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
  DocteurRouter.post('/profile/update/position', (req, res) => {
          let PID = req.body.PID
          let positionD = req.body.positionDataSent
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `UPDATE 01_docteur
                     SET Lat = '${positionD[0]}', Lng = '${positionD[1]}' 
                     WHERE  PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* modifier Images */
  DocteurRouter.post('/profile/images/ajouter', upload.array("Images",5), (req, res) => {
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

  DocteurRouter.post('/profile/images/deletefile', async function(req, res, next) {

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
  DocteurRouter.post('/profile/update/horaire', (req, res) => {
          let PID = req.body.PID
          let settingD = req.body.settingDataSent
          let genre = req.body.genre
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 01_docteur_setting
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

  DocteurRouter.post('/parametre', (req, res) => {
          let PID = req.body.PID;
          let Today = new Date().toISOString().split('T')[0]
          function GetConfirmation() {
            return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                    let sql = `SELECT * FROM 01_docteur WHERE PID = ${PID}`;
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
                    let sql = `SELECT * FROM  01_docteur_setting WHERE PID = '${PID}';`;
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
  DocteurRouter.post('/parametre/update', (req, res) => {
          let PID = req.body.PID
          let settingD = req.body.settingDataSent
          let genre = req.body.genre
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 01_docteur_setting
                     SET ${genre} = '${settingD}' 
                     WHERE  PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* Update Setting   */
  DocteurRouter.post('/parametre/confirmer', (req, res) => {
          let PID = req.body.PID
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `UPDATE 01_docteur
                     SET Activated = 'true' 
                     WHERE  PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* Update Setting   */
  DocteurRouter.post('/parametre/paymment', (req, res) => {
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
    DocteurRouter.post('/documentation/messages', (req, res) => {
           let PID = req.body.PID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `SELECT *  FROM 00_abyedh_messages_sav  WHERE PID = '${PID}' ORDER BY Sent_Date ASC, Sent_Time ASC`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /* ajouter un messages */
    DocteurRouter.post('/documentation/ajouter', (req, res) => {
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
     DocteurRouter.post('/verification', (req, res) => {
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
    DocteurRouter.post('/messages', (req, res) => {
           let PID = req.body.PID
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `SELECT *  FROM 00_abyedh_messages_sav  WHERE PID = '${PID}' ORDER BY StartedAt ASC`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    //*selectionner message */
    DocteurRouter.post('/message', (req, res) => {
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
    DocteurRouter.post('/message/ajouter', (req, res) => {
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
    DocteurRouter.post('/tools/export/done', (req, res) => {
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

    DocteurRouter.get('/tools/export/download/:file', (req, res) => {
      res.download(`C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp/${req.params.file}.sql`);
    })

    DocteurRouter.post('/tools/export/calclength', (req, res) => {
      fs.readdir('C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp', (err, files) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error reading directory');
          return;
        }

        res.send(`Number of files: ${files.size}`);
      });
    })

    DocteurRouter.post('/tools/export/calcsize', (req, res) => {
        let totalSize = 0;
        fs.readdir('C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp', (err, files) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error reading directory');
            return;
          }
          for (const file of files) {
            if (!file.startsWith('docteur_1567154730')) continue;
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

    DocteurRouter.post('/tools/export/clear', (req, res) => {
        fs.readdir('C:/Users/Administrator/Desktop/Abyedh/CDN/DataBaseBackUp', (err, files) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error reading directory');
            return;
          }

          for (const file of files) {
            if (!file.startsWith('docteur_1567154730')) continue;
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
    DocteurRouter.post('/update', (req, res) => {
         let PID = req.body.PID
         let Today = new Date().toISOString().split('T')[0]

          function FetchStock() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `SELECT * FROM 01_docteur_tarif WHERE PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchStockFamille() {
            return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 01_docteur_tarif_genre WHERE PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchFacture() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * , COALESCE(01_docteur_patient.PA_Name, 'PASSAGER') AS ME_Name ,01_docteur_seances.State AS Pay_State FROM 01_docteur_seances 
                           LEFT JOIN 01_docteur_patient ON 01_docteur_seances.S_Patient = 01_docteur_patient.PA_ID 
                           LEFT JOIN 01_docteur_seances ON 01_docteur_seances.Caisse_ID = 01_docteur_seances.C_ID 
                           WHERE 01_docteur_seances.PID = ${PID}`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchCommandes() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `SELECT * FROM dszrccqg_communications.01_docteur_commande 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.01_docteur_commande.UID = dszrccqg_profile.user_general_data.UID 
                       WHERE  dszrccqg_communications.01_docteur_commande.PID = '${PID}'`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function FetchReservation(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                let sql = `SELECT * FROM dszrccqg_communications.01_docteur_rdv 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.01_docteur_rdv.UID = dszrccqg_profile.user_general_data.UID 
                       WHERE  dszrccqg_communications.01_docteur_rdv.PID = '${PID}'`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function FetchCamion() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 01_docteur_seances WHERE  PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchClient() {
            return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT *  FROM 01_docteur_patient  WHERE PID = '${PID}'`;
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


module.exports = DocteurRouter