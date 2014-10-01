'use strict';

// Declare app level module which depends on views, and components
angular.module('videogularQuizExample', [
  'ngRoute',
  'videogularQuizExample.view1',
  'videogularQuizExample.view2',
  'videogularQuizExample.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
