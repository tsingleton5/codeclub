angular.module('codeclub', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

$stateProvider
.state('login', {
  url: '/login',
  templateUrl: 'A-login/loginTmpl.html'
})
.state('signup', {
  url: '/signup',
  templateUrl: 'B-signup/signupTmpl.html'
})

.state('search', {
  url: '/search',
  templateUrl: 'C-search/searchTmpl.html'
})
.state('fav', {
  url: '/fav',
  templateUrl: 'D-fav/favTmpl.html'
})
.state('myprobs', {
  url: '/myprobs',
  templateUrl: 'E-myprobs/myprobsTmpl.html'
})



$urlRouterProvider.otherwise('/login');


//ending
})
