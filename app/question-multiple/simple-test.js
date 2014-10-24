
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
				]
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
				action: function(result, video) {
					if (result === "Yes") {
						video.setTime(0);
					}
				},
				condition: function(questions, result) {
					// show if the answer to the previous question is not "correct"
					return result !== "correct";
				}
			}
		]
	}
});
