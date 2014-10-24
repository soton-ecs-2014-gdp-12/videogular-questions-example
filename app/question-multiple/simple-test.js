
importScripts("../../app/bower_components/videogular-questions/questions-worker.js");

loadAnnotations({
	"first-question": {
		time: 1,
		questions: [
			{
				id: "first-question",
				type: "multiple",
				question: "Multiple question example. Correct and correct2 are the correct answers",
				options: [
					{
						name: "correct"
					},
					{
						name: "correct2"
					},
					{
						name: "incorrect"
					}
				],
				min: 1,
				max: 2
			}
		]
	}
});
