	// create the module and name it scotchApp
	var icvApp = angular.module('icvApp', ['ngRoute','ui.bootstrap']);

	// configure our routes
	icvApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'public/views/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'public/views/about.html',
				controller  : 'aboutController'
			})
			// route for the contact page
			.when('/contact', {
				templateUrl : 'public/views/contact.html',
				controller  : 'contactController'
			})
			.when('/addguest', {
				templateUrl : 'public/views/guest.html',
				controller  : 'guestController'
			})
			.when('/login', {
				templateUrl : 'public/views/login.html',
				controller  : 'loginController'
			})

			.otherwise({ redirectTo: '/' });
	}).run(['$rootScope', '$http', '$browser', '$timeout', "$route",  '$location', function ($scope, $http, $browser, $timeout, $route, $location) {
		console.log("yay")
		
	}]);