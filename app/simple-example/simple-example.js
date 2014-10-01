'use strict';

angular.module('videogularQuizExample.simpleExample', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/simple-example', {
    templateUrl: 'simple-example/simple-example.html',
    controller: 'SimpleExampleCtrl'
  });
}])

.controller('SimpleExampleCtrl', [function() {

}]);
