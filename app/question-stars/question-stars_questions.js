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
				type: "stars",
				question: "Stars question example, rate this between 2 and 5 (1 is invalid)",
				min: 2,
				max: 5
			}
		]
	}
});
