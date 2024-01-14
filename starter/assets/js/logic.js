const element = document.getElementById("start");
element.addEventListener("click", timer);

function timer() {
  var sec = 75;
  var timer = setInterval(function () {
    document.getElementById('time').innerHTML = sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
  document.getElementById('start-screen').classList.add('hide');
  // Show questions
  document.getElementById('questions').classList.remove('hide');
  loadQuestion();
}

// load questions to the page
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  // Update question title
  document.getElementById('question-title').textContent = currentQuestion.question;
  // Update choices
  const choicesContainer = document.getElementById('choices');
  choicesContainer.innerHTML = '';
  // Create and append choice buttons
  currentQuestion.answers.forEach((choice, index) => {
    const choiceButton = document.createElement('button');
    choiceButton.textContent = choice;
    choiceButton.addEventListener('click', function () {
      handleChoiceSelection(choice, currentQuestion.correct);
    });
    choicesContainer.appendChild(choiceButton);
  });
}

function handleChoiceSelection(selectedChoice, correctAnswer) {
  if (selectedChoice === correctAnswer) {
    // Handle correct answer logic (e.g., update score, show success message)
    console.log("Correct!");
  } else {
    // Handle incorrect answer logic (e.g., deduct time, show error message)
    console.log("Incorrect!");
  }

  // Move to the next question or end the quiz when appropriate
  // ...

  // For this example, let's move to the next question after a short delay
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion(); // Load the next question
    } else {
      console.log("Quiz ended!");
      // Add logic to end the quiz or display the final score
    }
  }, 1000); // Adjust the delay as needed
}

// You can call the loadQuestion function to display the first question and choices.
loadQuestion();