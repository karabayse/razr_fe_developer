// requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// uses
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// globals
var port = process.env.PORT || 4001;

// spin up server
app.listen(port, function() {
  console.log('server up on:', port);
});

app.get('/', function(req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});
