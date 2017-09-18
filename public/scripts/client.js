/*---- Shape Controller ----*/
console.log('in clients.js');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('ShapeController', function(ShapeService) {
  console.log('in ShapeController');
  var vm = this;



/*--- CIRCLE ---*/
// circle object
// instances can be created with any desired radius
// instances have a 'getArea' method that returns the area of the circle
function circleObject(radius, area) {
  vm.radius = radius;
  vm.area = area;
} // end circleObject

var circle = new circleObject(4, 2);


// function to calculate the area of a circle
function calculateCircleArea(r) {
    if(r < 0) {
        return "invalid input";
    }
    return Math.PI * r * r;
}

// toString method returns:  Circle: Radius = X, Area = Y  (where X and Y are
// the radius and area of the circle)



/*--- SQUARE ---*/
// square object
// instances can be created with any length of sides
// getArea method returns area of the square
function squareObject(length) {
  vm.length = length;
} // end square object

// function to calculate the area of a square
squareObject.getArea = function() {
  return vm.length * vm.length;
};

// new square instance created from square object constructor
var mySquare = new squareObject(4);
// console.log(mySquare.getArea());
console.log(mySquare);

// toString method returns:  Square:  Size = X, Area = Y  (where X and Y are the
// length and area of the square)



/*--- SORTING ---*/
// Create a method that accepts an array of Circles and Squares, and returns the
// array sorted by area, in descending order
vm.circlesAndSquaresArray = [];

function sort() {
  vm.circlesAndSquares = ShapeService.data;
} // end sort function
vm.circlesAndSquaresArray.sort();
vm.circlesAndSquaresArray.reverse();



/*--- GENERATE ---*/
// generate function
// Create a method that generates an array of 50 squares of varying side length
// between 1 and 100, and 50 circles of varying diameter between 1 and 100.
// The sizes of each shape should be randomly generated.
vm.fiftySquaresArray = [];

function generate() {
  vm.squares = ShapeService.data;
} // end generate function

}); // end controller
