let time; // Declare outside the functions to make it accessible globally
let timerInterval; // Declare timerInterval globally
let score; // Declare score globally

const element = document.getElementById("start");
element.addEventListener("click", function () {
    time = 75; // Set the initial time value
    timer(); // Start the timer
});

 // Function to calculate and return the final score
 function calculateFinalScore() {
    score = Math.max(0, time);
    return score;
    calculateFinalScore();
 }


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


// Event listener to submit initials, save high scores, and restart the quiz when the "Submit" button is clicked

document.getElementById('submit').addEventListener('click', function () {
    submitInitials ();
});


//Function to save a high score to local storage
function saveHighScore(initials, score) {
    // Retrieve existing high scores or create an empty array
    const existingHighScores = JSON.parse(localStorage.getItem('highScores')) || [];
    // Add the new high score
    existingHighScores.push({ initials, score });
    // Save the updated high scores back to local storage
    localStorage.setItem('highScores', JSON.stringify(existingHighScores));   

}


//Reset the quiz
function resetQuiz() {
    // Reset any variables or elements needed for the quiz to start again
    time = 0; // Reset the time, for example
    currentQuestionIndex = 0; // Reset the question index
    // ... Add any other reset logic here

    // Optional: Redirect to the start screen or another page
    document.getElementById('start').classList.remove('hide');
    document.getElementById('questions').classList.add('hide');
    // Do not hide the end-screen 

    window.location.href = "/starter/highscores.html"
};




//Function to submit initials and save score to high scores
function submitInitials() {
    const initials = document.getElementById('initials').value;

    if (initials.trim() !== "") {
        // Save the high score and initials to local storage
        const finalScore = calculateFinalScore();
        saveHighScore(initials, finalScore);

        // Log the initials and high score
        console.log(`Initials: ${initials}, High Score: ${finalScore}`);

    //Reset the quiz
    resetQuiz()
     } else {
        alert("Please enter your initials.");
    }


}
  

// debugger
// document.getElementById('submit').addEventListener('click', submitInitials);





   
