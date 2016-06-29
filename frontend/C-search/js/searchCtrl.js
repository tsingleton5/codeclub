angular.module('codeclub').controller('searchCtrl', function ($scope, searchService) { //add service

searchService.getProblems()
.then(function (response) {
  $scope.problems = response;
})

})
