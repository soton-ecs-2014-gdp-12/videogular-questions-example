'use strict';

angular.module('videogularQuizExample.simpleExample', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/simple-example', {
		templateUrl: 'simple-example/simple-example.html',
		controller: 'SimpleExampleCtrl'
	});
}])

.controller('SimpleExampleCtrl', function($scope, $sce) {
	$scope.config = {
		sources: [
			{src: $sce.trustAsResourceUrl("video.ogg"), type: "video/ogg"}
		],
		theme: {
			url: "simple-example/videogular.css"
		},
		plugins: {
			questions: {
				theme: {
					url: "simple-example/videogular-questions.css"
				},
				data:{
					url: "simple-example/simple-test.json",
				}
			}
		}
	};
});
