
var questions = [
	{
		question: "Who is the sexiest coding teacher EVER?",
		answers: {
            choices: ["Moose", "Alexandre", "Gazpacho"],
			// a: 'Moose',
			// b: 'Alexandre',
			// c: 'Gazpacho'
		},
	}
];


let currentQuestionIndex = 0;


function loadQuestion() {
    const currentQuestion = questions[0];
// Update question title
    document.getElementById('question-title').textContent = currentQuestion.question;
// Update choices 
  const choicesContainer = document.getElementById('choices');
  choicesContainer.innerHTML = '';
// Create and append choice buttons
  currentQuestion.answers.choices.forEach((choice, index) => {
    const choiceButton = document.createElement('button');
    choiceButton.textContent = choice;
// Add event listener 
    choicesContainer.appendChild(choiceButton);
    });
}