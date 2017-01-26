var app = angular.module('portfolio', ['ngAnimate', 'ngRoute']);


/*app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'MainCtrl'
	})
	.otherwise({
		redirectTo: 'index.html'
	});

}]);*/


'use strict'


$(document).ready(function() {
	

	var $imageRow = $('.w3-row-padding')
	var $imageColumn =$('.w3-third')
	var $modalImagesList = $('#list')
	var $modalRequirements = $('#requirements')
	var $modal = $('#modal')
	var $closeBtn = $('.w3-closebtn')


	
//iterate thru each container of images and select the first p


	$imageColumn.each(function(index, column) { //for each of the 6 columns, find the image
		console.log(column)
		var $image = $(column).find('img'); //need $() around column

		$image.click(function() {
			var img_src = $(this).data("modal-image");
			var modal_href = $(this).data("modal-href");
			var requirements = $(this).data("requirements");
			var img = '<a href="' +modal_href+ '" target="_blank"><img class="mySlides" src="' + img_src + '" style="width:100%"></a>';
			$modalImagesList.append(img);
			$modalRequirements.html(requirements)
			$modal.fadeIn(500);
		})
	})
	$closeBtn.click(function() {
		$modal.fadeOut(500, function() {
			$(this).find('img').remove();
			$modalRequirements.find('li').remove();
		})
	})


	$imageRow.each(function(index, row) { //there are two rows
		//console.log(row);
		$(row).find('img').mouseenter(function() { //3 images per row
			$(this).next().find('p:first-child').next('p').show('fold');
		})
		$(row).find('p:first-child').click(function() {
			$(this).next('p').slideToggle();//the p after the first p
		})
	})


//images inside of side navbar
	$('#first-img').click(function() {
		$(this).fadeToggle(function() {
			$('#second-img').fadeIn();
		})
	})
	$('#second-img').click(function() {
		$(this).fadeToggle(function() {
			$('#third-img').fadeIn();
		})
	})
	$('#third-img').click(function() {
		$(this).fadeToggle(function() {
			$('#first-img').fadeIn();
		})
	}) 
})
