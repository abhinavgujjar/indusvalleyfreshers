'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')
	.factory('courseProvider', ['$http', '$q',

		function($http, $q) {


			function getCourses() {
				return $http.get('data/courses.json');
			}

			function addCourse(course) {
				courses.push(course);
			}

			function getCourse(id) {

				var defer = $q.defer();

				$http.get('data/courses.json').success(function(courses) {

					angular.forEach(courses, function(item, index) {
						if (item.id === id) {
							defer.resolve(item);
						}
					})

				});


				return defer.promise;
			}

			return {
				getCourses: getCourses,
				add: addCourse,
				get: getCourse
			};

		}
	]);