'use strict';

angular.module('videogularQuizExample.caesarExample', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/caesar-example', {
		templateUrl: 'caesar-example/caesar-example.html',
		controller: 'CaesarExampleCtrl'
	});
}])

.controller('CaesarExampleCtrl', function($scope, $sce) {
	$scope.config = {
		autoHide: false,
		autoHideTime: 3000,
		sources: [
			{src: $sce.trustAsResourceUrl("caesar-cipher.mp4"), type: "video/mp4"},
		],
		theme: {
			url: "videogular.css"
		},
		plugins: {
			questions: {
				theme: {
					url: "caesar-example/caesar-example.css"
				},
				data:{
					url: "caesar-example/caesar-example_questions.js",
				},
				pollServer:{
					url: "http://127.0.0.1:5000/"
				}
			},
			cuepoints: {
				theme: {
					url: "bower_components/videogular-cuepoints/cuepoints.css",
				},
			},
			analytics: {
				servers: [
					"http://localhost:5001/"
				]
			}
		}
	};
});
