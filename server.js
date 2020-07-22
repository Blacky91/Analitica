var juanModel=require('./api/routes/gonsaRouter');


var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use('/search',juanModel);

app.listen(port);

console.log('gonsa RESTful API server started on: ' + port);

