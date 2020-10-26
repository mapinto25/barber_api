const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "barber_shop",
  database: "sys"
});

con.connect(function(err) {
  if (err) throw err;
});

app.get('/shop', function (req, res) {
  con.query('SELECT * FROM shops', function (err, result, fields) {
     if (err) throw err;
     return res.json(result)
   });
})   


app.get('/', (req, res) => {
  res.send('We are on!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

