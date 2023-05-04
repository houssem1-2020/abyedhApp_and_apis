const express = require('express')
const multer = require('multer')
const PtVenteGros = express.Router()
const connection = require('../../connection.js')
const path = require("path");

//Multer.js
const DIR = 'C:/Users/kheli/Desktop/PROJECTS/abyedh/abyedh.system/PtVenteGros/public/houssem';
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
  PtVenteGros.post('/LogIn', (req, res) => {
      const logInD = req.body.LoginData;
      function Connect(){
          connection.changeUser({database : 'dszrccqg_registration'}, () => {});
          let sql = `SELECT * FROM system_login WHERE Identification = '${logInD.Log}' AND PasswordSalt   = '${logInD.Pwd}' AND SystemKey ='PTVGros'` ;
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
  PtVenteGros.get('/Permission', (req, res) => {
      const PID = req.body.pid;
      let sql = `SELECT * FROM admin_setting WHERE SystemTag  = '${PID}'` ;
      connection.query(sql, (err, rows, fields) => {
        if (err) throw err
        res.send(rows);
      }); 
  })

/*####################################[MAIN]#######################################*/
      /* statistics */
      PtVenteGros.post('/ma/stat', (req, res) => {
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
              function RecetteCommandes() {
                return new Promise((resolve, reject) => {
                        connection.changeUser({database : 'dszrccqg_communications'}, () => {});
                        let sql = `SELECT State,COUNT(1) as Totale 
                                   FROM 08_vente_en_gros_demande  WHERE PID  = '${PID}'  AND Passed_Day = '${Today}'
                                   GROUP BY State ORDER BY State;`;
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
                    main.RecetteCommandes = await  RecetteCommandes(); 
                    main.camionStat = camionList; 
                    main.activationState = await CheckActivationState();

                    res.send(main)
              }

              //render
              StatForMainPage(); 

      })

/*####################################[REQUEST]####################################*/

      /*fetch all request */
      PtVenteGros.post('/commande', (req, res) => {
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

      /* request data */
      PtVenteGros.post('/commande/info', (req, res) => {
            let PID = req.body.PID;
            let RID = req.body.CID;
            connection.changeUser({database : 'dszrccqg_communications'}, () => {});
            let sql = `SELECT * FROM dszrccqg_communications.08_vente_en_gros_demande 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.08_vente_en_gros_demande.UID = dszrccqg_profile.user_general_data.UID 
                       WHERE  dszrccqg_communications.08_vente_en_gros_demande.PID = '${PID}' AND dszrccqg_communications.08_vente_en_gros_demande.R_ID = '${RID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* request control : Update commande state  */
      PtVenteGros.post('/commande/controle', (req, res) => {
            let PID = req.body.PID;
            let R_ID = req.body.RID;
            let State = req.body.state;
            connection.changeUser({database : 'dszrccqg_communications'}, () => {});
            let sql = `UPDATE 08_vente_en_gros_demande
                       SET State = '${State}'
                       WHERE R_ID = '${R_ID}' AND PID = '${PID}' `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* comptes */
      PtVenteGros.post('/commande/comptes', (req, res) => {
          let PID = req.body.PID
            let sql = `SELECT * FROM system_commande_comptes WHERE PID = '${PID}' `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      /* comptes Ajouter */
      PtVenteGros.post('/commande/comptes/ajouter', (req, res) => {
        (async() => {
            let PID = req.body.PID;
            let compteData = req.body.compteData
            let CID = await GenerateID(1111111111,`system_commande_comptes`,'CID');
              let sql = `INSERT INTO system_commande_comptes(CID,Name,Identifiant, Password, SystemTag) 
                    VALUES (${CID},'${compteData.Name}','${compteData.Identifiant}','${compteData.Password}','${TAG}')`;
               connection.query(sql, (err, rows, fields) => {
                if (err){ throw err}
                res.json(rows);
              })
         })() 
                
      })

      /* modifier une location */
      PtVenteGros.post('/commande/comptes/modifier', (req, res) => {
         let PID = req.body.PID;
         let editCompteD = req.body.editCompteD
            let sql = `UPDATE system_commande_comptes 
                  SET Name= '${editCompteD.Name}' , Identifiant= '${editCompteD.Identifiant}', Password = '${editCompteD.Password}'
                  WHERE PK= ${editCompteD.PK} AND CID = ${editCompteD.CID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

/*####################################[STOCK]######################################*/

    //fetch all article */
    PtVenteGros.post('/stock', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 08_vente_en_gros_articles WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    //check article in abyedhDB */
    PtVenteGros.post('/stock/checkAbyedhDb', (req, res) => {
          let Code = req.body.Code;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 000_abyedh_articles WHERE A_Code = '${Code}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows[0]);
          })
              
    })

   /* fetach article info  */
    PtVenteGros.post('/stock/article', (req, res) => {
          let PID = req.body.PID
          let Code = req.body.code
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 08_vente_en_gros_articles WHERE A_Code = '${Code}' AND PID = ${PID}`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.send(rows);
          })
              
    })

    //selectioner calendar articles : ba3ed 7otha m3a elli fou9ha 
    PtVenteGros.post('/stock/article/calendar', (req, res) => {
            let PID = req.body.PID
            let Code = req.body.code

            function FetchFromBE(genre) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 08_vente_en_gros_article_suivie_stock WHERE Genre = '${genre}' AND PID = ${PID}  AND  Articles LIKE '%${Code}%' `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
            }
            function FetchInFacture() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT * FROM 08_vente_en_gros_factures WHERE  Articles LIKE '%${Code}%' AND PID = ${PID}`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }
            function FetchForCamion() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT * FROM 08_vente_en_gros_camion_fond WHERE  Articles LIKE '%${Code}%' AND Genre = 'Fonds' AND PID = ${PID}`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }

            // Call, Function
            async function StockArticleCalendar() {
                const articleCalendar = {}; 
                articleCalendar.bonE = await FetchFromBE('Entre')
                articleCalendar.bonS = await FetchFromBE('Sortie')
                articleCalendar.InFacture = await FetchInFacture()
                articleCalendar.ForCamion = await FetchForCamion()
              res.send(articleCalendar)
            }

            //
            StockArticleCalendar();
              
    })

    /* ajouter article */
    PtVenteGros.post('/stock/ajouter', (req, res) => {
          let PID = req.body.PID;
          let articleData = req.body.articleD;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `INSERT INTO 08_vente_en_gros_articles (PID ,A_Code,Name, Prix_vente, Quantite, Prix_achat, Genre, Socite, Repture, TVA, Groupage,Details,Photo_Path) 
                     VALUES ('${PID}','${articleData.A_Code}','${articleData.Name}','${articleData.PrixV}','${articleData.Qte}','${articleData.PrixA}','${articleData.Genre}','${articleData.Socite}','${articleData.Rept}','${articleData.TVA}','${articleData.Groupage}','', 'default_img.jpg' ) `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              console.log(err)
              res.json(rows);
          })          
    })


    /* modifier article  */
    PtVenteGros.post('/stock/modifier', (req, res) => {
          let PID = req.body.PID
          let articleNData = req.body.articleND
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 08_vente_en_gros_articles
                     SET Name = '${articleNData.Name}', Prix_vente = '${articleNData.Prix_vente}', Quantite = '${articleNData.Quantite}', Prix_achat = '${articleNData.Prix_achat}', Genre = '${articleNData.Genre}', Socite = '${articleNData.Socite}', Repture = '${articleNData.Repture}', TVA = '${articleNData.TVA}' , Groupage = '${articleNData.Groupage}'
                     WHERE A_Code = '${articleNData.A_Code}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
    })

    /* modifier article  */
    PtVenteGros.post('/stock/modifier/image', (req, res) => {
          let PID = req.body.PID
          let path = req.body.path
          let Code = req.body.code
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 08_vente_en_gros_articles
                     SET Photo_Path = '${path}'
                     WHERE A_Code = '${Code}' AND PID = ${PID} `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })    
           //res.json(fields)      
    })

    /* supprimer article */
    PtVenteGros.post('/stock/supprimer', (req, res) => {
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
    PtVenteGros.post('/stock/familles', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 08_vente_en_gros_articles_genre WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /*ajouter famille */
    PtVenteGros.post('/stock/familles/ajouter', (req, res) => {
        let PID = req.body.PID
        let familleData = req.body.familleD
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `INSERT INTO 08_vente_en_gros_articles_genre (Genre,Description,PID) 
                   VALUES ('${familleData.Name}','${familleData.Description}','${PID}')`;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
            
    })

    /* modifier famille */
    PtVenteGros.post('/stock/familles/modifier', (req, res) => {
            let PID = req.body.PID
            let familleData = req.body.familleD

            function FetchFamilleData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 08_vente_en_gros_articles_genre WHERE PK = ${familleData.PK} AND PID = '${PID}' `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows[0]);
                })
              });
            }
            function UpdateStock(genre,newGenre) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `UPDATE 08_vente_en_gros_articles
                              SET Genre = '${newGenre}'
                              WHERE Genre = '${genre}' AND PID = '${PID}' `;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows)
                      
                  })
                });
            }
            function UpdateFamille(camId) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `UPDATE 08_vente_en_gros_articles_genre 
                             SET Genre = '${familleData.Name}' , Description =  '${familleData.Description}'
                             WHERE PK = ${familleData.PK} AND PID = '${PID}' `;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                     resolve(rows)
                  })
                });
            }

              // Call, Function
            async function query() {
                const oldFamlille = await FetchFamilleData(); 
                const updatedStock = await UpdateStock(oldFamlille.Genre,familleData.Name); 
                if (oldFamlille && updatedStock) {
                  const updateFamille = await UpdateFamille(); 
                  res.send(updateFamille)
                }
            }
            query();
                
    })


    // PtVenteGros.post('/stock/familles/modifier', (req, res) => {
    //     let PID = req.body.PID
    //     let familleData = req.body.familleD
    //     connection.changeUser({database : 'dszrccqg_system'}, () => {});
    //     let sql = `UPDATE 08_vente_en_gros_articles_genre 
    //                SET Genre = '${familleData.Name}' , Description =  '${familleData.Description}'
    //                WHERE PK = ${familleData.PK} AND PID = '${PID}' `;
    //      connection.query(sql, (err, rows, fields) => {
    //       if (err){ res.json(err)}
    //       res.json(rows);
    //     })
            
    // })

      /* ajouter be */
    PtVenteGros.post('/stock/be', (req, res) => {
          let PID = req.body.PID  
          let articleList = req.body.artList; //[['6191513501017','5'],['6191513502212','5']]; //req.body.artList
          let sqlText = ''
          for (let i = 0; i < articleList.length; i++) {
            sqlText = sqlText.concat(" ", `WHEN A_Code =  ${articleList[i][0]} AND PID = ${PID} THEN Quantite +  ${articleList[i][1]} `);    
          }
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 08_vente_en_gros_articles
                    SET Quantite = CASE  
                              ${sqlText}
                    ELSE Quantite
                    END`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
              res.json(rows);
            })    
    })
    
    /* ajouter bs */
    PtVenteGros.post('/stock/bs', (req, res) => {
         let PID = req.body.PID  
          let articleList = req.body.artList; //[['6191513501017','5'],['6191513502212','5']]; //req.body.artList
          let sqlText = ''
          for (let i = 0; i < articleList.length; i++) {
            sqlText = sqlText.concat(" ", `WHEN A_Code =  ${articleList[i][0]} AND PID = ${PID} THEN Quantite -  ${articleList[i][1]} `);    
          }
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 08_vente_en_gros_articles
                    SET Quantite = CASE  
                              ${sqlText}
                    ELSE Quantite
                    END`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
              res.json(rows);
            })     
    })

    /* save bebs */
    PtVenteGros.post('/stock/bebs/save', (req, res) => {
      (async() => {
            let PID = req.body.PID  
            let articleList = req.body.artList; 
            let BE_ID =  await GenerateID(1111111111,`08_vente_en_gros_article_suivie_stock`,'BE_ID');
            let Today = new Date().toISOString().split('T')[0]
            let articleL = JSON.stringify(articleList.articles)
            connection.changeUser({database : 'dszrccqg_system'}, () => {});
            let sql = `INSERT INTO 08_vente_en_gros_article_suivie_stock (PID, BE_ID,BE_Date,Fournisseur,Genre,Articles) 
                       VALUES ('${PID}','${BE_ID}','${Today}','${articleList.fournisseur}','${articleList.genre}','${articleL}')`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json({BE_ID:BE_ID});
            })
      })()     
    })

    /* Select Bon ES  */
    PtVenteGros.post('/stock/bebs/select', (req, res) => {
            let PID = req.body.PID  
            let bonId = req.body.bonId; 
            let sql = `SELECT * FROM 08_vente_en_gros_article_suivie_stock WHERE BE_ID = ${bonId} AND PID = '${PID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })   
    })

/*####################################[CAMION]#####################################*/

      /* featch tou les camion*/
      PtVenteGros.post('/camions', (req, res) => {
            let PID = req.body.PID;
            let Today = new Date().toISOString().split('T')[0]
            function FetchAllCamion() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT * FROM 08_vente_en_gros_camion WHERE  PID = '${PID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }
            function CalculateRecette(camId) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT SUM(Tota) AS RCT FROM 08_vente_en_gros_camion_facture WHERE Camion = ${camId} AND Cre_Date = '${Today}'  AND PID = '${PID}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      if (rows[0].RCT == null) {resolve('0.000');} else {resolve(rows[0].RCT.toFixed(3));}
                      
                  })
                });
            }
            function CalculateFond(camId) {
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

      /* selectioner un camion */
      PtVenteGros.post('/camions/info', (req, res) => {
            let PID = req.body.PID;
            let camionID = req.body.camId;
            let Today = new Date().toISOString().split('T')[0]
            function FetchAllCamionData() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT * FROM 08_vente_en_gros_camion WHERE Cam_ID = ${camionID}`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }
            function CalculateRecette() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT SUM(Tota) AS RCT
                            FROM 08_vente_en_gros_camion_facture WHERE Camion = ${camionID} AND Cre_Date = '${Today}'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      if (!rows[0].RCT) {resolve('0.000');} else {resolve(rows[0].RCT.toFixed(3));}
                  })
                });
            }
            function CalculateFond() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT SUM(08_vente_en_gros_camion_stock.Qte * (08_vente_en_gros_articles.Prix_vente / 08_vente_en_gros_articles.Groupage)) AS FND
                            FROM 08_vente_en_gros_camion_stock 
                            INNER JOIN 08_vente_en_gros_articles ON 08_vente_en_gros_camion_stock.Article = 08_vente_en_gros_articles.A_Code
                            WHERE 08_vente_en_gros_camion_stock.Camion = ${camionID}`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      if (rows[0].FND == null) {resolve('0.000');} else {resolve(rows[0].FND.toFixed(3));}
                  })
                });
            }
            function FindPosition() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT *
                            FROM 08_vente_en_gros_camion_position WHERE Camion_ID = ${camionID} ORDER BY jour ASC LIMIT 1 `;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                     if (rows[0] == null) {resolve({lat:36.17720, lng: 9.12337});} else {resolve(rows[0]);}
                  })
                });
            }
            function CamionFactures() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT *
                            FROM 08_vente_en_gros_camion_facture WHERE Camion = ${camionID} ORDER BY Cre_Date ASC LIMIT 100 `;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }
            function CamionStock() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT 08_vente_en_gros_camion_stock.Camion, 08_vente_en_gros_camion_stock.Article, 08_vente_en_gros_camion_stock.Qte ,08_vente_en_gros_articles.A_Code, 08_vente_en_gros_articles.Name, 08_vente_en_gros_articles.Genre, 08_vente_en_gros_articles.Prix_vente
                         FROM 08_vente_en_gros_camion_stock 
                         INNER JOIN 08_vente_en_gros_articles ON 08_vente_en_gros_camion_stock.Article  = 08_vente_en_gros_articles.A_Code
                         WHERE 08_vente_en_gros_camion_stock.Camion = ${camionID} `;

                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }
            function CamionFond() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_system'}, () => {});
                  let sql = `SELECT * FROM 08_vente_en_gros_camion_fond WHERE Camion = ${camionID} AND Genre = 'Fonds'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }

              // Call, Function
            async function query() {
                const camionList = [{}]  
                camionList[0].Data = await FetchAllCamionData();
                camionList[0].Recette = await CalculateRecette();
                camionList[0].Fond = await CalculateFond();
                camionList[0].Position = await FindPosition()
                camionList[0].Facture = await CamionFactures()
                camionList[0].Stock = await CamionStock()
                camionList[0].FondList = await CamionFond()
              res.send(camionList)
            }
            query();
                     
      })
      
      /*Ajouter Camion*/
      PtVenteGros.post('/camions/ajouter', (req, res) => {
          (async() => {
              let PID = req.body.PID
              let camionData = req.body.camionD
              let Cam_ID =   await GenerateID(1111111111,`08_vente_en_gros_camion`,'Cam_ID');
              let sql = `INSERT INTO 08_vente_en_gros_camion (PID, Cam_ID,Cam_Name, Matricule, Detail, Chauffeur,Pasword,Identifiant) 
                        VALUES (${PID} ,${Cam_ID},'${camionData.Cam_Name}','${camionData.Matricule}','${camionData.Marque}','${camionData.Chauffeur}','${camionData.Password}','${camionData.Identifiant}') `;
               connection.query(sql, (err, rows, fields) => {
                if (err){res.json(err)}
                  res.json(rows);
              })  
        })()             
      })

      /* modifier un camion */
      PtVenteGros.post('/camions/modifier', (req, res) => {
            let PID = req.body.PID
            let camionData = req.body.camionD
            let sql = `UPDATE 08_vente_en_gros_camion
                      SET Cam_Name = '${camionData.Cam_Name}' , Matricule = '${camionData.Matricule}' , Detail = '${camionData.Detail}' , Chauffeur = '${camionData.Chauffeur}' ,Pasword = '${camionData.Pasword}' ,Identifiant = '${camionData.Identifiant}' 
                      WHERE Cam_ID = '${camionData.Cam_ID}' `;
             connection.query(sql, (err, rows, fields) => {
              if (err){res.json(err)}
                res.json(rows);
            })          
      })

      /* supprimer un camion */

      /* ##### CAMION INFO  ##### */

      /*Info Article */
      PtVenteGros.post('/camions/info/article', (req, res) => {
            let PID = req.body.PID;
            let camionID = req.body.camId;
            let article = req.body.article;
            let Today = new Date().toISOString().split('T')[0]
            
            function GetLastInventaire() {
                return new Promise((resolve, reject) => {
                  let sql = `SELECT * FROM 08_vente_en_gros_camion_fond WHERE Camion = ${camionID} AND Articles LIKE '%${article}%' AND Genre = 'Inventaire' ORDER BY Jour DESC LIMIT 1`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      if (!rows[0]) {resolve([{PK: 0 , Articles:'[{}]' , Jour: null}]);} else {resolve(rows);}
                  })
                });
            }
            function GetArticleData() {
                return new Promise((resolve, reject) => {
                  let sql = `SELECT  08_vente_en_gros_camion_stock.Qte, 08_vente_en_gros_articles.*
                       FROM 08_vente_en_gros_camion_stock
                       LEFT JOIN 08_vente_en_gros_articles ON 08_vente_en_gros_camion_stock.Article = 08_vente_en_gros_articles.A_Code
                       WHERE 08_vente_en_gros_camion_stock.Camion = ${camionID} AND 08_vente_en_gros_camion_stock.Article = ${article}`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows)
                  })
                });
            }
            function FetchArticleFromFond(date,last) {
                return new Promise((resolve, reject) => {
                  let sql = `SELECT * FROM 08_vente_en_gros_camion_fond WHERE Camion = ${camionID} AND Genre = 'Fonds' AND PK > ${last} AND Jour >= '${date}' AND Articles LIKE '%${article}%'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows)
                  })
                });
            }
            function FetchArticleInFacture(date) {
                return new Promise((resolve, reject) => {
                  let sql = `SELECT * FROM 08_vente_en_gros_camion_facture WHERE Camion = ${camionID} AND Cre_Date  >= '${date}' AND Articles LIKE '%${article}%'`;
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows)
                  })
                });
            }
            function FetchSuivieArticle(date) {
                return new Promise((resolve, reject) => {
                  let sql = `SELECT * FROM 08_vente_en_gros_camion_stock_fixed WHERE Camion = ${camionID} AND Jour >= '${date}' AND Articles LIKE '%${article}%'`;

                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }
            function GenerateDate(str, days) {
              var myDate = new Date(str);
                myDate.setDate(myDate.getDate() + parseInt(days));
                return myDate.toISOString().split('T')[0];
            }

              // Call, Function
            async function query() {
                const camionArtData = [{}];
                const LastInv = await GetLastInventaire();  
                const LastInvDate = GenerateDate(LastInv[0].Jour, 1) 
                camionArtData[0].LastInv = await GetLastInventaire(); 
                camionArtData[0].ArtData = await GetArticleData(); 
                camionArtData[0].InFact = await FetchArticleInFacture(LastInvDate); 
                camionArtData[0].InFond = await FetchArticleFromFond(LastInvDate, LastInv[0].PK)
                camionArtData[0].FromSuivie = await FetchSuivieArticle(LastInvDate)
                res.send(camionArtData[0])
            }
            query();
                
      })

      /* Info Fond */
      PtVenteGros.post('/camion/fond', (req, res) => {
             let PID = req.body.PID
             let BonID = req.body.fondID
             let sql = `SELECT * FROM  08_vente_en_gros_camion_fond WHERE Bon_id = ${BonID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })

      /* Info Facture */
      PtVenteGros.post('/camion/facture', (req, res) => {
             let PID = req.body.PID
             let FID = req.body.fid
             let sql = `SELECT * FROM  08_vente_en_gros_camion_facture WHERE F_ID = ${FID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })

      /* Info Facture */
      PtVenteGros.post('/camion/facture/info', (req, res) => {
             let PID = req.body.PID
             let FID = req.body.fid
             let sql = `SELECT * FROM  08_vente_en_gros_camion_facture WHERE F_ID = ${FID}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })

      /* ##### CAMION CONTROL &  IMPRIMER   ##### */


      /*CAMION INFO PAGE FUNCTION*/
      // select stock a zero 
      PtVenteGros.post('/camion/info/ztockzero', (req, res) => {
             let PID = req.body.PID
             let camId = req.body.camId
             let sql = `SELECT * FROM  08_vente_en_gros_camion_stock WHERE Camion = ${camId} AND Qte = 0`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })

      // delete stock zero 
      PtVenteGros.post('/camion/info/ztockzero/delete', (req, res) => {
             let PID = req.body.PID
             let camId = req.body.camId
             let sql = `DELETE FROM  08_vente_en_gros_camion_stock WHERE Camion = ${camId} AND Qte = 0 `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })

      // select vente d'un jour: ou bine entre deux periode  
      PtVenteGros.post('/camion/info/ventes', (req, res) => {
             let PID = req.body.PID
             let camId = req.body.camId
             let start = req.body.start
             let end = req.body.end
             let sql = `SELECT * FROM  08_vente_en_gros_camion_facture WHERE Camion = ${camId} AND Cre_Date >= '${start}' AND Cre_Date < '${end}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })

      // select fond  entre deux periode  
      PtVenteGros.post('/camion/info/fonds', (req, res) => {
             let PID = req.body.PID
             let camId = req.body.camId
             let start = req.body.start
             let end = req.body.end
             let sql = `SELECT * FROM  08_vente_en_gros_camion_fond WHERE Camion = ${camId} AND Jour >= ${start} AND Jour < ${end}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })

      /*PRINTING*/ 
      //stock et stock zero
      PtVenteGros.post('/camion/info/printing/stock', (req, res) => {
             let PID = req.body.PID
             let camId = req.body.camId
             let genre = req.body.genre
             let sql = `SELECT 08_vente_en_gros_camion_stock.Camion, 08_vente_en_gros_camion_stock.Article, 08_vente_en_gros_camion_stock.Qte ,08_vente_en_gros_articles.A_Code, 08_vente_en_gros_articles.Name, 08_vente_en_gros_articles.Genre,08_vente_en_gros_articles.Groupage, 08_vente_en_gros_articles.Prix_vente
                         FROM 08_vente_en_gros_camion_stock 
                         INNER JOIN 08_vente_en_gros_articles ON 08_vente_en_gros_camion_stock.Article  = 08_vente_en_gros_articles.A_Code
                         WHERE 08_vente_en_gros_camion_stock.Camion = ${camId} AND 08_vente_en_gros_camion_stock.Qte ${genre} 0`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })

      //article vendu du jour 
      PtVenteGros.post('/camion/info/printing/venteArticle', (req, res) => {
           let PID = req.body.PID
             let camId = req.body.camId
             let today =  req.body.date
             let sql = `SELECT Articles  FROM 08_vente_en_gros_camion_facture  WHERE Camion = ${camId} AND Cre_Date = '${today}' `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              let rended = []
              for (var i = 0; i < rows.length; i++) {
                let item = JSON.parse(rows[i].Articles);
                for (var k = 0; k < item.length; k++) {
                  rended.push(item[k])
                }
              }
              var result = [];
              rended.reduce(function(res, value) {
                if (!res[value.A_Code]) {
                  res[value.A_Code] = { A_Code: value.A_Code, Name: value.Name, Qte: 0 };
                  result.push(res[value.A_Code])
                }
                res[value.A_Code].Qte += parseInt(value.Qte);
                return res;
              }, {});

                  res.json(result);
                }) 
      })

      //facture du jour 
      PtVenteGros.post('/camion/info/printing/venteFacture', (req, res) => {
             let PID = req.body.PID
             let camId = req.body.camId
             let today = req.body.date
             let sql = `SELECT *  FROM 08_vente_en_gros_camion_facture  WHERE Camion = ${camId} AND Cre_Date = '${today}' `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })

      //facture du jour 
      PtVenteGros.post('/camion/info/printing/venteRecette', (req, res) => {
             let PID = req.body.PID
             let camId = req.body.camId
             let start = req.body.start
             let end = req.body.end
             let sql = `SELECT Cre_Date,SUM(Tota) as Totale FROM 08_vente_en_gros_camion_facture WHERE Cre_Date >= '${start}' AND Cre_Date < '${end}' AND Camion = ${camId} GROUP BY Cre_Date ORDER BY Cre_Date ;`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })

      //facture du jour 
      PtVenteGros.post('/camion/info/printing/fondResumer', (req, res) => {
             let PID = req.body.PID
             let camId = req.body.camId
             let start = req.body.start
             let end = req.body.end
             let sql = `SELECT Jour,SUM(Totale) as Totale FROM 08_vente_en_gros_camion_fond WHERE Jour >= '${start}' AND Jour < '${end}' AND Camion = ${camId} GROUP BY Jour ORDER BY Jour ;`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })


      /* ##### CAMION AJOUTER FONDS  ##### */

      /* ajouter fond aux camion*/
      PtVenteGros.post('/camion/ajouterf', (req, res) => {
        (async() => {
               let PID = req.body.PID
               let fondData = req.body.fondD
               let BonID =  await GenerateID(1111111111,`08_vente_en_gros_camion_fond`,'Bon_id');
               let fiexedTotal = parseFloat(fondData.totale).toFixed(3);
               let articleL = JSON.stringify(fondData.articles)
               let sql = `INSERT INTO 08_vente_en_gros_camion_fond (Bon_id,Camion,Totale,Jour,SCF,SDF,Articles,Genre) 
                         VALUES ('${BonID}','${fondData.camion}','${fiexedTotal}','${fondData.jour}','false','false','${articleL}','${fondData.Genre}')`;
               connection.query(sql, (err, rows, fields) => {
                if (err){ throw err}
                res.json({BonID:BonID});
              }) 
        })()      
      })

      //SELECIONNER ARTICLE LIST
      PtVenteGros.post('/camion/ajouterf/stock', (req, res) => {
            let PID = req.body.PID
            let CamID = req.body.camId
            let sql = `SELECT 08_vente_en_gros_articles.*, 08_vente_en_gros_camion_stock.Qte 
                  FROM 08_vente_en_gros_articles 
                  LEFT OUTER JOIN (SELECT * FROM 08_vente_en_gros_camion_stock WHERE Camion = ${CamID}) 08_vente_en_gros_camion_stock 
                  ON 08_vente_en_gros_articles.A_Code = 08_vente_en_gros_camion_stock.Article AND COALESCE(08_vente_en_gros_camion_stock.Qte ) IS NOT NULL;`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

      //Modifier Le Stock Du camion [ VERY IMPORTANT]
      PtVenteGros.post('/camion/stock/update', (req, res) => {
            let PID = req.body.PID  
            let CAMION = req.body.camion  
            let articleList = req.body.artList; //[['6191513501017','6191513501017','5'],['6191513502212','6191513501017','12']]; // req.body.artList
            let sqlTexts = []

            for (let i = 0; i < articleList.length; i++) {
              item = (`(${articleList[i][0]},${articleList[i][1]},${CAMION},${articleList[i][2]} )`);  
              sqlTexts.push(item)
           }
           let LastToSQL = sqlTexts.join(",");
            let sql = `INSERT INTO 08_vente_en_gros_camion_stock (Ultra_Unique, Article, Camion, Qte) VALUES ${LastToSQL} ON DUPLICATE KEY UPDATE Qte = Qte +  VALUES (Qte);`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ res.json(err)}
                res.json(rows);
              }) 
       
             //res.json(sql);
      })

      // Update Stock  (us) State == true 
      PtVenteGros.post('/camion/fond/us', (req, res) => {
             let PID = req.body.PID
             let BonID = req.body.bonId
             let State = req.body.state
             let sql = `UPDATE 08_vente_en_gros_camion_fond
                    SET ${State} = 'true'
                    WHERE Bon_id = '${BonID}' `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })         
      })

      /* ajouter fond aux camion*/
      PtVenteGros.post('/camion/fond/modifier', (req, res) => {
             let PID = req.body.PID
             let fondData = req.body.editFondD
             let BonID =  fondData.Bon_id
             let fiexedTotal = parseFloat(fondData.totale).toFixed(3);
             let articleL = JSON.stringify(fondData.articles)
             let sql = `UPDATE 08_vente_en_gros_camion_fond
                  SET Totale = '${fiexedTotal}', Jour = '${fondData.jour}' , Articles = '${articleL}'
                      WHERE Bon_id = '${BonID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json({BonID:BonID});
            })     
      })


      /* ##### CAMION INVENTAIRE  ##### */

      /* Inventaire camion*/
      PtVenteGros.post('/camion/inventaire', (req, res) => {
            let PID = req.body.PID  
            let camion = req.body.camion  
            let articleList = req.body.artList; //[['6191513501017','5'],['6191513502212','5']]; //req.body.artList
            let sqlText = ''
            for (let i = 0; i < articleList.length; i++) {
              sqlText = sqlText.concat(" ", `WHEN ${articleList[i][0]} THEN  ${articleList[i][2]} `);    
             }
              let sql = `UPDATE 08_vente_en_gros_camion_stock
                  SET Qte = CASE Ultra_Unique 
                                  ${sqlText}
                    ELSE Qte
                    END`;
               connection.query(sql, (err, rows, fields) => {
                if (err){ res.json(err)}
                  res.json(rows);
                })       
      })

      //Selectioner les article dans camion 
      PtVenteGros.post('/camion/inventaire/stock', (req, res) => {
             let PID = req.body.PID
             let camId = req.body.camId
             let sql = `SELECT 08_vente_en_gros_camion_stock.Qte AS Qte, 08_vente_en_gros_articles.*  
                    FROM  08_vente_en_gros_camion_stock 
                    LEFT JOIN 08_vente_en_gros_articles 
                    ON 08_vente_en_gros_articles.A_Code = 08_vente_en_gros_camion_stock.Article
                    WHERE 08_vente_en_gros_camion_stock.Camion = ${camId}`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
              
            })       
      })

