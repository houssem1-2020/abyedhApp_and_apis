const express = require('express')
const app = express()
const port = 3011

app.use(express.json());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});




app.get('/', (req, res) => {
  res.send('Abyedh.tn')
})



//profile
const Profile = require('./Profile/index')
app.use('/Profile', Profile)

//registration
const Registration = require('./Registration/index')
app.use('/Registration', Registration)

//search
const Search = require('./Search/Search')
app.use('/Search', Search)

//tools
const Tools = require('./Tools/index')
app.use('/Tools', Tools)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})