const express = require('express')
const RestaurantCaisseRouter = express.Router()

const connection = require('../../connection.js')


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

/*####################################[LOGIN & LANDING ]###########################*/

	/*log in*/
	RestaurantCaisseRouter.post('/LogIn', (req, res) => {
		  const logInD = req.body.LoginData;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `SELECT * FROM 05_restaurant_caisses WHERE Identifiant = '${logInD.Log}' AND Password  = '${logInD.Pwd}'` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows[0])

		  }); 
	})

	RestaurantCaisseRouter.post('/main/position', (req, res) => {
		  	    let PID = req.body.forPID;
				let camId = req.body.camId;
				let position = JSON.stringify(req.body.position);
				let Today = new Date().toISOString().split('T')[0]
				let ToTime = new Date().toLocaleTimeString([],{ hourCycle: 'h23'})
				connection.changeUser({database : 'dszrccqg_system'}, () => {});
				let sql = `INSERT INTO 05_restaurant_caisses_position(Camion_ID,jour,heur,Position) VALUES ('${camId}','${Today}','${ToTime}','${position}') ON DUPLICATE KEY UPDATE jour = '${Today}',  heur = '${ToTime}' , Position = '${position}' ;`;
				connection.query(sql, (err, rows, fields) => {
					if (err) throw err
					res.json(rows);
				}); 
	})

/*####################################[CAISSE SIMPLE ]#############################*/

	/* selectioner mes articles */
	RestaurantCaisseRouter.post('/nv/stock', (req, res) => {
		  const PID = req.body.forPID;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `SELECT * FROM 05_restaurant_menu WHERE PID = '${PID}' ` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);

		  }); 
	})

	/* enregister une facture 
	RestaurantCaisseRouter.post('/nv/ajouter', (req, res) => {
		(async() => {
		  	    let PID = req.body.forPID;
				let factureD = req.body.factureD;
				let FID = await GenerateID(1111111111,`05_restaurant_factures`,'T_ID');
				let articleL = JSON.stringify(factureD.articles)
				let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
				connection.changeUser({database : 'dszrccqg_system'}, () => {});
				let sql = `INSERT INTO 05_restaurant_factures (PID,T_ID,Cre_Date,Camion,C_Name,Tota, Chauffeur,Articles) 
				         VALUES (${PID},'${FID}','${Today}','${factureD.Camion}','${factureD.client}','${factureD.totale}', 'null','${articleL}')`;
				connection.query(sql, (err, rows, fields) => {
				if (err) throw err
				res.json({FID:FID});
				}); 
		})() 
	}) */

	/* enregister une facture */ 
	RestaurantCaisseRouter.post('/nv/ajouter', (req, res) => {
		(async() => {
		  	    let PID = req.body.forPID;
				let factureD = req.body.factureD;
				let FID = await GenerateID(1111111111,`05_restaurant_factures`,'T_ID');
				let articleL = JSON.stringify(factureD.articles)
				let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
				let ToTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
				connection.changeUser({database : 'dszrccqg_system'}, () => {});
				let sql = `INSERT INTO 05_restaurant_factures (PID, T_ID,Caisse_ID,Final_Value,Espece, T_Date, T_Time,Client,State, Paye_Bons, Articles) 
					       VALUES (${PID},'${FID}','${factureD.Caisse}','${factureD.totale}','0','${Today}','${ToTime}', 'PASSAGER' ,'Waitting','','${articleL}')`;
				connection.query(sql, (err, rows, fields) => {
					if (err) throw err
					res.json({FID:FID});
					
				}); 
		})() 
	})

	/* modifier un facture */
	RestaurantCaisseRouter.post('/nv/payee/espece', (req, res) => {
		  let PID = req.body.forPID;
		  let espece = req.body.espece
		  let FID = req.body.fid;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `UPDATE 05_restaurant_factures
	       			 SET Espece = '${espece}', State = 'Payee'
	                 WHERE T_ID = '${FID}'` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json({FID:FID});
		  }); 
	})

	/* modifier un facture */
	RestaurantCaisseRouter.post('/nv/payee/bons', (req, res) => {
		  let PID = req.body.forPID;
		  let bonsL = JSON.stringify(req.body.bons)
		  let FID = req.body.fid;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `UPDATE 05_restaurant_factures
	       			 SET Paye_Bons = '${bonsL}', State = 'Payee'
	                 WHERE T_ID = '${FID}'` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json({FID:FID});
		  }); 
	})


	/* modifier un facture */
	RestaurantCaisseRouter.post('/nv/client/credit', (req, res) => {
		  let PID = req.body.forPID;
		  let clientId = req.body.clientId
		  let FID = req.body.fid;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `UPDATE 05_restaurant_factures
	       			 SET Client = '${clientId}', State = 'Credit'
	                 WHERE T_ID = '${FID}'` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json({FID:FID});
		  }); 
	})

	/* modifier un facture */
	RestaurantCaisseRouter.post('/nv/client/fidelite', (req, res) => {
		  let PID = req.body.forPID;
		  let clientId = req.body.clientId
		  let FID = req.body.fid;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `UPDATE 05_restaurant_factures
	       			 SET Client = '${clientId}' 
	                 WHERE T_ID = '${FID}'` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json({FID:FID});
		  }); 
	})

	/* modifier un facture */
	RestaurantCaisseRouter.post('/nv/openCaisse', (req, res) => {
		  let PID = req.body.forPID;
		  connection.changeUser({database : 'dszrccqg_directory'}, () => {});
		  let sql = `SELECT * FROM 05_restaurant WHERE PID = '${PID}'` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);
		  }); 
	})

