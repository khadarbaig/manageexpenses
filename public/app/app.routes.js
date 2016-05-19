(function(){ 
	'use strict';

	angular.module('manageExpenses')
	.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('root', {
      url: '',
      abstract: true,
      views: {
        'footer': {
        	templateUrl: 'templates/footer.html'
        }
      }
    });
    $stateProvider.state('root.login', {
      url: '/login',
      views: {
      	'header@': {
      		templateUrl: 'templates/login-header.html'
      	},
        'main@': {        	
        	templateUrl: 'templates/login.html',
        	controller: 'LoginController as login'
        }
      }
    });
	}).run(function($state) {
    $state.transitionTo('root.login');
	});
})();