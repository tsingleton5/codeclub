angular.module('codeclub', ['ui.router', 'angularModalService'])
.config(function ($stateProvider, $urlRouterProvider) {

// add controllers ...

$stateProvider
.state('login', {
  url: '/login',
  templateUrl: 'A-login/loginTmpl.html',
  controller: 'loginCtrl'
})
.state('signup', {
  url: '/signup',
  templateUrl: 'B-signup/signupTmpl.html',
  controller: 'signupCtrl'
})
// from here below is the actual app
.state('search', {
  url: '/search',
  templateUrl: 'C-search/searchTmpl.html',
  controller: 'searchCtrl',
  resolve: {
    user: function (authService, $state) {
      return authService.getCurrentUser().then(function (response) {
        if(!response.data) {
          $state.go('login')
        }
        return response.data;
      }).catch(function (error) {
        $state.go('login');
      })
    }
  }
})
.state('fav', {
  url: '/fav',
  templateUrl: 'D-fav/favTmpl.html',
  controller: 'favCtrl',
  resolve: {
    user: function (authService, $state) {
      return authService.getCurrentUser().then(function (response) {
        if(!response.data) {
          $state.go('login')
        }
        return response.data;
      }).catch(function (error) {
        $state.go('login');
      })
    }
  }
})
.state('myprobs', {
  url: '/myprobs',
  templateUrl: 'E-myprobs/myprobsTmpl.html',
  controller: 'myprobsCtrl',
  resolve: {
    user: function (authService, $state) {
      return authService.getCurrentUser().then(function (response) {
        if(!response.data) {
          $state.go('login')
        }
        return response.data;
      }).catch(function (error) {
        $state.go('login');
      })
    }
  }
})
.state('account', {
  url: '/account',
  templateUrl: 'F-account/accountTmpl.html',
  controller: 'accountCtrl',
  resolve: {
    user: function (authService, $state) {
      return authService.getCurrentUser().then(function (response) {
        if(!response.data) {
          $state.go('login')
        }
        return response.data;
      }).catch(function (error) {
        $state.go('login');
      })
    }
  }

})



$urlRouterProvider.otherwise('/login');


//ending
})
