angular.module('codeclub').service('accountService', function ($http) {

this.updateUser = function (userObj) {
  //console.log(userObj)
  return $http({
    method: 'PUT',
    url: '/account',
    data: userObj
  })
  .then(function (response) {
    return response;
  })
}

this.logout = function() {
  return $http({
    method: 'GET',
    url: '/logout'
  }).then(function(response) {
    // console.log(response);
    return response;
  });
};

})