/*####################################[FACTURES]###################################*/

    /* selectionner tous les factures */
    PtVenteGros.post('/facture', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT *  FROM 08_vente_en_gros_factures 
                     LEFT JOIN 08_vente_en_gros_clients ON 08_vente_en_gros_factures.C_Name = 08_vente_en_gros_clients.CL_ID 
                     LEFT JOIN 08_vente_en_gros_camion ON 08_vente_en_gros_factures.Fournisseurs = 08_vente_en_gros_camion.Cam_ID 
                     WHERE 08_vente_en_gros_factures.PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}

            res.json(rows);
          })
              
    })

    /* selectionner tous les factures */
    PtVenteGros.post('/facture/resumer', (req, res) => {
           let PID = req.body.PID
           let date = req.body.targetDate
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT *  FROM 08_vente_en_gros_factures 
                     LEFT JOIN 08_vente_en_gros_clients ON 08_vente_en_gros_factures.C_Name = 08_vente_en_gros_clients.CL_ID  
                     WHERE 08_vente_en_gros_factures.Cre_Date >= '${date.start}' AND 08_vente_en_gros_factures.Cre_Date <= '${date.end}' AND 08_vente_en_gros_factures.PID = '${PID}'`;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })        
      })

    /* selectioner un facture et ses articles */
    PtVenteGros.post('/facture/select', (req, res) => {
           let PID = req.body.PID
           let FID = req.body.fid
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `SELECT 08_vente_en_gros_factures.* , 08_vente_en_gros_clients.*,  08_vente_en_gros_camion.Cam_ID, 08_vente_en_gros_camion.Cam_Name, 08_vente_en_gros_camion.Matricule 
                      FROM 08_vente_en_gros_factures
                      LEFT JOIN 08_vente_en_gros_clients ON 08_vente_en_gros_factures.C_Name = 08_vente_en_gros_clients.CL_ID 
                      LEFT JOIN 08_vente_en_gros_camion ON 08_vente_en_gros_factures.Fournisseurs = 08_vente_en_gros_camion.Cam_ID
                      WHERE 08_vente_en_gros_factures.F_ID = ${FID} AND 08_vente_en_gros_factures.PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.send(rows);
          })         
    })

    /* enregistrer un factures */
    PtVenteGros.post('/facture/ajouter', (req, res) => {
        (async() => {
           let PID = req.body.PID
           let factId = req.body.factD
           let FID = await GenerateID(1111111111,`08_vente_en_gros_factures`,'F_ID');
           let articleL = JSON.stringify(factId.articles)
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `INSERT INTO 08_vente_en_gros_factures (PID, F_ID,Cre_Date,C_Name,Tota,De,Vers,Chauffeur,Fournisseurs,SDF,Articles) 
                     VALUES ('${PID}','${FID}','${factId.jour}','${factId.client}','${factId.totale}','${factId.de}','${factId.vers}','null','null','false','${articleL}')`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json({FID:FID});
          }) 
        })()        
    })

    /* Update Stock  (us) State == true  */
    PtVenteGros.post('/facture/us', (req, res) => {
           let PID = req.body.PID
           let FID = req.body.fid
           let sql = `UPDATE 08_vente_en_gros_factures
                      SET SDF = 'true'
                     WHERE F_ID = ${FID} AND PID = ${PID} `;
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })         
    })

    /* modifier un facture */
    PtVenteGros.post('/facture/modifier', (req, res) => {
           let PID = req.body.PID
           let factId = req.body.factD
           let FID = req.body.fid
           let articleL = JSON.stringify(factId.articles)
           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           let sql = `UPDATE 08_vente_en_gros_factures
                      SET Cre_Date = '${factId.jour}', C_Name = '${factId.client}', Tota = '${factId.totale}', De = '${factId.de}', Vers ='${factId.vers}' , Chauffeur ='${factId.Chauffeur}' ,Fournisseurs ='${factId.Fournisseurs}', Articles = '${articleL}'
                      WHERE F_ID = '${FID}' AND PID = ${PID}`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json({FID:FID});
          })         
    })

    /*Selectionner Vente */
    PtVenteGros.post('/facture/vente', (req, res) => {
           let PID = req.body.PID
           let sql = `SELECT Articles  FROM 08_vente_en_gros_camion_facture  WHERE 1`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            let rended = []
            for (var i = 0; i < rows.length; i++) {
              let item = JSON.parse(rows[i].Articles);
              for (var k = 0; k < item.length; k++) {
                rended.push(item[k])
              }
            }
            var result = [];
            rended.reduce(function(res, value) {
              if (!res[value.A_Code]) {
                res[value.A_Code] = { A_Code: value.A_Code, Name: value.Name, Qte: 0 };
                result.push(res[value.A_Code])
              }
              res[value.A_Code].Qte += parseInt(value.Qte);
              return res;
            }, {});

                res.json(result);
              })
              
    })

