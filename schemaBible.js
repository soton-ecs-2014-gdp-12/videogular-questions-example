
importScripts("questions-worker.js");

loadAnnotations({
	"first-Annotation": {
		time: 4,
		questions: [
			{
				id: "first-question",
				type: "single",
				question: "Question",
				skipable: true,
				options: [
					{
						name: "Answer 1"
					},
					{
						name: "Answer 2"
					}
				],
				answer: "Answer 1"
			},
			{
				id: "check-first-question",
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
				//runs when a question is answered prior to the 'find next question cycle
				action: function(result, video) {
					if (result === "Yes") {
						//video is one of many objects you may want to interact with (unsure what exactly the others are yet)
						video.setTime(2);
					}
				},
				showCondition: function(questions) {
					return questions["first-question"].isNotCorrect();
				}
			},
			{
				id: "second-question",
				type: "stars",
				question: "Stars question example, rate this between 2 and 5 (1 is invalid)",
				min: 2,
				max: 5,
				recordResult: true,
				showCondition: function(questions) {
					return questions["first-question"].isCorrect() || questions["first-question"].wasSkipped();
				}
			}
		]
	}
});

result schema:
Is defined by the question, dependant upon type
	-single is a string based on the name
	-multiple of an array of name strings
	-who knows what the matching pairs question returns
It is whatever is put into the results part of the WebWorker 
