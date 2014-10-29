'use strict';

angular.module('videogularQuizExample.questionText', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/question-text', {
		templateUrl: 'question-text/question-text.html',
		controller: 'QuestionTextCtrl'
	});
}])

.controller('QuestionTextCtrl', function($scope, $sce) {
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
					url: "question-text/question-text.css"
				},
				data:{
					url: "question-text/simple-test.js"
				}
			}
		}
	};
});