/*####################################[CLIENT]#####################################*/

    /* selectioner tous les client */
    PtVenteGros.post('/client', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT *  FROM 08_vente_en_gros_clients  WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /* selectioner tous les Position client
    PtVenteGros.post('/client/position', (req, res) => {
        let Gouv = req.body.gouv;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 08_vente_en_gros_clients WHERE Gouv = '${Gouv}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    }) */

    /* selectioner un client */
    PtVenteGros.post('/client/info', (req, res) => {
          let PID = req.body.PID;
          let clientID = req.body.clientId
          function FetchClientData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 08_vente_en_gros_clients WHERE CL_ID = ${clientID}`;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    //resolve(rows);
                    if (!rows[0]) {resolve([{ Name:null , }]);} else {resolve(rows);}
                })
              });
          }
          // function SelectCommandes(Name) {
          //     return new Promise((resolve, reject) => {
          //       let sql = `SELECT * FROM system_commande WHERE Client = '${Name}' AND State = 'W'`;
          //        connection.query(sql, (err, rows, fields) => {
          //           if (err) return reject(err);
          //           resolve(rows);
          //       })
          //     });
          // }
          // function SelectFactureCamion(Name) {
          //     return new Promise((resolve, reject) => {
          //       let sql = `SELECT * FROM 08_vente_en_gros_camion_facture WHERE C_Name = '${Name}' `;
          //        connection.query(sql, (err, rows, fields) => {
          //           if (err) return reject(err);
          //           resolve(rows);
          //       })
          //     });
          // }
          // function SelectFactures(Name) {
          //     return new Promise((resolve, reject) => {
          //       let sql = `SELECT * FROM 08_vente_en_gros_camion_facture WHERE C_Name = '${Name}' `;
          //        connection.query(sql, (err, rows, fields) => {
          //           if (err) return reject(err);
          //           resolve(rows);
          //       })
          //     });
          // }


            // Call, Function
          async function query() {
              const camionList = await FetchClientData(); 
              //camionList[0].Commandes = await  SelectCommandes(camionList[0].Name)
              //camionList[0].FactureCamion = await SelectFactureCamion(camionList[0].Name)
              //camionList[0].Facture = await SelectFactures(camionList[0].Name)
            res.send(camionList)
          }
          query();               
    })

    /* Ajouter client */
    PtVenteGros.post('/client/ajouter', (req, res) => {
      (async() => {
        let PID = req.body.PID;
        let clientD = req.body.clientD
        let CID = await GenerateID(1111111111,'08_vente_en_gros_clients','CL_ID');
        let Today = new Date().toISOString().split('T')[0]
          let sql = `INSERT INTO 08_vente_en_gros_clients (CL_ID, PID,  Releted_PID,  Name, Cre_Date, Phone, Adress, Code_Fiscale, State, Gouv, Lng, Lat, Social_Name) 
                 VALUES (${CID}, ${PID},'${clientD.Releted_PID}','${clientD.Name}','${Today}','${clientD.Phone}','${clientD.Adress}','${clientD.Code_Fiscale}','null','${clientD.Gouv}','0','0','${clientD.Social_Name}');`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })
        })()      
    })

    //check article in abyedhDB */
    PtVenteGros.post('/client/checkAbyedhDb', (req, res) => {
          let UID = req.body.UID;
          connection.changeUser({database : 'dszrccqg_profile'}, () => {});
          let sql = `SELECT * FROM user_general_data WHERE UID = '${UID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows[0]);
          })
              
    })


    /* modifier un client */
    PtVenteGros.post('/client/modifier', (req, res) => {
        let PID = req.body.PID;
        let clientD = req.body.clientD
          let sql = `UPDATE 08_vente_en_gros_clients
                  SET Name = '${clientD.Name}',  Phone = '${clientD.Phone}' , Adress = '${clientD.Adress}' ,  Gouv = '${clientD.Gouv}' , Social_Name = '${clientD.Social_Name}'
                      WHERE CL_ID = ${clientD.CL_ID}`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })     
    })

    /* modifier Position client */
    PtVenteGros.post('/client/modifier/position', (req, res) => {
        let PID = req.body.PID;
        let clientD = req.body.clientD
          let sql = `UPDATE 08_vente_en_gros_clients
                  SET Lng = ${clientD.Lng}, Lat = ${clientD.Lat} 
                      WHERE CL_ID = ${clientD.CL_ID}`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })     
    })

    /* supprimer un client */


    /* map : liste des location */
    PtVenteGros.post('/client/fidelite', (req, res) => {
           let PID = req.body.PID;
           let genre = req.body.genre
           let start = req.body.start
           let finish = req.body.finish
           let top = req.body.Top
           let sql1 = `SELECT  08_vente_en_gros_factures.C_Name, SUM(Tota) as Totale, 08_vente_en_gros_factures.Cre_Date ,08_vente_en_gros_clients.Name
                      FROM 08_vente_en_gros_factures 
                      LEFT JOIN 08_vente_en_gros_clients ON 08_vente_en_gros_factures.C_Name = 08_vente_en_gros_clients.CL_ID
                      WHERE 08_vente_en_gros_factures.PID  = '${PID}' AND 08_vente_en_gros_factures.Cre_Date > '${start}' AND 08_vente_en_gros_factures.Cre_Date < '${finish}' 
                      GROUP BY 08_vente_en_gros_factures.C_Name ORDER BY SUM(Tota) DESC LIMIT ${top};`

           let sql2 = `SELECT COUNT(1) as Totale , 08_vente_en_gros_factures.C_Name ,08_vente_en_gros_clients.Name
                      FROM 08_vente_en_gros_factures  
                      LEFT JOIN 08_vente_en_gros_clients ON 08_vente_en_gros_factures.C_Name = 08_vente_en_gros_clients.CL_ID
                      WHERE 08_vente_en_gros_factures.PID  = '${PID}' AND 08_vente_en_gros_factures.Cre_Date > '${start}' AND 08_vente_en_gros_factures.Cre_Date < '${finish}'  
                      GROUP BY 08_vente_en_gros_factures.C_Name ORDER BY COUNT(1) DESC LIMIT ${top};`

           connection.changeUser({database : 'dszrccqg_system'}, () => {});
           connection.query(genre == 'Totale' ? sql1 : sql2 , (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /* ajouter une localtion */
    PtVenteGros.post('/client/map/ajouter', (req, res) => {
       let PID = req.body.PID;
       let regionD = req.body.regionD
          let sql = `INSERT INTO 08_vente_en_gros_clients_map(Gouv, Localisation, PID) 
                VALUES ('${regionD.Gouv}','${regionD.Localisation}','${PID}')`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /* modifier une location */
    PtVenteGros.post('/client/map/modifier', (req, res) => {
       let PID = req.body.PID;
       let editRegionD = req.body.editRegionD
          let sql = `UPDATE 08_vente_en_gros_clients_map 
                SET Gouv= '${editRegionD.Gouv}' , Localisation= '${editRegionD.Localisation}'
                WHERE PK= ${editRegionD.PK}`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

/*####################################[TEAM]#####################################*/

    /* selectioner tous l'equipe */
    PtVenteGros.post('/team', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT *  FROM 08_vente_en_gros_team WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.send(rows);
          })         
    })
    /* Ajouter client */
    PtVenteGros.post('/team/ajouter', (req, res) => {
      (async() => {
        let PID = req.body.PID;
        let teamD = req.body.teamD
        let CID = await GenerateID(1111111111,'08_vente_en_gros_team','T_ID');
        let Today = new Date().toISOString().split('T')[0]
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `INSERT INTO 08_vente_en_gros_team (PID, T_ID, Releted_UID, T_Name, T_CIN, T_Phone, T_Adress, Poste, State, Start_at, Finish_at)
                     VALUES (${PID},${CID},'${teamD.Releted_UID}','${teamD.Name}','${teamD.T_CIN}','${teamD.Phone}','${teamD.Adress}','${teamD.Poste}','null','${Today}','');`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })
        })()      
    })

    /* selectioner un client */
	  PtVenteGros.post('/team/info', (req, res) => {
		    let PID = req.body.PID;
		    let TID = req.body.Team_ID
		    function FetchTeamData() {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT * FROM 08_vente_en_gros_team WHERE T_ID = ${TID} AND PID = ${PID}`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          if (!rows[0]) {resolve([{ Name:null , }]);} else {resolve(rows);}
				      })
			      });
		    }
		    function SelectCommandes(Name) {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT * FROM system_commande WHERE Client = '${TID}' AND State = 'W'`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          resolve(rows);
				      })
			      });
		    }
		    function SelectFactureCamion(Name) {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT * FROM ${TAG}_camion_facture WHERE C_Name = '${TID}' `;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          resolve(rows);
				      })
			      });
		    }
		    function SelectFactures(Name) {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT * FROM ${TAG}_facture WHERE C_Name = '${TID}' `;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          resolve(rows);
				      })
			      });
		    }


	      	// Call, Function
		    async function query() {
		        const clientData = await FetchTeamData(); 
		      	//clientData[0].Commandes = await  SelectCommandes(clientData[0].Name)
		      	//clientData[0].FactureCamion = await SelectFactureCamion(clientData[0].Name)
		      	//clientData[0].Facture = await SelectFactures(clientData[0].Name)
		      res.send(clientData)
		    }
		    query();               
	  })

  	/* selectioner tous les client */
  	PtVenteGros.post('/team/poste', (req, res) => {
  		  let TAG = req.body.PID;
  		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
  	      let sql = `SELECT * FROM 08_vente_en_gros_team_poste WHERE PID = '${TAG}'`;
  	       connection.query(sql, (err, rows, fields) => {
  	        if (err){ throw err}
  	        res.json(rows);
  	      })
  	          
  	})

  	/*ajouter famille */
      PtVenteGros.post('/team/poste/ajouter', (req, res) => {
          let PID = req.body.PID
          let posteD = req.body.posteD
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `INSERT INTO 08_vente_en_gros_team_poste (PID, Poste ,Description,Salaire,Experience_Target) 
                     VALUES ('${PID}', '${posteD.Poste}','${posteD.Description}','${posteD.Salaire}','${posteD.Description}')`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
            res.json(rows);
          })
              
      })

      /* modifier famille */
      PtVenteGros.post('/team/poste/modifier', (req, res) => {
          let PID = req.body.PID
          let posteD = req.body.posteD
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 08_vente_en_gros_team_poste 
                     SET Genre = '${posteD.Name}' , Description =  '${posteD.Description}'
                     WHERE PK = ${posteD.PK} AND PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
            res.json(rows);
          })
              
      })


