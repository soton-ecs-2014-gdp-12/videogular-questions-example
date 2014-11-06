/* jshint worker: true */
'use strict';

importScripts("../../app/bower_components/videogular-questions/questions-worker.js");
	/* global loadAnnotations */

loadAnnotations({
	"first-question": {
		time: 1,
		items: [
			{
				id: "first",
				type: "single",
				question: "Single question example. Correct is the correct answer",
				options: [
					{
						name: "correct"
					},
					{
						name: "incorrect"
					}
				],
				correctAnswer: "correct"
			},
			{
				id: "check-first",
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
					if (questions.get("check-first").response === "Yes") {
						video.setTime(0);
					}
				},
				condition: function(questions, result) {
					return questions.get("first").isNotCorrect();
				}
			}
		]
	}
});
