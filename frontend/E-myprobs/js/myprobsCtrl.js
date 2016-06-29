angular.module('codeclub').controller('myprobsCtrl', function ($scope, myprobsService) {

myprobsService.getUserProblems()
.then(function (response) {
  $scope.problems = response;
})

})
