const express = require('express')
const PtVenteMagazinCaisse = express.Router()

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
	PtVenteMagazinCaisse.post('/LogIn', (req, res) => {
		  const logInD = req.body.LoginData;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `SELECT * FROM 05_magazin_caisses WHERE Identifiant = '${logInD.Log}' AND Pasword  = '${logInD.Pwd}'` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows[0])

		  }); 
	})

	PtVenteMagazinCaisse.post('/main/position', (req, res) => {
		  	    let PID = req.body.forPID;
				let camId = req.body.camId;
				let position = JSON.stringify(req.body.position);
				let Today = new Date().toISOString().split('T')[0]
				let ToTime = new Date().toLocaleTimeString([],{ hourCycle: 'h23'})
				connection.changeUser({database : 'dszrccqg_system'}, () => {});
				let sql = `INSERT INTO 05_magazin_caisses_position(Camion_ID,jour,heur,Position) VALUES ('${camId}','${Today}','${ToTime}','${position}') ON DUPLICATE KEY UPDATE jour = '${Today}',  heur = '${ToTime}' , Position = '${position}' ;`;
				connection.query(sql, (err, rows, fields) => {
					if (err) throw err
					res.json(rows);
				}); 
	})

/*####################################[CAISSE SIMPLE ]#################################*/

	/* selectioner mes articles */
	PtVenteMagazinCaisse.post('/nv/stock', (req, res) => {
		  const PID = req.body.forPID;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `SELECT * FROM 05_magazin_articles WHERE PID = '${PID}' ` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);

		  }); 
	})

	/* enregister une facture */ 
	PtVenteMagazinCaisse.post('/nv/ajouter', (req, res) => {
		(async() => {
		  	    let PID = req.body.forPID;
				let factureD = req.body.factureD;
				let FID = await GenerateID(1111111111,`05_magazin_caisses_facture`,'F_ID');
				let articleL = JSON.stringify(factureD.articles)
				let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
				connection.changeUser({database : 'dszrccqg_system'}, () => {});
				let sql = `INSERT INTO 05_magazin_caisses_facture (PID,F_ID,Cre_Date,Camion,C_Name,Tota, Chauffeur,Articles) 
				         VALUES (${PID},'${FID}','${Today}','${factureD.Camion}','${factureD.client}','${factureD.totale}', 'null','${articleL}')`;
				connection.query(sql, (err, rows, fields) => {
				if (err) throw err
				res.json({FID:FID});
				}); 
		})() 
	})

/*####################################[MES FACT]###################################*/

	/* selctioner mes factures [in between] */
	PtVenteMagazinCaisse.post('/mf', (req, res) => {
		  const TAG = req.body.tag;
		  const camId = req.body.camId;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `SELECT * 
		  			 FROM 05_magazin_caisses_facture 
		  			 LEFT JOIN 05_magazin_clients ON 05_magazin_caisses_facture.C_Name = 05_magazin_clients.CL_ID
		  			 WHERE 05_magazin_caisses_facture.Camion = ${camId} ORDER BY 05_magazin_caisses_facture.Cre_Date DESC LIMIT 50` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);

		  }); 
	})

	/* selectioner une factures */
	PtVenteMagazinCaisse.post('/mf/select', (req, res) => {
		  const TAG = req.body.tag;
		  const camId = req.body.camId;
		  const FID = req.body.fid;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `SELECT *
		  			 FROM 05_magazin_caisses_facture 
		  			 LEFT JOIN 05_magazin_clients ON 05_magazin_caisses_facture.C_Name = 05_magazin_clients.CL_ID
		  			 WHERE 05_magazin_caisses_facture.Camion =  ${camId}  AND 05_magazin_caisses_facture.F_ID = ${FID} ` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);

		  }); 
	})

	/* modifier un facture */
	PtVenteMagazinCaisse.post('/mf/modifier', (req, res) => {
		  let PID = req.body.forPID;
		  let factId = req.body.factD
		  let articleL = JSON.stringify(factId.articles)
		  let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
		  let FID = req.body.fid;
		  connection.changeUser({database : 'dszrccqg_system'}, () => {});
		  let sql = `UPDATE 05_magazin_caisses_facture
	       			 SET C_Name = '${factId.client}', Tota = '${factId.totale}', Articles = '${articleL}'
	                 WHERE F_ID = '${FID}'` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json({FID:FID});
		  }); 
	})
	
