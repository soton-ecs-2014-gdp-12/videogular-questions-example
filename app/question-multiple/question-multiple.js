'use strict';

angular.module('videogularQuizExample.questionMultiple', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/question-multiple', {
		templateUrl: 'question-multiple/question-multiple.html',
		controller: 'QuestionMultipleCtrl'
	});
}])

.controller('QuestionMultipleCtrl', function($scope, $sce) {
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
					url: "question-multiple/question-multiple.css"
				},
				data:{
					url: "question-multiple/question-multiple_questions.js"
				}
			}
		}
	};
});
