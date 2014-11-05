/* jshint worker: true */
'use strict';

importScripts("../../app/bower_components/videogular-questions/questions-worker.js");
	/* global loadAnnotations */

loadAnnotations({
	"first-question": {
		time: 18,
		items: [
			{
				id: "name",
				type: "single",
				question: "The Caesar Cipher is a type of...",
				options: [
					{
						name: "Substitution Cipher"
					},
					{
						name: "Alphabet Code"
					},
					{
						name: "Polyalphabetic Cipher"
					}
				],
				correctAnswer: "Substitution Cipher"
			},
			{
				id: "check-name",
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
					if (questions.get("check-name").response === "Yes") {
						video.setTime(4);
					}
				},
				condition: function(questions, result) {
					return questions.get("name").isNotCorrect();
				}
			}
		]
	},
	"second-question": {
		time: 100,
		items: [
			{
				id: "time",
				type: "single",
				question: "How long did the Caesar Cipher remain unbroken...",
				options: [
					{
						name: "50 years"
					},
					{
						name: "1000 years"
					},
					{
						name: "800 years"
					}
				],
				correctAnswer: "800 years"
			},
			{
				id: "check-time",
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
					if (questions.get("check-time").response === "Yes") {
						video.setTime(90);
					}
				},
				condition: function(questions, result) {
					return questions.get("time").isNotCorrect();
				}
			}
		]
	}
});
