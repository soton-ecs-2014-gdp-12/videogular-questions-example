/* jshint worker: true */
'use strict';

importScripts("../../app/bower_components/videogular-questions/questions-worker.js");
	/* global loadAnnotations */

loadAnnotations({
	"first-question": {
		time: 1,
		items: [
			{
				id: "first-poll",
				type: "single",
				question: "What is the best cheese?",
				recordsResponse: true,
				options: [
					{
						name: "Cheddar"
					},
					{
						name: "Something foreign"
					}
				]
			},
			{
				id: "results-shiz",
				questionId : "first-poll",
			
			}
		]
	}
});
