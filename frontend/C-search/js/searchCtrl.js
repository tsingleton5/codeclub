angular.module('codeclub').controller('searchCtrl', function ($scope, searchService) { //add service


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

})
