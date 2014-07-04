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

				var deferred = $q.defer();

				var targetCourse;

				var courses;
				$http.get('data/courses.json').success(function(data) {
					courses = data;

					angular.forEach(courses, function(item, index) {
						if (item.id === id) {
							targetCourse = item;

							deferred.resolve(targetCourse);
						}
					})
				});

				return deferred.promise;
			}

			return {
				getCourses: getCourses,
				add: addCourse,
				get: getCourse
			};

		}
	]);