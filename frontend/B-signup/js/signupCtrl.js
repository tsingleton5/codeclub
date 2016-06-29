angular.module('codeclub').controller('signupCtrl', function ($scope, authService) {

  $scope.register = function (user) {
    authService.registerUser(user).then(function (response) {
      if (!response.data) {
        alert('unable to create user');
      }
      else {
        alert('User successfully created');
        $scope.newUser = {};
      }
    }).catch(function (error) {
      alert('unable to create user', error)
    })
  }


})
