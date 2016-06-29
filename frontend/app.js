angular.module('codeclub', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

// add controllers ...

$stateProvider
.state('login', {
  url: '/login',
  templateUrl: 'A-login/loginTmpl.html'
})
.state('signup', {
  url: '/signup',
  templateUrl: 'B-signup/signupTmpl.html'
})
// from here below is the actual app
.state('search', {
  url: '/search',
  templateUrl: 'C-search/searchTmpl.html',
  controller: 'searchCtrl'
})
.state('fav', {
  url: '/fav',
  templateUrl: 'D-fav/favTmpl.html'
})
.state('myprobs', {
  url: '/myprobs',
  templateUrl: 'E-myprobs/myprobsTmpl.html',
  controller: 'myprobsCtrl'
})
.state('account', {
  url: '/account',
  templateUrl: 'F-account/accountTmpl.html'
})



$urlRouterProvider.otherwise('/login');


//ending
})
