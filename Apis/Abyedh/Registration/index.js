const express = require('express')
const Registration = express.Router()
const connection = require('../connection.js')



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

/*####################################[LogIn]######################################*/
    Registration.post('/logIn', (req, res) => {
            let UID = req.body.UID;
            let logInD = req.body.loginD;

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

/*####################################[SignUp]#####################################*/
    Registration.post('/signup', (req, res) => {
            let system = req.body.system;
            let userData = JSON.stringify(req.body.userData);
            let horaireData = JSON.stringify(req.body.horaireData);
            let alwaysOpen = req.body.alwaysOpen;
            let position = JSON.stringify(req.body.position);
            let Today = new Date().toLocaleDateString('fr-FR').split( '/' ).reverse( ).join( '-' )
            let inscData = JSON.stringify(req.body.inscData);
            connection.changeUser({database : 'dszrccqg_registration'}, () => {});
          let sql = `INSERT INTO system_subscription_request (UserData, ProfileData , Horaire, HoraireALways, Position,  Genre,Req_Date) 
                     VALUES ('${userData}','${inscData}','${horaireData}','${alwaysOpen}','${position}','${system}', '${Today}') `;
           connection.query(sql, (err, rows, fields) => {
            if (err){res.json(err)}
              res.json(rows);
          })

      
    })



module.exports = Registration