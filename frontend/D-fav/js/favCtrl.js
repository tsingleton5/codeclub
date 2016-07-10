angular.module("codeclub").controller("favCtrl", function($scope, favService, user) {

  $scope.modalOn = false;


$scope.getProblems = function () {
  //console.log(user.favorites);
  favService.getFavProbs(user.favorites).then(function (response) {
    //console.log(response);
    $scope.favorites = response;
  })
}
$scope.getProblems();





$scope.turnOff = function () {
  $scope.modalOn = false;
}


$scope.openModal = function (problem) {
  $scope.problem = problem;
  $scope.modalOn = true;

}

// $scope.displayFavs = searchService.addFavProb(problem);


// searchService.addFavProb(problem).then(function (response) {
//   $scope.liked = response;
// })

  // $scope.addFavProblem = function ({favorite: problem}) {
  //   console.log({favorite: problem});
  //   searchService.addFavProb({favorite: problem}).then(function (response) {
  //     $scope.liked = response;
  //   })
  // }




favService.getQuotes().then(function (response) {
  $scope.quotes = response.facts;
})




});
