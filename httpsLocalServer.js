const app = require("https-localhost")();
var express = require('express');
//var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.use(function (req, res, next) {
  res.send('Hello World')
})
app.listen(8080);
