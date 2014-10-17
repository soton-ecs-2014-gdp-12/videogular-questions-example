
importScripts("/app/bower_components/videogular-questions/questions-worker.js");

loadAnnotations({
	"first-question": {
		time: 8,
		questions: [
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
				]
			},
			{
				id: "check-question",
				type: "single",
				question: "Answer incorrect, do you want to review the video",
				options: [
					{
						name: "Yes",
						action: function(video) {
							video.setTime(0);
						}
					},
					{
						name: "No"
					}
				],
				condition: function(questions) {
					// show if the answer to the previous question is not "cheese"
					return questions[0].answer !== "cheese";
				}
			}
		]
	}
});
