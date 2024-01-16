let sec; // Declare outside the functions to make it accessible globally

const element = document.getElementById("start");
element.addEventListener("click", function () {
    sec = 75; // Set the initial time value
    timer(); // Start the timer
});

function timer() {
    var timerInterval = setInterval(function () {
        document.getElementById('time').innerHTML = sec;
        sec--;

        if (sec < 0) {
            clearInterval(timerInterval);
            console.log("Time's up!");
            // Add logic to handle the end of the quiz
        }
    }, 1000);

    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('questions').classList.remove('hide');
    loadQuestion();
}

function subtractTime() {
    sec -= 15;
    sec = Math.max(sec, 0);
    document.getElementById('time').innerHTML = sec;
}








//Load questions
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    // Update question title
    document.getElementById('question-title').textContent = currentQuestion.question;
    // Update choices
    const choicesContainer = document.getElementById('answers');
    choicesContainer.innerHTML = '';
    // Create and append choice buttons
    currentQuestion.answers.forEach((choice, index) => {
      const choiceButton = document.createElement('button');
      choiceButton.textContent = choice;
      choiceButton.addEventListener('click', function () {
        handleChoiceSelection(choice, currentQuestion.correctAnswer);
      });
      choicesContainer.appendChild(choiceButton);
    });
  }




  function handleChoiceSelection(selectedChoice, correctAnswer) {
    if (selectedChoice === correctAnswer) {
      // Handle correct answer logic
      console.log("Correct!");
    } else {
      // Handle incorrect answer logic 
      console.log("Incorrect!");
      subtractTime();
    }
  
    // Move to the next question or end the quiz when appropriate
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion(); // Load the next question
    } else {
      console.log("Quiz ended!");
      // Add logic to end the quiz or display the final score
    }
  }