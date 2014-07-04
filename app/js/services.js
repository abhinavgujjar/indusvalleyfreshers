'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
.value('settings', {
	maxDescriptionLength : 200,
	maxResults : 20
}).value('parseSettings', {
	'X-Parse-Application-Id' : '',
	'X-Parse-REST-API-Key' : '',
});
