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
				type: "range",
				question: "Select a range",
				min: 1,
				max: 10,
				step: 1
			}
		]
	}
});
