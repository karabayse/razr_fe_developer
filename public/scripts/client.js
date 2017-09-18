/*---- Shape Controller ----*/

console.log('in clients.js');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('ShapeController', function(ShapeService) {
  console.log('in ShapeController');
  var vm = this;

// circle object
// getArea method returns area of the circle
// toString method returns:  Circle: Radius = X, Area = Y  (where X and Y are
// the radius and area of the circle)
function circleObject(radius, area) {
  vm.radius = radius;
  vm.area = area;
  vm.getArea = calculateArea;
} // end circleObject


var circle = new circleObject(4, 2);

function calculateArea() {
  // A = πr2
  var circleArea = 65 - this.area;
  return circleArea;
}


// var circleObject = function(){}

// square object
// getArea method returns area of the square
// toString method returns:  Square:  Size = X, Area = Y  (where X and Y are the
// length and area of the square)
function squareObject(size, area) {
  vm.size = size;
  vm.area = area;
} // end square object


// shape function
vm.shape = function() {
  var shapeObject = {
    radius: vm.radiusInput,
    area: vm.areaInput,
    length: vm.lengthInput
  }; // end shapeObject
  console.log('shapeObject:', shapeObject);
  ShapeService.shape(shapeObject).then(function(){
});
}; // end shape function


// sorting function
// Create a method that accepts an array of Circles and Squares, and returns the
// array sorted by area, in descending order
vm.circlesAndSquaresArray = [];

vm.sort = function() {

}; // end sort function


// generate function
// Create a method that generates an array of 50 squares of varying side length
// between 1 and 100, and 50 circles of varying diameter between 1 and 100.
// The sizes of each shape should be randomly generated.
vm.fiftySquaresArray = [];

vm.generate = function() {

}; // end generate function

}); // end controller
