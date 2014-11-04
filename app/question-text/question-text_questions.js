/* jshint worker: true */
'use strict';

importScripts("../../app/bower_components/videogular-questions/questions-worker.js");
	/* global loadAnnotations */

loadAnnotations({
	"first-question": {
		time: 1,
		questions: [
			{
				id: "first-question",
				type: "text",
				question: "Text question example",
				options: [
					{name: "none"}
				],
				correctAnswer: "correct"
			}
		]
	}
});
