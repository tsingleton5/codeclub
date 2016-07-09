angular.module('codeclub').controller('signupCtrl', function ($scope, authService, $state) {

  $scope.register = function (user) {
    authService.registerUser(user).then(function (response) {
      if (!response.data) {
        alert('unable to create user');
      }
      else {
        alert('User successfully created');
        $state.go('login');
        $scope.newUser = {};
      }
    }).catch(function (error) {
      alert('unable to create user', error)
    })
  }


  $(".mat-input").focus(function(){
    $(this).parent().addClass("is-active is-completed");
  });

  $(".mat-input").focusout(function(){
    if($(this).val() === "")
      $(this).parent().removeClass("is-completed");
    $(this).parent().removeClass("is-active");
  })



})
