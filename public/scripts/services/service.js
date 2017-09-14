/*---- Shape Service ----*/

myApp.service('ShapeService', function($http) {
  var sv = this;

// POST for shape
sv.shape = function(shape) {
  return $http({
    method: 'POST',
    url: '/shape',
    data: shape
  }).then(function(response) {
    console.log('back from shape post:', response);
  });
}; // end shape 


}); // end service
