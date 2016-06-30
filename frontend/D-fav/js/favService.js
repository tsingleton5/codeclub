angular.module("codeclub").service("favService", function($http) {

this.addFavorite = function () {
  return $http({
    method: 'PUT',
    url: '/fav'
  })
  .then(function (response) {
    return response.data;
  })
}

});
