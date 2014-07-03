'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')
	.factory('courseProvider', [
		function() {

			var courses = [{
				name: 'Introduction to Programming',
				description: 'An introduction to the theory and practice of computer programming, the emphasis of this course is on techniques of program development within the object-oriented paradigm. Topics include control structures, objects, classes, inheritance, simple data structures, and basic concepts of software development. Currently, Java is the programming language used in the course. This course has a required lab component, and is required for the major and minor in computer science. (Offered every semester)',
				pic: 'http://i.imgur.com/JmGNipQ.png',
				price: 300,
				rating: 10
			}, {
				name: 'Data Structures and Algorithms',
				description: 'This course continues the study of data structures and algorithms, focusing on algorithm design and analysis and the relationships between data representation, algorithm design, and program efficiency. Topics include advanced data structures, key algorithm design techniques, analysis of the time and space requirements of algorithms, and characterizing the difficulty of solving a problem. Concrete examples will be drawn from a variety of domains, such as algorithms for graphs and networks, cryptography, data compression, strings, geometric problems, indexing and search, numerical problems, and parallel computation. This course is required for the major in computer science. Prerequisites: CPSC 225; CPSC 229 is recommended. (Offered annually)',
				pic: 'http://i.imgur.com/JqSysC9.jpg',
				price: 500,
				rating: 4
			}, {
				name: 'Robotics',
				description: 'An advanced study of the electronics, mechanics, sensors, and programming of robots. Emphasis is placed on programming robots which investigate, analyze, and interact with the environment. Topics may include mobile robots, legged robots, computer vision, and various approaches to robot intelligence. Prerequisite: CPSC 226 or permission of the instructor. (Offered alternate years)',
				pic: 'http://i.imgur.com/LhNjJ5O.jpg',
				price: 1000,
				rating: 7
			}, {
				name: 'Artificial Intelligence',
				description: 'This course serves as an introduction to some of the major problems and techniques in the field of artificial intelligence. Artificial intelligence generally deals with problems that are too large, complex, or poorly-specified to have exact algorithmic solutions. Topics to be covered might include knowledge representation, natural language processing, machine learning, neural nets, case-based reasoning, intelligent agents, and artificial life. Prerequisite: CPSC 327 or 329. (Offered occasionally)',
				pic: 'http://i.imgur.com/6QS5NKk.jpg',
				price: 100,
				rating: 3
			}, ];

			function getCourses() {
				return courses;
			}

			return {
				getCourses: getCourses
			};

		}
	]);