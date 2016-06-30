angular.module('codeclub').service('myprobsService', function ($http) {


this.getUserProblems = function () {
  return $http({
    method: 'GET',
    url: '/myprobs'
  })
  .then(function (response) {
    // console.log(response);
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


this.editProblem = function (problem) {
  console.log('hit');
  return $http({
    method: 'PUT',
    url: '/myprobs',
    data: problem
  })
  .then(function (response) {
    return response.data;
  })
}


this.deleteProblem = function (id) {
  console.log('delete ser');
  return $http({
    method: 'DELETE',
    url: '/myprobs/' + id
  })
  .then(function (response) {
    return response.data;
  })
}




//ending
})
