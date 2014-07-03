angular.module('myApp.controllers')
	.controller('listingController', ['$scope', 'settings', 'courseProvider', '$location',
		function($scope, settings, courseProvider, $nonsense) {

			$scope.maxLength = settings.maxDescriptionLength;
			$scope.maxResults = settings.maxResults;
			$scope.courses = courseProvider.getCourses();

			$scope.showCourseDetails = function(course){
				courseProvider.selectedCourse = course;
				$nonsense.url('/details');
			}
		}
	]);