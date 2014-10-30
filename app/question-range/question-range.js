'use strict';

angular.module('videogularQuizExample.questionRange', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/question-range', {
		templateUrl: 'question-range/question-range.html',
		controller: 'QuestionRangeCtrl'
	});
}])

.controller('QuestionRangeCtrl', function($scope, $sce) {
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
					url: "question-range/question-range.css"
				},
				data:{
					url: "question-range/simple-test.js"
				}
			}
		}
	};
});
