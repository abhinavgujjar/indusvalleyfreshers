'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')
	.factory('courseProvider', ['$http',

		function($http) {


			function getCourses() {
				return $http.get('data/courses.json');
			}

			function addCourse(course) {
				courses.push(course);
			}

			function getCourse(id) {
				var targetCourse;

				angular.forEach(courses, function(item, index) {
					if (item.id === id) {
						targetCourse = item;
					}
				})

				return targetCourse;
			}

			return {
				getCourses: getCourses,
				add: addCourse,
				get: getCourse
			};

		}
	]);