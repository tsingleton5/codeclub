angular.module('codeclub').controller('searchCtrl', function ($scope, searchService) { //add service

$scope.modalOn = false;

searchService.getProblems()
.then(function (response) {
  $scope.problems = response;
})


//%
$scope.getRefreshedProblems = function functionName() {
searchService.getProblems()
.then(function (response) {
  $scope.problems = response;
})
}
//%


$scope.addFavProblem = function (problem) {
  searchService.addFavProb(problem).then(function (response) {
    $scope.getRefreshedProblems();
  })
}

$scope.turnOff = function () {
  $scope.modalOn = false;
}


$scope.openModal = function (problem) {
  $scope.problem = problem;
  $scope.modalOn = true;

}








// $(document).ready(function() {
//   $('heart-on-probs').on('click', function () {
//     $(this).addClass('animate' 'zoomOutUp');
//   })
// });


//ending
})
