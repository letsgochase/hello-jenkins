var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello jenkins1');
});
 
	
app.listen(80);
 
module.exports = app;
