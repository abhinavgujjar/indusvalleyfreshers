angular.module('myApp.controllers')
	.controller('newController', ['$scope', 'courseProvider', '$location', 
		function($scope, courseProvider, $location) {

			$scope.addCourse = function(course, newCourseForm) {
				if (newCourseForm.$invalid) {
					alert('validation failed');
				} else {
					courseProvider.add(course);
					$location.url('/listing');
					console.log('saving course : ' + course.name);
				}
			}

		}
	]);