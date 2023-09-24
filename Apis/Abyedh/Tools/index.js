const express = require('express')
const Tools = express.Router()
const connection = require('../connection.js')

const ADIL = {
        docteur : {directoryTable:'01_docteur', settingTable:'01_docteur_setting'},
        garderie : {directoryTable:'02_garderie', settingTable:'01_docteur_setting'},
}

/*####################################[BLOG]########################################*/
   Tools.post('/blog', (req, res) => {
            let categ = req.body.categ;

            function FetchPots() {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_tools'}, () => {});
                  let sql = `SELECT Blog_ID, Gategory, Subcategory, Genre, Img_Url, Title, Page_Name  FROM  wiki_blog WHERE Gategory = '${categ}' ;`;  
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                  })
                });
            }
            function FetchSubCateg(RID, genre) {
                return new Promise((resolve, reject) => {
                  connection.changeUser({database : 'dszrccqg_tools'}, () => {});
                 let sql = `SELECT *  FROM  wiki_blog_subcategory WHERE Gategory = '${categ}' ;`;  
                   connection.query(sql, (err, rows, fields) => {
                      if (err) return reject(err);
                      resolve(rows);
                      
                  })
                });
            }
            // Call, Function
            async function query() {
                const postListe = {}
                  postListe.posts = await FetchPots()
                  postListe.subCtaeg = await FetchSubCateg()

              res.send(postListe)
            }
            query();
      
    })


    Tools.post('/blog/select', (req, res) => {
        let PAID = req.body.PAID;
        connection.changeUser({database : 'dszrccqg_tools'}, () => {});
        let sql = `SELECT * FROM  wiki_blog WHERE Blog_ID = ${PAID} ;`;  
         connection.query(sql, (err, rows, fields) => {
          if (err){ throw err}
          res.json(rows[0]);
        })
                    
    })

/*####################################[PUBLIC]######################################*/
    Tools.post('/metro', (req, res) => {
        let ligne = req.body.ligne;
        let saison = req.body.saison;
        connection.changeUser({database : 'dszrccqg_tools'}, () => {});
        let sql = `SELECT * FROM  apps_transpo_metro WHERE Ligne = '${ligne}' AND Saison = '${saison}' ;`;  
         connection.query(sql, (err, rows, fields) => {
          if (err){ throw err}
          res.json(rows);
        })
                    
    })
    Tools.post('/tgm', (req, res) => {
        let saison = req.body.saison;
        connection.changeUser({database : 'dszrccqg_tools'}, () => {});
        let sql = `SELECT * FROM  apps_transpo_tgm WHERE  Saison = '${saison}' ;`;  
         connection.query(sql, (err, rows, fields) => {
          if (err){ throw err}
          res.json(rows);
        })
                    
    })
/*####################################[ART]#########################################*/
    Tools.post('/setting', (req, res) => {
        let tag = req.body.tag;
        let gouv = req.body.gouv;
        let deleg = req.body.deleg;
        connection.changeUser({database : 'dszrccqg_tools'}, () => {});
        let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE Gouv = '${gouv}' LIMIT 50;`; // AND Deleg = '${deleg}' 
         connection.query(sql, (err, rows, fields) => {
          if (err){ throw err}
          res.json(rows);
        })
                    
    })
/*####################################[TAXI]########################################*/

    Tools.post('/taxi/search', (req, res) => {
            let position = req.body.position;
            connection.changeUser({database : 'dszrccqg_directory'}, () => {});
            let sql = `SELECT * FROM  03_taxi WHERE 1;`; // AND Deleg = '${deleg}' 
             connection.query(sql, (err, rows, fields) => {
              if (err){ throw err}
              res.json(rows);
            })
                
      })

/*####################################[LOUAGE]######################################*/
    Tools.post('/setting', (req, res) => {
        let tag = req.body.tag;
        let gouv = req.body.gouv;
        let deleg = req.body.deleg;
        connection.changeUser({database : 'dszrccqg_tools'}, () => {});
        let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE Gouv = '${gouv}' LIMIT 50;`; // AND Deleg = '${deleg}' 
         connection.query(sql, (err, rows, fields) => {
          if (err){ throw err}
          res.json(rows);
        })
                    
    })


module.exports = Tools