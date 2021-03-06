/* jshint worker: true */
'use strict';

importScripts("../../app/bower_components/videogular-questions/questions-worker.js");
	/* global loadAnnotations */

loadAnnotations({
	"first-question": {
		time: 1,
		items: [
			{
				id: "first-question",
				type: "single",
				question: "What is the moon made of?",
				options: [
					{
						name: "cheese"
					},
					{
						name: "cheeese"
					},
					{
						name: "cheeeeeese"
					}
				],
				correctAnswer: "cheese"
			},
			{
				id: "check-question",
				type: "single",
				question: "Answer incorrect, do you want to review the video",
				options: [
					{
						name: "Yes"
					},
					{
						name: "No"
					}
				],
				action: function(questions, video) {
					if (questions.get("check-question").response === "Yes") {
						video.setTime(0);
					}
				},
				condition: function(questions) {
					return questions.get("first-question").isNotCorrect();
				}
			}
		]
	}
});
