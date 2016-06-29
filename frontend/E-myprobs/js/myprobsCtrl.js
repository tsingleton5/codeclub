angular.module('codeclub').controller('myprobsCtrl', function ($scope, myprobsService) {

myprobsService.getUserProblems()
.then(function (response) {
  $scope.problems = response;
  // return $scope.problems.push(response); this whenever adding- adds a new one with empty stuff
})


$scope.addProblem = function (prob) {
  myprobsService.createNewProblem(prob).then(function (response) {
    return response;
  })
}


//ending
})


// $scope.createProducts = function (product) {
//   callService.createProducts(product)
//   .then(function (response) { // these 4 lines makes it so it so the page reloads when you add a product
//     $scope.products.push(response.data); // added .data and now it works.
//     return response;
//   })
// }
