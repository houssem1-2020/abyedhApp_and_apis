const express = require('express')
const LogIn = express.Router()

const connection = require('../connection.js')

LogIn.post('/', (req, res) => {
  //let tabledata = res.params.tdata
  const logid = req.body.logIn;
  const pwd = req.body.Pwd;

  connection.changeUser({database : 'dszrccqg_registration'}, () => {});  
  let sql = `SELECT * FROM system_login WHERE Identification = '${logid}' AND PasswordSalt  = '${pwd}'` ;
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err
    if (rows.length == 0 ) {
      let tokenTable = [Exist = 'false', PID = 'null', token= 'null']; 
      res.send(JSON.stringify(tokenTable));
    } 
		else {
			let tokenTable = [Exist = 'true', PID = rows[0].PID, token='pouhpouhpouhgpiygoiu'];
      res.send(JSON.stringify(tokenTable));	
		}

  });
  
})

module.exports = LogIn