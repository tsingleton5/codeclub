angular.module('codeclub').service('myprobsService', function ($http) {


this.getUserProblems = function () {
  return $http({
    method: 'GET',
    url: '/myprobs' + '/5772a996d92ca30a46370390'
  })
  .then(function (response) {
    console.log(response);
    return response.data;
  })
}
this.getUserProblems();

})
