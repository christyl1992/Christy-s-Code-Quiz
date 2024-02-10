// Event listener to submit initials, save high scores, and restart the quiz when the "Submit" button is clicked
document.getElementById('submit').addEventListener('click', function () {
    saveHighScore();
});

document.getElementById('submit').addEventListener('click', submitInitials);


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
        resetQuiz();

     } else {
        alert("Please enter your initials.");
    }
    };


//Function to save a high score to local storage
    function saveHighScore(initials, score) {
        // Retrieve existing high scores or create an empty array
        const existingHighScores = JSON.parse(localStorage.getItem('highScores')) || [];
        // Add the new high score
        existingHighScores.push({ initials, score });
        // Save the updated high scores back to local storage
        localStorage.setItem('highScores', JSON.stringify(existingHighScores));
    }