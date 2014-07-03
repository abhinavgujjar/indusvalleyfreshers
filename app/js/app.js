'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listing', {templateUrl: 'partials/listing.html'});
  $routeProvider.when('/new', {templateUrl: 'partials/new.html'});
  $routeProvider.otherwise({redirectTo: '/listing'});
}]);


angular.module('myApp.controllers', []);