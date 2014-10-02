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
			{src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
			{src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
			{src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
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
					url: "simple-example/simple-test.js"
				}
			}
		}
	};
});
