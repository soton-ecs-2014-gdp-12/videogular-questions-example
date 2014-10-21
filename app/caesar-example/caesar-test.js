
importScripts("../../app/bower_components/videogular-questions/questions-worker.js");

loadAnnotations({
	"first-question": {
		time: 18,
		questions: [
			{
				id: "name",
				type: "single",
				question: "The Caesar Cipher is a type of...",
				options: [
					{
						name: "Substitution Cipher"
					},
					{
						name: "Alphabet Code"
					},
					{
						name: "Polyalphabetic Cipher"
					}
				]
			},
			{
				id: "check-name",
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
						video.setTime(4);
					}
				},
				condition: function(questions, result) {
					// show if the answer to the previous question is not "cheese"
					return result !== "Substitution Cipher";
				}
			}
		]
	},
	"second-question": {
		time: 100,
		questions: [
			{
				id: "time",
				type: "single",
				question: "How long did the Caesar Cipher remain unbroken...",
				options: [
					{
						name: "50 years"
					},
					{
						name: "1000 years"
					},
					{
						name: "800 years"
					}
				]
			},
			{
				id: "check-time",
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
						video.setTime(90);
					}
				},
				condition: function(questions, result) {
					// show if the answer to the previous question is not "cheese"
					return result !== "800 years";
				}
			}
		]
	}
});
