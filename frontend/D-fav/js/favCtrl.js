angular.module("codeclub").controller("favCtrl", function($scope, favService, user) {


$scope.getProblems = function () {
  console.log(user.favorites);
  favService.getFavProbs(user.favorites).then(function (response) {
    console.log(response);
    $scope.favorites = response;
  })
}
$scope.getProblems();


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






});
