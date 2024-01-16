let time; // Declare outside the functions to make it accessible globally
let timerInterval; // Declare timerInterval globally
let score; // Declare score globally

const element = document.getElementById("start");
element.addEventListener("click", function () {
    time = 75; // Set the initial time value
    timer(); // Start the timer
});


function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
    
    // Hide questions
    document.getElementById('questions').classList.add('hide');
    
    // Show end screen
    document.getElementById('end-screen').classList.remove('hide');
    
    // Calculate score based on time left
    calculateFinalScore();
    
    // Display the final score
    document.getElementById('final-score').textContent = "Your final score is: " + score;
     
    // Get initials from the input field
    const initials = document.getElementById('initials').value;

    // Function to calculate and return the final score
    function calculateFinalScore() {
    score = Math.max(0, time);
    return score;
}
    
    }

function timer() {
    timerInterval = setInterval(function () {
        document.getElementById('time').innerHTML = time;
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
            console.log("Time's up!");
            endQuiz(); // Call endQuiz when the timer reaches 0
        }
    }, 1000);

    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('questions').classList.remove('hide');
    loadQuestion();
}

function subtractTime() {
    time -= 15;
    time = Math.max(time, 0);
    document.getElementById('time').innerHTML = time;
}

// Load questions
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
        endQuiz(); // Call endQuiz when there are no more questions
        // Add logic to end the quiz or display the final score
    }
}








