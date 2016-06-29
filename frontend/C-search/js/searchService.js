angular.module('codeclub').service('searchService', function ($http) {

this.getProblems = function () {
  return $http({
    method: 'GET',
    url: '/search'
  })
  .then(function (response) {
    //console.log(response);
    return response.data;
  })
}
// this.getProblems();
})
