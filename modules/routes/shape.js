var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shapeSchema = new mongoose.Schema({
  radius: Number,
  area: Number,
  length: Number
}); // end shapeSchema

var shapeModel = mongoose.model('shapeModel', shapeSchema);

router.get('/', function(req, res) {
  console.log('shapeObject');
  shapeModel.find().then(function(shape) {
    res.send(shape);
    console.log('shape:', shape);
  });
}); // end shape get call


module.exports = router;