/*####################################[MES FACT]###################################*/

	/* selctioner mes 05_restaurant_factures [in between] */
	RestaurantCaisseRouter.post('/mf', (req, res) => {
		  const TAG = req.body.tag;
		  const camId = req.body.camId;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `SELECT * 
		  			 FROM 05_restaurant_factures 
		  			 LEFT JOIN 05_restaurant_clients ON 05_restaurant_factures.C_Name = 05_restaurant_clients.CL_ID
		  			 WHERE 05_restaurant_factures.Camion = ${camId} ORDER BY 05_restaurant_factures.Cre_Date DESC LIMIT 50` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);

		  }); 
	})

	/* selectioner une 05_restaurant_factures */
	RestaurantCaisseRouter.post('/mf/select', (req, res) => {
		  const TAG = req.body.tag;
		  const camId = req.body.camId;
		  const FID = req.body.fid;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `SELECT *
		  			 FROM 05_restaurant_factures 
		  			 LEFT JOIN 05_restaurant_clients ON 05_restaurant_factures.C_Name = 05_restaurant_clients.CL_ID
		  			 WHERE 05_restaurant_factures.Camion =  ${camId}  AND 05_restaurant_factures.F_ID = ${FID} ` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);

		  }); 
	})

	/* modifier un facture */
	RestaurantCaisseRouter.post('/mf/modifier', (req, res) => {
		  let PID = req.body.forPID;
		  let factId = req.body.factD
		  let articleL = JSON.stringify(factId.articles)
		  let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
		  let FID = req.body.fid;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `UPDATE 05_restaurant_factures
	       			 SET C_Name = '${factId.client}', Tota = '${factId.totale}', Articles = '${articleL}'
	                 WHERE F_ID = '${FID}'` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json({FID:FID});
		  }); 
	})

