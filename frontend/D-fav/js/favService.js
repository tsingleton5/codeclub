angular.module("codeclub").service("favService", function($http) {

  this.addFavProb = function (problem) {
    // console.log(problem, 'prob');
    return $http({
      method: 'PUT',
      url: '/fav',
      data: {favorite: problem} // expecting an object not a primitive
    })
    .then(function (response) {
      // console.log(response.data);
      return response.data;
    })
  }



//get them
  this.getFavProbs = function (probArray) {
    // console.log(probArray);
    return $http({
      method: 'POST',
      url: '/fav',
      data: {fav: probArray}
    })
    .then(function (response) {
      return response.data;
    })
  }

  this.getQuotes = function () {
    return $http({
      method: 'GET',
      url: 'http://catfacts-api.appspot.com/api/facts?number=4'
    })
    .then(function (response) {
      // console.log(response);
      return response.data;
    })
  }

});
