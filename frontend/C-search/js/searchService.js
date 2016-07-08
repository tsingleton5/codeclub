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

this.addFavProb = function (problem) {
  console.log(problem);
  return $http({
    method: 'PUT',
    url: '/fav',
    data: {favorite: problem} // expecting an object not a primitive
  })
  .then(function (response) {
    return response.data;
  })
}

// this.catQuote = function () {
//   return $http({
//     method: 'GET',
//     url: 'http://catfacts-api.appspot.com/api/facts?number=4'
//   })
//   .then(function (response) {
//     console.log(response);
//     return response
//   })
// }
// this.catQuote();

//ending
})
