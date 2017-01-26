app.controller('MainCtrl', ['$scope', function($scope, $http) {

	$scope.openNav = function() {
		document.getElementById("mySidenav").style.width = "60%";
   		document.getElementById("mySidenav").style.display = "block";
	}

	$scope.closeNav = function() {
		document.getElementById("mySidenav").style.display = "none";
	}



	$scope.image_column = $('.w3-third');
	$scope.image_row = $('.w3-row-padding');
 	$scope.modal_imagesList = $('#list');
 	$scope.modal_reqs = $('#requirements');
 	$scope.modal = $('#modal');
 	$scope.close_btn = $('.w3-closebtn');


 	$scope.image_column.each(function(index, column) { //for each column, find the image
		var $image = $(column).find('img');
  		$image.click(function() {
  			var img_src = $(this).data("modal-image")
  			var modal_href = $(this).data("modal-href");
  			var requirements = $(this).data("requirements")
  			var img = '<a href="' +modal_href+ '" target="_blank"><img class="mySlides" src="' + img_src + '" style="width:100%"></a>';
  			$scope.modal_imagesList.append(img);
 			$scope.modal_reqs.html(requirements)
 			$scope.modal.fadeIn(500);
 			console.log(requirements);
 		});
	});

 	$scope.closeModal = function() {
 		$scope.modal.fadeOut(500, function() {
  			$(this).find('img').remove();
  			$scope.modal_reqs.find('li').remove();
 		})
 	}

 	$scope.image_row.each(function(index, row) { //there are two rows
 		console.log(row)

 		$(row).find('i').click(function() {
  			$(this).next().find('p:first-child').next('p').show('fold');
  		})
  		$(row).find('p:first-child').click(function() {
 			$(this).next('p').slideToggle();//the p after the first p
  		})
  	});
 
 
/*	$(document).ready(function() {
 	
  
  	


 	//iterate thru each container of images and select the first p
  
  
  		$scope.imageColumn.each(function(index, column) { //for each column, find the image

  			var $image = $(column).find('img');
  			$image.click(function() {
  				var img_src = $(this).data("modal-image")
  				var requirements = $(this).data("requirements")
  				var img = '<a href="' +modal_href+ '" target="_blank"><img class="mySlides" src="' + img_src + '" style="width:100%"></a>';
  				$scope.modalImagesList.append(img);
 				$scope.modalRequirements.html(requirements)
 				$scope.modal.fadeIn(500);
 			});
		});


		$scope.closeBtn.click(function() {
 			$scope.modal.fadeOut(500, function() {
  				$(this).find('img').remove();
  				$scope.modalRequirements.find('li').remove();
  			});
		});


 		$scope.imageRow.each(function(index, row) { //there are two rows
 		
 			$(row).find('img').mouseenter(function() {
  				$(this).next().find('p:first-child').next('p').show('fold');
  			})
  			$(row).find('p:first-child').click(function() {
 				$(this).next('p').slideToggle();
 				$(this).next('p').slideToggle();//the p after the first p
  			})
  		});
 	});


*/


}]);