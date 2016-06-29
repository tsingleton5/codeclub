angular.module('codeclub').service('authService', function ($http) {

this.login = function (user) {
  return $http({
    method: 'POST',
    url: '/login',
    data: user
  })
  .then(function (response) {
    return response
  })
}

this.logout = function () {
  return $http({
    method: 'GET',
    url: '/logout'
  })
  .then(function (response) {
    return response;
  })
}

this.getCurrentUser = function () {
  return $http({
    method: 'GET',
    url: '/me'
  })
  .then(function (response) {
    return response;
  })
}

this.registerUser = function (user) {
  return $http({
    method: 'POST',
    url: '/signup',
    data: user
  })
  .then(function (response) {
    return response;
  })
}

this.editUser = function (id, user) {
  return $http({
    method: 'PUT',
    url: '/user/' + id,
    data: user
  })
  .then(function (response) {
    return response;
  })
}

//ending
})
