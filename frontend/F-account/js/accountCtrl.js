angular.module("codeclub").controller("accountCtrl", function($scope, user, accountService, $state) {
$scope.user = user;

$scope.updateUserInfo = function (userObj) {
  accountService.updateUser(userObj).then(function (response) {
    $scope.user = response.data; // *
  })
}


$scope.logout = function (user) {
  accountService.logout().then(function (response) {
    setTimeout(function () {
      $state.go('login');
      return response;
    }, 300)
  })
}



// $scope.logoutUser = function () {
//   setTimeout(function () {
//     $state.go('login');
//   }, 1000)
// }

});


// * LET ME EXPLAIN THIS LINE SO I REMEMBER IT:
// SO THE $SCOPE.USER IS RELATING TO THE $SCOPE.USER = USER ABOVE
// ON LINE 2 THAT IS EQUAL TO THE CURRENT USER THAT IS LOGGED IN
// THE REASON IT LIVE UPDATES IS..
// BECAUSE WE DO A .THEN WE'RE NOW AT THE TIME WHERE WHEN WE ASSIGN USER
// TO RESPONSE.DATA, IT UPDATES TO WHAT THE RESPONSE.DATA IS
// AND WE CAN DO RESPONSE.DATA BECUASE THERE IS JUST 1 ITEM IN THE ARRAY - WHICH
// IS JUST THE CURRENT USER'S DATA
// SO WE DO A .THEN AND ASSIGN THE CURRENTLY LOGGED IN USER'S INFO TO THE RESPONSE.DATA
// RESPONSE IS WHAT WE TYPE IN THE INPUT FIELD - HENSE THAT'S WHY IT IS IN THE .THEN
// BECUASE IT IS EQUAL TO THE DATA THAT'S INPUTED FROM THE INPUT BOXES
// SO RESPONSE IS NOW EQUAL TO OUR CURRENT USER'S INFO AND WITH .THEN MAKING IT DO IT LATER
// IT LIVE UPDATES
