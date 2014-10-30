'use strict';

angular.module('videogularQuizExample.pollSimple', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/poll-simple', {
		templateUrl: 'poll-simple/poll-simple.html',
		controller: 'PollSimpleCtrl'
	});
}])

.controller('PollSimpleCtrl', function($scope, $sce) {
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
					url: "poll-simple/poll-simple.css"
				},
				data:{
					url: "poll-simple/poll-test.js"
				},
				pollServer:{
					url: "http://127.0.0.1:5000/vote"
				}
			}
		}
	};
});
