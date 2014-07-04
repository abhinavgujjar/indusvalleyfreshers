angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'courseProvider', 'settings', '$routeParams', 
		function($scope, courseProvider, settings, $routeParams) {

			var courseId = $routeParams.id;

			courseProvider.get(courseId).then(function(course){
				$scope.course = course;
			});

			$scope.maxLength = settings.maxDescriptionLength;


		}
	]);