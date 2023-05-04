const express = require('express')
const docteur = express.Router()

docteur.get('/', (req, res) => {
  res.send('Docteur')
})

docteur.get('/main', (req, res) => {
  res.send('this is docteur ')
})

module.exports = docteur