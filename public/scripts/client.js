/*---- Shape Controller ----*/

console.log('in clients.js');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('ShapeController', function(ShapeService) {
  console.log('in ShapeController');
  var vm = this;

// shape function
vm.shape = function() {
  // circle object --> getArea method returns area of the circle
  // circle object --> toString method returns:  Circle: Radius = X, Area = Y  (where X and Y are the radius and area of the circle)
  // square object --> getArea method returns area of the square
  // square object --> toString method returns:  Square:  Size = X, Area = Y  (where X and Y are the length and area of the square)
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
vm.sort = function() {

}; // end sort function


// generate function
// Create a method that generates an array of 50 squares of varying side length
// between 1 and 100, and 50 circles of varying diameter between 1 and 100.
// The sizes of each shape should be randomly generated.
vm.generate = function() {

}; // end generate function

}); // end controller
