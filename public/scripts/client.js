/*---- Shape Controller ----*/

console.log('in clients.js');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('ShapeController', function(ShapeService) {
  console.log('in ShapeController');
  var vm = this;

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


}); // end controller
