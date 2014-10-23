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
		autoHide: false,
		autoHideTime: 3000,
		sources: [
			{src: $sce.trustAsResourceUrl("video.ogg"), type: "video/ogg"},
			{src: $sce.trustAsResourceUrl("video.mov"), type: "video/mov"},
			{src: $sce.trustAsResourceUrl("video.avi"), type: "video/avi"},
			{src: $sce.trustAsResourceUrl("video.mp4"), type: "video/mp4"},
			{src: $sce.trustAsResourceUrl("video.m4v"), type: "video/m4v"}
		],
		theme: {
			url: "videogular.css"
		},
		plugins: {
			questions: {
				theme: {
					url: "simple-example/simple-example.css"
				},
				data:{
					url: "simple-example/simple-test.js",
				}
			}
		}
	};
});
