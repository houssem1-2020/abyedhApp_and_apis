const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'ftp.abyedh.tn',
  user: 'dszrccqg',
  password: 'PKw*8Gg(i61fK6',
  database: ''
})
connection.connect()

module.exports = connection