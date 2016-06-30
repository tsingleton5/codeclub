angular.module("codeclub").controller("favCtrl", function($scope, searchService) {


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
      $scope.liked = response;
    })
  }

});
