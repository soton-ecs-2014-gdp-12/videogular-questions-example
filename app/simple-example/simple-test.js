
importScripts("../../app/bower_components/videogular-questions/questions-worker.js");

loadAnnotations({
	"first-question": {
		time: 4,
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
					// show if the answer to the previous question is not "cheese"
					return result !== "cheese";
				}
			}
		]
	}
});
