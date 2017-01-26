var app = angular.module('portfolio', ['ngAnimate', 'ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
	//$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: 'views/gallery_one.html',
		controller: 'MainCtrl'
	})
	.when('/gallery_two', {
		templateUrl: 'views/gallery_two.html',
		controller: 'MainCtrl'
	})
	.otherwise('/');

}]);




