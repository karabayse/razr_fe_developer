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


module.exports = router;
