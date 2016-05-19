(function(){ 
	'use strict';

	angular.module('manageExpenses').controller('LoginController', function LoginController($scope){
		var vm = this;
		vm.isSignIn = true;
		vm.openSignIn = function(status){
			vm.isSignIn = status;
		}
	});
})();