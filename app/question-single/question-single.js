'use strict';

angular.module('videogularQuizExample.questionSingle', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/question-single', {
		templateUrl: 'question-single/question-single.html',
		controller: 'QuestionSingleCtrl'
	});
}])

.controller('QuestionSingleCtrl', function($scope, $sce) {
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
					url: "question-single/question-single.css"
				},
				data:{
					url: "question-single/simple-test.js"
				}
			}
		}
	};
});
