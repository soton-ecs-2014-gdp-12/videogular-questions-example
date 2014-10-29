
importScripts("../../app/bower_components/videogular-questions/questions-worker.js");

loadAnnotations({
	"first-question": {
		time: 1,
		questions: [
			{
				id: "first-poll",
				type: "single",
				question: "What is the best cheese?",
				recordsResult: true,
				options: [
					{
						name: "Cheddar"
					},
					{
						name: "Something foreign"
					}
				]
			}
		]
	}
});
