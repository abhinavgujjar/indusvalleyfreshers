'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')
	.factory('courseProvider', [

		function() {

			var courses = [{
				name: "Physics",
				description: "Physics is the scientific study of matter and energy and how they interact with each other. This energy can take the form of motion, light, electricity, radiation, gravity . . . just about anything, honestly. Physics deals with matter on scales ranging from sub-atomic particles (i.e. the particles that make up the atom and the particles that make up those particles) to stars and even entire galaxies.",
				pic: "bw2iIas.jpg",
				price: 600
			}, {
				name: "Chemistry",
				description: "Chemistry is the branch of science concerned with the substances of which matter is composed, the investigation of their properties and reactions, and the use of such reactions to form new substances.",
				pic: "pNS83DA.jpg",
				price: 750
			}, {
				name: "Mathematics",
				description: "Mathematics is the study of topics such as quantity (numbers), structure, space, and change. There is a range of views among mathematicians and philosophers as to the exact scope and definition of mathematics. Mathematicians seek out patterns[9][10] and use them to formulate new conjectures. Mathematicians resolve the truth or falsity of conjectures by mathematical proof. When mathematical structures are good models of real phenomena, then mathematical reasoning can provide insight or predictions about nature.",
				pic: "bUqDLb9.jpg",
				price: 500
			}, {
				name: "Elements of Mechanical Engineering",
				description: "Mechanical engineering is a discipline of engineering that applies the principles of engineering, physics and materials science for analysis, design, manufacturing, and maintenance of mechanical systems. It is the branch of engineering that involves the production and usage of heat and mechanical power for the design, production, and operation of machines and tools. It is one of the oldest and broadest engineering disciplines.",
				pic: "1RBf5ee.jpg",
				price: 900
			}, {
				name: "Introduction to Philosophy",
				description: "This course will introduce you to some of the most important areas of research in contemporary philosophy. Each week a different philosopher will talk you through some of the most important questions and issues in their area of expertise.",
				pic: "YDYjQRT.gif",
				price: 690
			}, {
				name: "French",
				description: "French or la langue française is a Romance language, belonging to the Indo-European family that is an official language in 29 countries, most of which form la francophonie (in French), the community of French-speaking countries. It is an official language of all United Nations agencies and of a large number of international organizations, including the European Union, NATO, WTO, and the ICRC. In 2011, French was deemed by Bloomberg Businessweek to be one of the top three most useful languages for business, behind English and Chinese, but ahead of Spanish and other European languages",
				pic: "dfkMNGz.jpg",
				price: 700
			}, {
				name: "Introduction to Algorithms",
				description: "This course covers the essential information that every serious programmer needs to know about algorithms and data structures, with emphasis on applications and scientific performance analysis of Java implementations. Part I covers basic iterable data types, sorting, and searching algorithms. An introduction to fundamental data types, algorithms, and data structures, with emphasis on applications and scientific performance analysis of Java implementations. Specific topics covered include: union-find algorithms; basic iterable data types (stack, queues, and bags); sorting algorithms (quicksort, mergesort, heapsort) and applications; priority queues; binary search trees; red-black trees; hash tables; and symbol-table applications.",
				pic: "27XhXJw.png",
				price: 1000
			}];;

			function getCourses() {
				return courses;
			}

			function addCourse(course){
				courses.push(course);
			}

			return {
				getCourses: getCourses,
				add: addCourse
			};

		}
	]);