'use strict';

/* Directives */

var settings = {
	maxDescriptionLength : 50,
	maxResults : 5
};

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
