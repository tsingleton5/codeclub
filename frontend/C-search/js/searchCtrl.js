angular.module('codeclub').controller('searchCtrl', function ($scope, searchService) { //add service

$scope.modalOn = false;
$scope.userInfoOn = false;


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

$scope.showUserInfo = function (info) {
  $scope.info = info;
  $scope.userInfoOn = true;
}

$scope.showUserInfoTurnOff = function () {
  $scope.userInfoOn = false;
}



// $(document).ready(function() {
//   $('creator-info-top-left-holder').on('click', function () {
//     $(this).addClass('animate' 'pulse');
//   })
// });





// $(document).ready(function() {
//   $('heart-on-probs').on('click', function () {
//     $(this).addClass('animate' 'pulse');
//   })
// });


//ending
})
