angular.module('codeclub').service('myprobsService', function ($http) {


this.getUserProblems = function () {
  return $http({
    method: 'GET',
    url: '/myprobs'
  })
  .then(function (response) {
    console.log(response);
    return response.data;
  })
}
// this.getUserProblems();


this.createNewProblem = function (prob) {
  return $http({
    method: 'POST',
    url: '/myprobs',
    data: prob
  })
  .then(function (response) {
    console.log(response);
    return response.data;
  })
}

//ending
})
