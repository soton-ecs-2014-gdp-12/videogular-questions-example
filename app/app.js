'use strict';

// Declare app level module which depends on views, and components
angular.module('videogularQuizExample', [
  'ngRoute',
  'com.2fdevs.videogular',
  'uk.ac.soton.ecs.videogular.plugins.questions',
  'videogularQuizExample.simpleExample',
  'videogularQuizExample.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/simple-example'});
}]);
