angular.module('codeclub').controller('myprobsCtrl', function ($scope, myprobsService) {

  $scope.modalOn = false;


$scope.getProblems = function () {
myprobsService.getUserProblems()
.then(function (response) {
  $scope.problems = response;
  // return $scope.problems.push(response); this whenever adding- adds a new one with empty stuff
})
}
$scope.getProblems(); // doing this makes it so the problems show

// .then(function (re) { took off from a line above
//   $scope.problems = re;
// })

$scope.addProblem = function (prob) {
  myprobsService.createNewProblem(prob).then(function (response) {
    $scope.getProblems(); // live updates
  })
}


$scope.editProblem = function (problem) {
  console.log('crtrl hit');
  myprobsService.editProblem(problem).then(function (response) {
    $scope.getProblems(); // live updates
  })
}





$scope.deleteProblem = function (id) {
  console.log('delete ctrl');
  myprobsService.deleteProblem(id).then(function (response) {
    $scope.getProblems();
  })
}


$scope.turnOff = function () {
  $scope.modalOn = false;
}


$scope.openModal = function (problem) {
  $scope.problem = problem;
  $scope.modalOn = true;

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
