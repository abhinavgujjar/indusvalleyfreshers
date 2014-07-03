angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'courseProvider', 'settings', '$routeParams', 
		function($scope, courseProvider, settings, $routeParams) {

			var courseId = $routeParams.id;

			$scope.course = courseProvider.get(courseId);

			$scope.maxLength = settings.maxDescriptionLength;

			// $scope.course = courseProvider.selectedCourse;
		}
	]);