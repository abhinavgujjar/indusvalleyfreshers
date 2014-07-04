'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')
	.factory('courseProvider', ['$http', '$q', '$resource', 'parseSettings',

		function($http, $q, $resource, parseSettings) {

			// var jamRef = $resource('https://api.parse.com/1/classes/jams/:id', null, {
			// 	post: {
			// 		method: 'POST',
			// 		isArray: false,
			// 		headers: parseHeaders
			// 	},
			// 	query: {
			// 		method: 'GET',
			// 		isArray: false,
			// 		headers: parseHeaders,
			// 		transformResponse: function(data) {
			// 			var raw = angular.fromJson(data);
			// 			var result = {};

			// 			angular.forEach(raw.results, function(item, index) {
			// 				result[index] = item;
			// 			});

			// 			return result;
			// 		}
			// 	},
			// 	get: {
			// 		method: 'GET',
			// 		isArray: false,
			// 		headers: parseHeaders
			// 	},
			// 	update: {
			// 		method: 'PUT',
			// 		isArray: false,
			// 		headers: parseHeaders
			// 	}
			// });

			var courseRef = $resource('https://api.parse.com/1/classes/course/:id', null, {
				get : {
					method: 'GET',
					headers: parseSettings,
					isArray: true,
					transformResponse : function(data){
						var raw = angular.fromJson(data);
						return raw.results;
					}
				},
				create: {
					method : 'POST',
					isArray : false,
					headers: parseSettings
				}
			})


			function getCourses() {
				return courseRef.get();
			}

			function addCourse(course) {
				courseRef.create(course);
			}

			function getCourse(id) {

				return courseRef.get({
					id: id
				});

			}

			return {
				getCourses: getCourses,
				add: addCourse,
				get: getCourse
			};

		}
	]);