var express=require('express');
var cors = require('cors')
const db = require('./database/db');
const PORT = 3000
const HOST = '0.0.0.0';
var path = require('path');
const routes = require('./routes/index')

var app=express();

app.use(cors());
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)

app.use(express.static(__dirname + '/public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);