/*####################################[FOURNISSEUR]###############################*/

    /* selectioner tous les client */
    PtVenteGros.post('/fournisseur', (req, res) => {
          let PID = req.body.PID
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `SELECT * FROM 08_vente_en_gros_fournisseur WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })          
    })

    /* selectioner un client */
    PtVenteGros.post('/fournisseur/info', (req, res) => {
          let PID = req.body.PID;
          let fourId = req.body.fourId
          function FetchClientData() {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 08_vente_en_gros_fournisseur WHERE Four_ID = ${fourId}`;
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
                let sql = `SELECT * FROM 08_vente_en_gros_camion_facture WHERE C_Name = '${fourId}' `;
                 connection.query(sql, (err, rows, fields) => {
                    if (err) return reject(err);
                    resolve(rows);
                })
              });
          }
          function SelectFactures(Name) {
              return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 08_vente_en_gros_camion_facture WHERE C_Name = '${fourId}' `;
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
    PtVenteGros.post('/fournisseur/ajouter', (req, res) => {
      (async() => {
        let PID = req.body.PID;
        let frsD = req.body.fournisseurData
        let CID = await GenerateID(1111111111,'08_vente_en_gros_fournisseur','Four_ID');
        let Today = new Date().toISOString().split('T')[0]
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
        let sql = `INSERT INTO 08_vente_en_gros_fournisseur (PID, Releted_PID, Four_ID, Four_Code_Fiscale, Four_Name, Four_Phone, Articles_Genre, Four_Gouv, Four_Deleg, Four_Adress, Jour_Periodique, Four_State, Four_Lng, Four_Lat)
                   VALUES (${PID},'${frsD.Releted_PID}', ${CID},'${frsD.Code_Fiscale}','${frsD.Name}','${frsD.Phone}', '', '${frsD.Gouv}','${frsD.Deleg}','${frsD.Adress}','Lundi','','0','0');`;
            connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
             res.json(rows);
            })
        })()      
    })

    //check article in abyedhDB */
    PtVenteGros.post('/fournisseur/checkAbyedhDb', (req, res) => {
          let PID = req.body.PID;
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `SELECT * FROM 08_vente_en_gros WHERE PID = '${PID}'`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows[0]);
          })
              
    })

    /* modifier un client */
    PtVenteGros.post('/fournisseur/modifier', (req, res) => {
        let PID = req.body.PID;
        let frsD = req.body.fournisseurData
        connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 08_vente_en_gros_clients
                  SET Name = '${frsD.Name}',  Phone = '${frsD.Phone}' , Adress = '${frsD.Adress}' ,  Gouv = '${frsD.Gouv}' , Deleg = '${frsD.Deleg}' , Social_Name = '${frsD.Social_Name}'
                      WHERE CL_ID = ${frsD.CL_ID}`;
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
  PtVenteGros.post('/profile', (req, res) => {
          let PID = req.body.PID;
          let Today = new Date().toISOString().split('T')[0]
          function GetGeneralData() {
            return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                    let sql = `SELECT * FROM 08_vente_en_gros WHERE PID = ${PID}`;
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

  PtVenteGros.post('/profile/print', (req, res) => {
        let PID = req.body.PID;
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `SELECT * FROM 08_vente_en_gros WHERE PID = ${PID}`;
         connection.query(sql, (err, rows, fields) => {
          if (err){ res.json(err)}
          res.json(rows);
        })
  })

  /* modifier Images */
  PtVenteGros.post('/profile/images/ajouter', upload.single("ProfileImage"), (req, res) => {
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
  })


  /* Modifier Profle Data  */
  PtVenteGros.post('/profile/update/general', (req, res) => {
        let PID = req.body.PID
        let profileD = req.body.profileDataSent
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `UPDATE 08_vente_en_gros
                   SET Genre = '${profileD.Genre}', Gouv = '${profileD.Gouv}' ,  Deleg = '${profileD.Deleg}' ,  Phone = '${profileD.Phone}' , Matricule_F  = '${profileD.Matricule_F}', Name = '${profileD.Name}' , Localite = '${profileD.Adress}' ,  Adress = '${profileD.Adress}' 
                   WHERE  PID = '${PID}' `;
         connection.query(sql, (err, rows, fields) => {
          if (err){res.json(err)}
            res.json(rows);
          })         
  })

  /* Modifier Password   */
  PtVenteGros.post('/profile/update/password', (req, res) => {
          let PID = req.body.PID
          let passwordD = req.body.passwordDataSent
          connection.changeUser({database : 'dszrccqg_registration'}, () => {});
          let sql = `UPDATE system_login
                     SET Identification = '${passwordD.Identification}', PasswordSalt = '${passwordD.PasswordSalt}'
                     WHERE PID = '${PID}' AND SystemKey = 'PTVGros' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* Modifier Horaire   */
  PtVenteGros.post('/profile/update/position', (req, res) => {
          let PID = req.body.PID
          let positionD = req.body.positionDataSent
          connection.changeUser({database : 'dszrccqg_directory'}, () => {});
          let sql = `UPDATE 08_vente_en_gros
                     SET Lat = '${positionD[0]}', Lng = '${positionD[1]}' 
                     WHERE  PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

  /* Modifier Images   */
  /* Repler Comment   */
  /* Modifier Tarife  */

/*&&&&&&&&&&&&&&&&&[SETTING]&&&&&&&&&&&&&&&&&*/

  PtVenteGros.post('/parametre', (req, res) => {
          let PID = req.body.PID;
          let Today = new Date().toISOString().split('T')[0]
          function GetConfirmation() {
            return new Promise((resolve, reject) => {
                    connection.changeUser({database : 'dszrccqg_directory'}, () => {});
                    let sql = `SELECT * FROM 08_vente_en_gros WHERE PID = ${PID}`;
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
                    let sql = `SELECT * FROM  08_vente_en_gros_setting WHERE PID = '${PID}';`;
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
  PtVenteGros.post('/parametre/update', (req, res) => {
          let PID = req.body.PID
          let settingD = req.body.settingDataSent
          let genre = req.body.genre
          connection.changeUser({database : 'dszrccqg_system'}, () => {});
          let sql = `UPDATE 08_vente_en_gros_setting
                     SET ${genre} = '${settingD}' 
                     WHERE  PID = '${PID}' `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
            })         
  })

/*&&&&&&&&&&&&&&&&&[MESSAGES]&&&&&&&&&&&&&&&&*/

    //*selectionner message */
    PtVenteGros.post('/messages', (req, res) => {
           let PID = req.body.PID
           connection.changeUser({database : 'dszrccqg_communications'}, () => {});
           let sql = `SELECT *  FROM message_conversations  WHERE PID = '${PID}' ORDER BY StartedAt ASC`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    //*selectionner message */
    PtVenteGros.post('/message', (req, res) => {
           let PID = req.body.PID
           let MID = req.body.MID
           connection.changeUser({database : 'dszrccqg_communications'}, () => {});
           let sql = `SELECT *  FROM message_conversations  WHERE PID = '${PID}' ORDER BY Sent_Date ASC, Sent_Time ASC`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ throw err}
            res.json(rows);
          })
              
    })

    /* ajouter un messages */
    PtVenteGros.post('/message/ajouter', (req, res) => {
         let Today = new Date().toISOString().split('T')[0]
         let ToTime = new Date().toLocaleTimeString([],{ hourCycle: 'h23'})
           let PID = req.body.PID
           let MID  = Math.floor(Math.random() * 10000000000);
           let msgD = req.body.msgC; //JSON.stringify(req.body.msgC)
           connection.changeUser({database : 'dszrccqg_communications'}, () => {});
           let sql = `INSERT INTO system_messages(M_ID,Sender_Genre,Sender,SystemTag,Content,Sent_Date,Sent_Time)
                  VALUES(${MID},'SYSTEM','SYSTEM','${TAG}', '${msgD}' ,'${Today}','${ToTime}')`;
           connection.query(sql, (err, rows, fields) => {
            if (err){ res.json(err)}
            res.json(rows);
          })
              
    })

/*&&&&&&&&&&&&&&&&&[NOTIFICATION]&&&&&&&&&&&&*/

/* selectioner les notification recentte*/

/*&&&&&&&&&&&&&&&&&[Mettre A Jour]&&&&&&&&&&&&&&*/
    /* fetch main Tools */
    PtVenteGros.post('/update', (req, res) => {
         let PID = req.body.PID
         let Today = new Date().toISOString().split('T')[0]

          function FetchStock() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
              let sql = `SELECT * FROM 08_vente_en_gros_articles WHERE PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchStockFamille() {
            return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 08_vente_en_gros_articles_genre WHERE PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchFacture() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT *  FROM 08_vente_en_gros_factures 
                           LEFT JOIN 08_vente_en_gros_clients ON 08_vente_en_gros_factures.C_Name = 08_vente_en_gros_clients.CL_ID 
                           LEFT JOIN 08_vente_en_gros_camion ON 08_vente_en_gros_factures.Fournisseurs = 08_vente_en_gros_camion.Cam_ID 
                           WHERE 08_vente_en_gros_factures.PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchCommande() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM dszrccqg_communications.08_vente_en_gros_demande 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.08_vente_en_gros_demande.UID = dszrccqg_profile.user_general_data.UID 
                       WHERE  dszrccqg_communications.08_vente_en_gros_demande.PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchCamion() {
            return new Promise((resolve, reject) => {
              connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT * FROM 08_vente_en_gros_camion WHERE  PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }
          function FetchClient() {
            return new Promise((resolve, reject) => {
                connection.changeUser({database : 'dszrccqg_system'}, () => {});
                let sql = `SELECT *  FROM 08_vente_en_gros_clients  WHERE PID = '${PID}'`;
               connection.query(sql, (err, rows, fields) => {
                 if (err) return reject(err);
                 resolve(rows);
                })
              })
          }

          // Call, Function
          async function query() {
                  const updateData = [{}]; 
                updateData[0].commande = await FetchCommande()
                updateData[0].stock = await FetchStock()
                updateData[0].stockFamille = await FetchStockFamille()
                updateData[0].facture = await FetchFacture()
                updateData[0].camion = await FetchCamion()
                updateData[0].client = await FetchClient()
              res.send(updateData)
         }
          query();
    })

module.exports = PtVenteGros