/*####################################[STOCK]######################################*/
	/*Suivie un article */
	PtVenteMagazinCaisse.post('/sk/suivie', (req, res) => {
		    let PID = req.body.forPID;
		    let camionID = req.body.camId;
		    let article = req.body.article;
		    let Today = new Date().toISOString().split('T')[0]
		    
		    function GetLastInventaire() {
			      return new Promise((resolve, reject) => {
			      	let sql = `SELECT * FROM 05_magazin_caisses_fond WHERE Camion = ${camionID} AND Articles LIKE '%${article}%' AND Genre = 'Inventaire' ORDER BY Jour DESC LIMIT 1`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          if (!rows[0]) {resolve([{PK: 0 , Articles:'[{}]' , Jour: null}]);} else {resolve(rows);}
				      })
			      });
		    }
		    function GetArticleData() {
			      return new Promise((resolve, reject) => {
			      	let sql = `SELECT  05_magazin_caisses_stock.Qte, 05_magazin_articles.*
					  			 FROM 05_magazin_caisses_stock
					  			 LEFT JOIN 05_magazin_articles ON 05_magazin_caisses_stock.Article = 05_magazin_articles.A_Code
					  			 WHERE 05_magazin_caisses_stock.Camion = ${camionID} AND 05_magazin_caisses_stock.Article = ${article}`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          resolve(rows)
				      })
			      });
		    }
		    function FetchArticleFromFond(date,last) {
			      return new Promise((resolve, reject) => {
			      	let sql = `SELECT * FROM 05_magazin_caisses_fond WHERE Camion = ${camionID} AND Genre = 'Fonds' AND PK > ${last} AND Jour >= '${date}' AND Articles LIKE '%${article}%'`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          resolve(rows)
				      })
			      });
		    }
		    function FetchArticleInFacture(date) {
			      return new Promise((resolve, reject) => {
			      	let sql = `SELECT * FROM 05_magazin_caisses_facture 
			      			   LEFT JOIN 05_magazin_clients ON 05_magazin_caisses_facture.C_Name = 05_magazin_clients.CL_ID
			      			   WHERE 05_magazin_caisses_facture.Camion = ${camionID} AND 05_magazin_caisses_facture.Cre_Date  >= '${date}' AND 05_magazin_caisses_facture.Articles LIKE '%${article}%'`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          resolve(rows)
				      })
			      });
		    }
		    function FetchSuivieArticle(date) {
			      return new Promise((resolve, reject) => {
			      	let sql = `SELECT * FROM 05_magazin_caisses_stock_fixed WHERE Camion = ${camionID} AND Jour >= '${date}' AND Articles LIKE '%${article}%'`;

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
	PtVenteMagazinCaisse.post('/sk/fonds', (req, res) => {
		  const TAG = req.body.tag;
		  const camId = req.body.camId;
		  let sql = `SELECT * FROM 05_magazin_caisses_fond WHERE Camion = ${camId} AND Genre = 'Fonds' ORDER BY Jour DESC LIMIT 50` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);

		  }); 
	})

	/*Selectionner Fonds info*/
	PtVenteMagazinCaisse.post('/sk/fonds/info', (req, res) => {
		  const TAG = req.body.tag;
		  const camId = req.body.camId;
		  const FID = req.body.fid;
		  let sql = `SELECT * FROM 05_magazin_caisses_fond WHERE Camion = ${camId} AND F_ID = ${FID}` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);

		  }); 
	})

	/*Regler Ventes*/
	PtVenteMagazinCaisse.post('/sk/reglemment', (req, res) => {
		  let PID = req.body.forPID  
		  let camion = req.body.camId
	      let articleList = req.body.artList; 
	      let sqlText = ''
	      for (let i = 0; i < articleList.length; i++) {
			    sqlText = sqlText.concat(" ", `WHEN ${parseInt(articleList[i][0]) + parseInt(camion)} THEN Qte -  ${articleList[i][2]} `);    
		   }
	      let sql = `UPDATE 05_magazin_caisses_stock
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
	PtVenteMagazinCaisse.post('/sk/reglemment/check', (req, res) => {
		  let PID = req.body.forPID;
		  let camId = req.body.camId;
		  let Today = req.body.jour;
		  //let Today = new Date().toISOString().split('T')[0]
		  let sql = `SELECT * FROM 05_magazin_caisses_stock_fixed WHERE Camion = '${camId}' AND  Jour = '${Today}'` ;
		  connection.query(sql, (err, rows, fields) => {
		    if (err) throw err
		    res.json(rows);

		  }); 
	})

	/*Regler Ventes*/
	PtVenteMagazinCaisse.post('/sk/reglemment/enregistrer', (req, res) => {
		  	    let PID = req.body.forPID;
				let Camion = req.body.camId;
				let today = req.body.jour;
				//let today =  new Date().toISOString().split('T')[0]
				let articleL = JSON.stringify(req.body.artList)
				let sql = `INSERT INTO 05_magazin_caisses_stock_fixed
				         (Camion,Jour,Articles) 
				         VALUES ('${Camion}','${today}','${articleL}')`;
				connection.query(sql, (err, rows, fields) => {
				if (err) throw err
				res.json({saved:true});

				}); 
	})

/*####################################[VENTES]#####################################*/
	/* selctioner mes vente auhoudhui */
	PtVenteMagazinCaisse.post('/mv/resumer', (req, res) => {
				let PID = req.body.forPID
				let camId = req.body.camId
				let Today =  new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
				function FetchStock() {
				    return new Promise((resolve, reject) => {
				      	let sql = `SELECT  05_magazin_caisses_stock.Qte, 05_magazin_articles.*
					  			 FROM 05_magazin_caisses_stock
					  			 LEFT JOIN 05_magazin_articles ON 05_magazin_caisses_stock.Article = 05_magazin_articles.A_Code
					  			 WHERE 05_magazin_caisses_stock.Camion = ${camId}`;
				       connection.query(sql, (err, rows, fields) => {
					       if (err) return reject(err);
					       resolve(rows);
				  		})
				  	})
				}

				function CheckReglemment() {
				    return new Promise((resolve, reject) => {
				      	let sql = `SELECT * FROM 05_magazin_caisses_stock_fixed WHERE Camion = '${camId}' AND  Jour = '${Today}'` ;
		 				 connection.query(sql, (err, rows, fields) => {
					       if (err) return reject(err);
					       resolve(rows);
				  		})
				  	})
				}

				function FetchVente() {
				    return new Promise((resolve, reject) => {
				      	let sql = `SELECT Articles  FROM 05_magazin_caisses_facture  WHERE Camion = ${camId} AND Cre_Date = '${Today}'`; 
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
	PtVenteMagazinCaisse.post('/mv/resumer/jour', (req, res) => {
				let PID = req.body.forPID
				let camId = req.body.camId
				let Jour = req.body.jour
				let Today =  new Date(Jour).toISOString().split('T')[0]
				function FetchStock() {
				    return new Promise((resolve, reject) => {
				      	let sql = `SELECT  05_magazin_caisses_stock.Qte, 05_magazin_articles.*
					  			 FROM 05_magazin_caisses_stock
					  			 LEFT JOIN 05_magazin_articles ON 05_magazin_caisses_stock.Article = 05_magazin_articles.A_Code
					  			 WHERE 05_magazin_caisses_stock.Camion = ${camId}`;
				       connection.query(sql, (err, rows, fields) => {
					       if (err) return reject(err);
					       resolve(rows);
				  		})
				  	})
				}

				function CheckReglemment() {
				    return new Promise((resolve, reject) => {
				      	let sql = `SELECT * FROM 05_magazin_caisses_stock_fixed WHERE Camion = '${camId}' AND  Jour = '${Today}'` ;
		 				 connection.query(sql, (err, rows, fields) => {
					       if (err) return reject(err);
					       resolve(rows);
				  		})
				  	})
				}

				function FetchVente() {
				    return new Promise((resolve, reject) => {
				      	let sql = `SELECT Articles  FROM 05_magazin_caisses_facture  WHERE Camion = ${camId} AND Cre_Date = '${Today}'`; // AND Cre_Date = '${Today}' 
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
	PtVenteMagazinCaisse.post('/mv/article', (req, res) => {
		   let PID = req.body.forPID
	       let camId = req.body.camId
	       let article = req.body.code
	       let Today = new Date().toISOString().split('T')[0]
	       let sql = `SELECT *  FROM 05_magazin_caisses_facture  
	       			 LEFT JOIN 05_magazin_clients ON 05_magazin_caisses_facture.C_Name = 05_magazin_clients.CL_ID
	       			 WHERE 05_magazin_caisses_facture.Camion = '${camId}' AND 05_magazin_caisses_facture.Articles LIKE '%${article}%' AND 05_magazin_caisses_facture.Cre_Date = '${Today}'`; // AND Cre_Date = '${Today}'
	       connection.query(sql, (err, rows, fields) => {
		        if (err){ throw err}
		        res.json(rows);
	      }) 
	})

/*####################################[CLIENT]#####################################*/

/*####################################[RECETTE]####################################*/
	/* Ajouter Depense */
	PtVenteMagazinCaisse.post('/rt/depense/list', (req, res) => {   
		  	    let PID = req.body.forPID;
				let Today = new Date().toISOString().split('T')[0]
				let camId = req.body.camId;
				let sql = `SELECT * FROM 05_magazin_caisses_depenses WHERE Camion = ${camId} AND Jour = '${Today}'`;
				connection.query(sql, (err, rows, fields) => {
				if (err) throw err
				res.json(rows);

				}); 
	})

	/* Ajouter Depense */
	PtVenteMagazinCaisse.post('/rt/depense/ajouter', (req, res) => {
		  	    let PID = req.body.forPID;
				let depD = req.body.depenseD;
				let Today = new Date().toISOString().split('T')[0]
				let camId = req.body.camId;
				let sql = `INSERT INTO 05_magazin_caisses_depenses (Camion,Depenses,Valeur,Jour) 
				         VALUES ('${camId}','${depD.genre}','${depD.valeur}','${Today}')`;
				connection.query(sql, (err, rows, fields) => {
					if (err) throw err
					res.json({camId:camId});
				}); 
	})

	/* Supprimer Depense */
	PtVenteMagazinCaisse.post('/rt/depense/supprimer', (req, res) => {
		  	    let PID = req.body.forPID;
				let ID = req.body.depId;
				let sql = `DELETE FROM 05_magazin_caisses_depenses WHERE PK = ${ID}`;
				connection.query(sql, (err, rows, fields) => {
				if (err) throw err
				res.json({ID:ID});

				}); 
	})

	/*Imprimer Recette */
	PtVenteMagazinCaisse.post('/rt/imprimer', (req, res) => {
		    let PID = req.body.forPID;
		    let camionID = req.body.camId;
		    let Today = new Date().toISOString().split('T')[0]

		    function CalculateRecette() {
			      return new Promise((resolve, reject) => {
			      	let sql = `SELECT SUM(Tota) AS RCT
			                  FROM 05_magazin_caisses_facture WHERE Camion = ${camionID} AND Cre_Date = '${Today}'`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          if (rows[0].RCT == null) {resolve('0.000');} else {resolve(rows[0].RCT.toFixed(3));}
				          
				      })
			      });
		    }

		    function CalculateDepense() {
			      return new Promise((resolve, reject) => {
			      	let sql = `SELECT SUM(Valeur) AS DEP
			                  FROM 05_magazin_caisses_depenses WHERE Camion = ${camionID} AND Jour = '${Today}'`;
				       connection.query(sql, (err, rows, fields) => {
				          if (err) return reject(err);
				          if (rows[0].DEP == null) {resolve('0.000');} else {resolve(rows[0].DEP.toFixed(3));}
				          
				      })
			      });
		    }

	      	// Call, Function
		    async function query() {
		        const recetteData = [{}]; 
		        recetteData[0].Totale = await CalculateRecette(); 
		      	recetteData[0].TotDepense = await CalculateDepense()
		      	res.send(recetteData)
		    }
		    query(); 
	})

/*####################################[COMMANDES]####################################*/
	/* selectionner tous les factures */
	PtVenteMagazinCaisse.post('/cmd', (req, res) => {
	        const TAG = req.body.tag;
		    const camId = req.body.camId;
		    let Today = new Date().toISOString().split('T')[0]
	        let sql = `SELECT *  FROM 05_magazin_facture 
	       			   LEFT JOIN 05_magazin_clients ON 05_magazin_facture.C_Name = 05_magazin_clients.CL_ID  
	       			   WHERE 05_magazin_facture.Fournisseurs = ${camId} AND 05_magazin_facture.Cre_Date = '${Today}'`;
	        connection.query(sql, (err, rows, fields) => {
	        if (err){ throw err}
	        res.json(rows);
	      })
	          
	})

/*&&&&&&&&&&&&&&&&&[Mettre A Jour]&&&&&&&&&&&&&&*/
  /* fetch main Tools */
	PtVenteMagazinCaisse.post('/update', (req, res) => {
	        let PID = req.body.forPID
	        let Today = new Date().toISOString().split('T')[0]
	        function FetchStock() {
	        	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			    return new Promise((resolve, reject) => {
			      	let sql = `SELECT * FROM 05_magazin_articles WHERE PID = '${PID}'`;
			       connection.query(sql, (err, rows, fields) => {
				       if (err) return reject(err);
				       resolve(rows);
		      		})
		      	})
		    }

		    function FetchFacture() {
		    	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			    return new Promise((resolve, reject) => {
			      	let sql = `SELECT * FROM 05_magazin_factures WHERE PID = '${PID}'`;
			       connection.query(sql, (err, rows, fields) => {
				       if (err) return reject(err);
				       resolve(rows);
		      		})
		      	})
		    }

		    function FetchClient() {
		    	connection.changeUser({database : 'dszrccqg_system'}, () => {});
			    return new Promise((resolve, reject) => {
			      	let sql = `SELECT * FROM 05_magazin_clients WHERE PID = '${PID}'`;
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


module.exports = PtVenteMagazinCaisse