/*####################################[STOCK]######################################*/
	/*Suivie un article */
	RestaurantCaisseRouter.post('/sk/suivie', (req, res) => {
		    let PID = req.body.forPID;
		    let camionID = req.body.camId;
		    let article = req.body.article;
		    let Today = new Date().toISOString().split('T')[0]
		    
		    function GetLastInventaire() {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT * FROM caises_fond WHERE Camion = ${camionID} AND Articles LIKE '%${article}%' AND Genre = 'Inventaire' ORDER BY Jour DESC LIMIT 1`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          if (!rows[0]) {resolve([{PK: 0 , Articles:'[{}]' , Jour: null}]);} else {resolve(rows);}
				      })
			      });
		    }
		    function GetArticleData() {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT  caises_stock.Qte, 08_vente_en_gros_articles.*
					  			 FROM caises_stock
					  			 LEFT JOIN 08_vente_en_gros_articles ON caises_stock.Article = 08_vente_en_gros_articles.A_Code
					  			 WHERE caises_stock.Camion = ${camionID} AND caises_stock.Article = ${article}`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          resolve(rows)
				      })
			      });
		    }
		    function FetchArticleFromFond(date,last) {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT * FROM caises_fond WHERE Camion = ${camionID} AND Genre = 'Fonds' AND PK > ${last} AND Jour >= '${date}' AND Articles LIKE '%${article}%'`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          resolve(rows)
				      })
			      });
		    }
		    function FetchArticleInFacture(date) {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT * FROM caises_facture 
			      			   LEFT JOIN 08_vente_en_gros_clients ON caises_facture.C_Name = 08_vente_en_gros_clients.CL_ID
			      			   WHERE caises_facture.Camion = ${camionID} AND caises_facture.Cre_Date  >= '${date}' AND caises_facture.Articles LIKE '%${article}%'`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          resolve(rows)
				      })
			      });
		    }
		    function FetchSuivieArticle(date) {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT * FROM caises_stock_fixed WHERE Camion = ${camionID} AND Jour >= '${date}' AND Articles LIKE '%${article}%'`;

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

	/*Selectionner Fonds */
	RestaurantCaisseRouter.post('/sk/fonds', (req, res) => {
		  const TAG = req.body.tag;
		  const camId = req.body.camId;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `SELECT * FROM caises_fond WHERE Camion = ${camId} AND Genre = 'Fonds' ORDER BY Jour DESC LIMIT 50` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);

		  }); 
	})

	/*Selectionner Fonds info*/
	RestaurantCaisseRouter.post('/sk/fonds/info', (req, res) => {
		  const TAG = req.body.tag;
		  const camId = req.body.camId;
		  const FID = req.body.fid;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `SELECT * FROM caises_fond WHERE Camion = ${camId} AND F_ID = ${FID}` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);

		  }); 
	})

	/*Regler Ventes*/
	RestaurantCaisseRouter.post('/sk/reglemment', (req, res) => {
		  let PID = req.body.forPID  
		  let camion = req.body.camId
	      let articleList = req.body.artList; 
	      let sqlText = ''
	      for (let i = 0; i < articleList.length; i++) {
			    sqlText = sqlText.concat(" ", `WHEN ${parseInt(articleList[i][0]) + parseInt(camion)} THEN Qte -  ${articleList[i][2]} `);    
		   }
	      connection.changeUser({database : 'dszrccqg_system'}, () => {});
	      let sql = `UPDATE caises_stock
				   	SET Qte = CASE Ultra_Unique 
			                      ${sqlText}
			       	ELSE Qte
			       	END`;
	       connection.query(sql, (err, rows, fields) => {
	        if (err){ res.json(err)}
	        	res.json(rows);
	      	})  
	})

	/*check if stock is fixed */
	RestaurantCaisseRouter.post('/sk/reglemment/check', (req, res) => {
		  let PID = req.body.forPID;
		  let camId = req.body.camId;
		  let Today = req.body.jour;
		  //let Today = new Date().toISOString().split('T')[0]
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `SELECT * FROM caises_stock_fixed WHERE Camion = '${camId}' AND  Jour = '${Today}'` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);

		  }); 
	})

	/*Regler Ventes*/
	RestaurantCaisseRouter.post('/sk/reglemment/enregistrer', (req, res) => {
		  	    let PID = req.body.forPID;
				let Camion = req.body.camId;
				let today = req.body.jour;
				//let today =  new Date().toISOString().split('T')[0]
				let articleL = JSON.stringify(req.body.artList)
				connection.changeUser({database : 'dszrccqg_system'}, () => {});
				let sql = `INSERT INTO caises_stock_fixed
				         (Camion,Jour,Articles) 
				         VALUES ('${Camion}','${today}','${articleL}')`;
				connection.query(sql, (err, rows, fields) => {
				if (err) throw err
				res.json({saved:true});

				}); 
	})

/*####################################[VENTES]#####################################*/
	/* selctioner mes vente auhoudhui */
	RestaurantCaisseRouter.post('/mv/resumer', (req, res) => {
				let PID = req.body.forPID
				let camId = req.body.camId
				let Today =  new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
				function FetchStock() {
				    return new Promise((resolve, reject) => {
				      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
				      	let sql = `SELECT  caises_stock.Qte, 08_vente_en_gros_articles.*
					  			 FROM caises_stock
					  			 LEFT JOIN 08_vente_en_gros_articles ON caises_stock.Article = 08_vente_en_gros_articles.A_Code
					  			 WHERE caises_stock.Camion = ${camId}`;
				       connection.query(sql, (err, rows, fields) => {
					       if (err) return reject(err);
					       resolve(rows);
				  		})
				  	})
				}

				function CheckReglemment() {
				    return new Promise((resolve, reject) => {
				      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
				      	let sql = `SELECT * FROM caises_stock_fixed WHERE Camion = '${camId}' AND  Jour = '${Today}'` ;
		 				 connection.query(sql, (err, rows, fields) => {
					       if (err) return reject(err);
					       resolve(rows);
				  		})
				  	})
				}

				function FetchVente() {
				    return new Promise((resolve, reject) => {
				      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
				      	let sql = `SELECT Articles  FROM caises_facture  WHERE Camion = ${camId} AND Cre_Date = '${Today}'`; 
				        connection.query(sql, (err, rows, fields) => {
					        if (err){ throw err}
					        let rended = []
					    	for (var i = 0; i < rows.length ; i++) {
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

					        resolve(result);
					   }) 
				  	})
				}
				// Call, Function
				async function query() {
				        const resumerData = [{}]; 
				  		resumerData[0].stock = await FetchStock()
				  		resumerData[0].vente = await FetchVente()
				  		resumerData[0].regler = await CheckReglemment()
				      res.send(resumerData)
				 }
				query();    
		       
	})

	/* selctioner mes vente auhoudhui */
	RestaurantCaisseRouter.post('/mv/resumer/jour', (req, res) => {
				let PID = req.body.forPID
				let camId = req.body.camId
				let Jour = req.body.jour
				let Today =  new Date(Jour).toISOString().split('T')[0]
				function FetchStock() {
				    return new Promise((resolve, reject) => {
				      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
				      	let sql = `SELECT  caises_stock.Qte, 08_vente_en_gros_articles.*
					  			 FROM caises_stock
					  			 LEFT JOIN 08_vente_en_gros_articles ON caises_stock.Article = 08_vente_en_gros_articles.A_Code
					  			 WHERE caises_stock.Camion = ${camId}`;
				       connection.query(sql, (err, rows, fields) => {
					       if (err) return reject(err);
					       resolve(rows);
				  		})
				  	})
				}

				function CheckReglemment() {
				    return new Promise((resolve, reject) => {
				      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
				      	let sql = `SELECT * FROM caises_stock_fixed WHERE Camion = '${camId}' AND  Jour = '${Today}'` ;
		 				 connection.query(sql, (err, rows, fields) => {
					       if (err) return reject(err);
					       resolve(rows);
				  		})
				  	})
				}

				function FetchVente() {
				    return new Promise((resolve, reject) => {
				      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
				      	let sql = `SELECT Articles  FROM caises_facture  WHERE Camion = ${camId} AND Cre_Date = '${Today}'`; // AND Cre_Date = '${Today}' 
				       connection.query(sql, (err, rows, fields) => {
				        if (err){ throw err}
				        let rended = []
				    	for (var i = 0; i < rows.length ; i++) {
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

				        resolve(result);
				   }) 
				  	})
				}
				// Call, Function
				async function query() {
				        const resumerData = [{}]; 
				  		resumerData[0].stock = await FetchStock()
				  		resumerData[0].vente = await FetchVente()
				  		resumerData[0].regler = await CheckReglemment()
				      res.send(resumerData)
				 }
				query();    
		       
	})

	/* selctioner mes vente auhoudhui */
	RestaurantCaisseRouter.post('/mv/article', (req, res) => {
		   let PID = req.body.forPID
	       let camId = req.body.camId
	       let article = req.body.code
	       let Today = new Date().toISOString().split('T')[0]
	       connection.changeUser({database : 'dszrccqg_system'}, () => {});
	       let sql = `SELECT *  FROM caises_facture  
	       			 LEFT JOIN 08_vente_en_gros_clients ON caises_facture.C_Name = 08_vente_en_gros_clients.CL_ID
	       			 WHERE caises_facture.Camion = '${camId}' AND caises_facture.Articles LIKE '%${article}%' AND caises_facture.Cre_Date = '${Today}'`; // AND Cre_Date = '${Today}'
	       connection.query(sql, (err, rows, fields) => {
		        if (err){ throw err}
		        res.json(rows);
	      }) 
	})

/*####################################[CLIENT]#####################################*/
	
	RestaurantCaisseRouter.post('/client/reglemment', async function(req, res, next) {
	  	    let PID = req.body.forPID;
			let clientId = req.body.clientId;
			let R_ID = await GenerateID(1111111111,`clients_reglement`,'R_ID');
			let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
			req.totaleRg = req.body.totaleRg
			req.caisseId = req.body.caisseId
			req.clientId = req.body.clientId
			connection.changeUser({database : 'dszrccqg_system'}, () => {});
			connection.changeUser({database : 'dszrccqg_system'}, () => {});
			let sql = `INSERT INTO clients_reglement (R_ID,Client,Reglemment,R_Date,Caisse_ID) 
				       VALUES ('${R_ID}','${clientId}','${req.totaleRg}','${Today}','${req.caisseId}')`;
			connection.query(sql, (err, rows, fields) => {
				if (err) throw err				
			}); 
	        next();
	}, function(req, res) {
		  let clientId =  req.clientId
	      connection.changeUser({database : 'dszrccqg_system'}, () => {});
	      let sql = `UPDATE 05_restaurant_factures
				   	SET State = 'Payee' 
			        WHERE Client = ${clientId}`;
	       connection.query(sql, (err, rows, fields) => {
	        if (err){ res.json(err)}
	        	res.json({FID: clientId})
	      	}) 
	});

/*####################################[RECETTE]####################################*/
	/* Ajouter Depense */
	RestaurantCaisseRouter.post('/rt/depense/list', (req, res) => {   
		  	    let PID = req.body.forPID;
				let Today = new Date().toISOString().split('T')[0]
				let camId = req.body.camId;
				connection.changeUser({database : 'dszrccqg_system'}, () => {});
				let sql = `SELECT * FROM 05_restaurant_caisses_depenses WHERE Caisse_ID = ${camId} AND D_Date = '${Today}'`;
				connection.query(sql, (err, rows, fields) => {
				if (err) throw err
				res.json(rows);

				}); 
	})

	/* Ajouter Depense */
	RestaurantCaisseRouter.post('/rt/depense/ajouter', (req, res) => {
		  	    let PID = req.body.forPID;
				let depD = req.body.depenseD;
				let Today = new Date().toISOString().split('T')[0]
				let camId = req.body.camId;
				connection.changeUser({database : 'dszrccqg_system'}, () => {});
				let sql = `INSERT INTO 05_restaurant_caisses_depenses (Caisse_ID,Depense,Valeur, Description, D_Date) 
				           VALUES ('${camId}','${depD.genre}','${depD.valeur}','${depD.Description}','${Today}')`;
				connection.query(sql, (err, rows, fields) => {
					if (err) throw err
					res.json({camId:camId});
				}); 
	})

	/* Supprimer Depense */
	RestaurantCaisseRouter.post('/rt/depense/supprimer', (req, res) => {
		  	    let PID = req.body.forPID;
				let ID = req.body.depId;
				connection.changeUser({database : 'dszrccqg_system'}, () => {});
				let sql = `DELETE FROM 05_restaurant_caisses_depenses WHERE PK = ${ID}`;
				connection.query(sql, (err, rows, fields) => {
				if (err) throw err
				res.json({ID:ID});

				}); 
	})

	/*Imprimer Recette */
	RestaurantCaisseRouter.post('/rt/imprimer', (req, res) => {
		    let PID = req.body.forPID;
		    let camionID = req.body.camId;
		    let Today = new Date().toISOString().split('T')[0]

		    function CalculateRecette() {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT SUM(Final_Value) AS RCT
			                  FROM  05_restaurant_factures WHERE Caisse_ID = ${camionID} AND T_Date = '${Today}' AND State = 'Payee' `;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          if (rows[0].RCT == null) {resolve('0.000');} else {resolve(rows[0].RCT.toFixed(3));}
				          
				      })
			      });
		    }

		    function CalculateDepense() {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `
			      			   SELECT SUM(Valeur) AS DEP
			                   FROM 05_restaurant_caisses_depenses WHERE Caisse_ID = ${camionID} AND D_Date = '${Today}'`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          if (rows[0].DEP == null) {resolve('0.000');} else {resolve(rows[0].DEP.toFixed(3));}
				          
				      })
			      });
		    }
		    function CalculateBons() {
			      return new Promise((resolve, reject) => {
				      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
				      	let sql = `SELECT Paye_Bons  FROM 05_restaurant_factures WHERE Caisse_ID = ${camionID} AND T_Date = '${Today}' AND Paye_Bons != ''`; 
				        connection.query(sql, (err, rows, fields) => {
					        if (err){ throw err}
					   //      const result = rows.reduce((acc, current) => {
								//   const existing = acc.find(item => item.valeur === current.valeur);
								//   if (existing) {
								//     existing.qte += current.qte;
								//   } else {
								//     acc.push({ qte: current.qte, valeur: current.valeur });
								//   }
								//   return acc;
								// }, []);
					        let rended = []
					    	for (var i = 0; i < rows.length ; i++) {
					    	  	let item = JSON.parse(rows[i].Paye_Bons);
					    	 	//for (var k = 0; k < item.length; k++) {
					    	 		rended.push(item)
					    	 	//}
					    	}
							var result = [];	
							 rended.reduce(function(res, value) {
							   if (!res[value.valeur]) {
							     res[value.valeur] = { valeur: value.valeur, Name: value.Name, qte: 0 };
							     result.push(res[value.valeur])
							   }
							   res[value.valeur].qte += parseInt(value.qte);
							   return res;
							 }, {});

					        resolve(result);
					   }) 
				  	})
		    }

	      	// Call, Function
		    async function query() {
		        const recetteData = [{}]; 
		        recetteData[0].Totale = await CalculateRecette(); 
		      	recetteData[0].TotDepense = 0; //await CalculateDepense()
		      	recetteData[0].TotBons = await CalculateBons()
		      	res.send(recetteData)
		    }
		    query(); 
	})

	/*Imprimer Recette */
	RestaurantCaisseRouter.post('/rt/imprimer/temp', (req, res) => {
		    let PID = req.body.forPID;
		    let camionID = req.body.camId;
		    let Today = new Date().toISOString().split('T')[0]

		    function CalculateRecette() {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT SUM(Final_Value) AS RCT
			                  FROM  05_restaurant_factures WHERE Caisse_ID = ${camionID} AND T_Date = '${Today}' AND State = 'Payee' `;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          if (rows[0].RCT == null) {resolve('0.000');} else {resolve(rows[0].RCT);}
				          
				      })
			      });
		    }

		    function CalculateDepense() {
			      return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `
			      			   SELECT * FROM 05_restaurant_caisses_depenses WHERE Caisse_ID = ${camionID} AND D_Date = '${Today}'`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          resolve(rows);
				          
				      })
			      });
		    }

		    function CalculateBons() {
			      return new Promise((resolve, reject) => {
				      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
				      	let sql = `SELECT Paye_Bons  FROM 05_restaurant_factures WHERE Caisse_ID = ${camionID} AND T_Date = '${Today}' AND Paye_Bons != ''`; 
				        connection.query(sql, (err, rows, fields) => {
					        if (err){ throw err}
					        let rended = []
					    	for (var i = 0; i < rows.length ; i++) {
					    	  	let item = JSON.parse(rows[i].Paye_Bons);
					    	 	//for (var k = 0; k < item.length; k++) {
					    	 		rended.push(item)
					    	 	//}
					    	}
							var result = [];	
							 rended.reduce(function(res, value) {
							   if (!res[value.valeur]) {
							     res[value.valeur] = { valeur: value.valeur, Name: value.Name, qte: 0 };
							     result.push(res[value.valeur])
							   }
							   res[value.valeur].qte += parseInt(value.qte);
							   return res;
							 }, {});

					        resolve(result);
					   }) 
				  	})
		    }

	      	// Call, Function
		    async function query() {
		        const recetteData = [{}]; 
		        recetteData[0].Totale = await CalculateRecette(); 
		      	recetteData[0].TotDepense = await CalculateDepense()
		      	recetteData[0].TotBons = await CalculateBons()
		      	res.send(recetteData)
		    }
		    query(); 
	})

	/* Ajouter Depense */
	RestaurantCaisseRouter.post('/rt/factures', (req, res) => {   
		  	    let PID = req.body.forPID;
				let Today = new Date().toISOString().split('T')[0]
				let caisseId = req.body.caisseId;
				connection.changeUser({database : 'dszrccqg_system'}, () => {});
				let sql = `SELECT * , COALESCE(05_restaurant_clients.CL_Name, 'PASSAGER') AS CL_Name , 05_restaurant_factures.State AS Pay_State FROM 05_restaurant_factures 
		                     LEFT JOIN 05_restaurant_clients ON 05_restaurant_factures.Client = 05_restaurant_clients.CL_ID 
		                     LEFT JOIN 05_restaurant_caisses ON 05_restaurant_factures.Caisse_ID = 05_restaurant_caisses.C_ID 
		                     WHERE Caisse_ID = ${caisseId} AND T_Date = '${Today}'
		                     ORDER BY T_Time DESC `;
				connection.query(sql, (err, rows, fields) => {
				if (err) throw err
				res.json(rows);

				}); 
	})

	/* Ajouter Depense */
	RestaurantCaisseRouter.post('/rt/factures/select', (req, res) => {   
		  	    let PID = req.body.forPID;
				let Today = new Date().toISOString().split('T')[0]
				let FID = req.body.FID;
				let caisseId = req.body.caisseId;
				connection.changeUser({database : 'dszrccqg_system'}, () => {});
				let sql = `SELECT * , COALESCE(05_restaurant_clients.CL_Name, 'PASSAGER') AS CL_Name ,05_restaurant_factures.State AS Pay_State FROM 05_restaurant_factures 
		                     LEFT JOIN 05_restaurant_clients ON 05_restaurant_factures.Client = 05_restaurant_clients.CL_ID 
		                     LEFT JOIN 05_restaurant_caisses ON 05_restaurant_factures.Caisse_ID = 05_restaurant_caisses.C_ID 
		                     WHERE 05_restaurant_factures.Caisse_ID = ${caisseId} AND 05_restaurant_factures.T_ID = '${FID}'`;
				connection.query(sql, (err, rows, fields) => {
				if (err) throw err
				res.json(rows);

				}); 
	})

/*####################################[COMMANDES]##################################*/
	/* selectionner tous les 05_restaurant_factures */
	RestaurantCaisseRouter.post('/commande/search', (req, res) => {
	        const PID = req.body.forPID;
		    const FID = req.body.FID;
		    let Today = new Date().toISOString().split('T')[0]
	        connection.changeUser({database : 'dszrccqg_system'}, () => {});
	        let sql = `SELECT *  FROM 05_restaurant_factures  WHERE T_ID = '${FID}' AND Is_Commande != '' `;
	        connection.query(sql, (err, rows, fields) => {
	        if (err){ throw err}
	        res.json(rows[0]);
	      })
	          
	})

	/* selectionner tous les 05_restaurant_factures */
	RestaurantCaisseRouter.post('/commande/verifier', (req, res) => {
	        const PID = req.body.forPID;
		    let Today = new Date().toISOString().split('T')[0]
	        connection.changeUser({database : 'dszrccqg_communications'}, () => {});
	        let sql = `SELECT * FROM dszrccqg_communications.05_restaurant_commande 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.05_restaurant_commande.UID = dszrccqg_profile.user_general_data.UID 
                       WHERE  dszrccqg_communications.05_restaurant_commande.PID = '${PID}' AND ( dszrccqg_communications.05_restaurant_commande.State = 'W' OR  dszrccqg_communications.05_restaurant_commande.State = 'S') ` ;
	        connection.query(sql, (err, rows, fields) => {
	        if (err){ throw err}
	        res.json(rows);
	      })
	          
	})

	/* selectionner tous les 05_restaurant_factures */
	RestaurantCaisseRouter.post('/commande/select', (req, res) => {
	        const PID = req.body.forPID;
	        const RID = req.body.RID;
		    let Today = new Date().toISOString().split('T')[0]
	        connection.changeUser({database : 'dszrccqg_communications'}, () => {});
	        let sql = `SELECT * FROM dszrccqg_communications.05_restaurant_commande 
                       INNER JOIN dszrccqg_profile.user_general_data ON dszrccqg_communications.05_restaurant_commande.UID = dszrccqg_profile.user_general_data.UID 
                       LEFT JOIN dszrccqg_system.05_restaurant_clients ON dszrccqg_communications.05_restaurant_commande.UID = dszrccqg_system.05_restaurant_clients.Releted_UID 
                       WHERE  dszrccqg_communications.05_restaurant_commande.PID = '${PID}' AND dszrccqg_communications.05_restaurant_commande.R_ID = '${RID}'` ;
	        connection.query(sql, (err, rows, fields) => {
	        if (err){ throw err}
	        res.json(rows);
	      })
	          
	})

/*&&&&&&&&&&&&&&&&&[Mettre A Jour]&&&&&&&&&&&&&&*/
  /* fetch main Tools */
	RestaurantCaisseRouter.post('/update', (req, res) => {
	        let PID = req.body.forPID
	        let Today = new Date().toISOString().split('T')[0]
	        function FetchStock() {
			    return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT * FROM 05_restaurant_menu WHERE PID = '${PID}'`;
			       connection.query(sql, (err, rows, fields) => {
				       if (err) return reject(err);
				       resolve(rows);
		      		})
		      	})
		    }

		    function FetchFacture() {
		    	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			    return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT * FROM 05_restaurant_factures WHERE PID = '${PID}'`;
			       connection.query(sql, (err, rows, fields) => {
				       if (err) return reject(err);
				       resolve(rows);
		      		})
		      	})
		    }

		    function FetchClient() {
		    	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			    return new Promise((resolve, reject) => {
			      	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			      	let sql = `SELECT * FROM 05_restaurant_clients WHERE PID = '${PID}'`;
			       connection.query(sql, (err, rows, fields) => {
				       if (err) return reject(err);
				       resolve(rows);
		      		})
		      	})
		    }

  			// Call, Function
		    async function query() {
		            const updateData = [{}]; 
		      		updateData[0].stock = await FetchStock()
		      		updateData[0].facture = await FetchFacture()
		      		updateData[0].client = await FetchClient()
			      res.send(updateData)
			 }
		    query();
	})


module.exports = RestaurantCaisseRouter