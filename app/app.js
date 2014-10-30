'use strict';

// Declare app level module which depends on views, and components
angular.module('videogularQuizExample', [
  'ngRoute',
  'com.2fdevs.videogular',
  'com.2fdevs.videogular.plugins.controls',
  'uk.ac.soton.ecs.videogular.plugins.questions',
  'uk.ac.soton.ecs.videogular.plugins.cuepoints',
  'uk.ac.soton.ecs.videogular.plugins.analytics',
  'videogularQuizExample.simpleExample',
  'videogularQuizExample.caesarExample',
	'videogularQuizExample.questionSingle',
	'videogularQuizExample.questionMultiple',
	'videogularQuizExample.questionStars',
	'videogularQuizExample.questionText',
	'videogularQuizExample.questionRange',
  'videogularQuizExample.pollSimple',
  'videogularQuizExample.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/simple-example'});
}]);
