const express = require('express')
const Tools = express.Router()
const connection = require('../connection.js')

const ADIL = {
        docteur : {directoryTable:'01_docteur', settingTable:'01_docteur_setting'},
        garderie : {directoryTable:'02_garderie', settingTable:'01_docteur_setting'},
}

/*####################################[BLOG]########################################*/
    Tools.post('/blog', (req, res) => {
        let tag = req.body.tag;
        let gouv = req.body.gouv;
        let deleg = req.body.deleg;
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE Gouv = '${gouv}' LIMIT 50;`; // AND Deleg = '${deleg}' 
         connection.query(sql, (err, rows, fields) => {
          if (err){ throw err}
          res.json(rows);
        })
                    
    })
/*####################################[PUBLIC]######################################*/
    Tools.post('/setting', (req, res) => {
        let tag = req.body.tag;
        let gouv = req.body.gouv;
        let deleg = req.body.deleg;
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE Gouv = '${gouv}' LIMIT 50;`; // AND Deleg = '${deleg}' 
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
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE Gouv = '${gouv}' LIMIT 50;`; // AND Deleg = '${deleg}' 
         connection.query(sql, (err, rows, fields) => {
          if (err){ throw err}
          res.json(rows);
        })
                    
    })
/*####################################[TAXI]########################################*/
    Tools.post('/setting', (req, res) => {
        let tag = req.body.tag;
        let gouv = req.body.gouv;
        let deleg = req.body.deleg;
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE Gouv = '${gouv}' LIMIT 50;`; // AND Deleg = '${deleg}' 
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
        connection.changeUser({database : 'dszrccqg_directory'}, () => {});
        let sql = `SELECT * FROM  ${ADIL[tag].directoryTable} WHERE Gouv = '${gouv}' LIMIT 50;`; // AND Deleg = '${deleg}' 
         connection.query(sql, (err, rows, fields) => {
          if (err){ throw err}
          res.json(rows);
        })
                    
    })


module.exports = Tools