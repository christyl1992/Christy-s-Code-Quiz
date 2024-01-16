document.getElementById('submit').addEventListener('click', function () {
    endQuiz() ;

    // Show the end-screen when the Submit button is clicked
    document.getElementById('end-screen').classList.remove('hide');


// Reset the quiz
function resetQuiz() {
    // Reset any variables or elements needed for the quiz to start again
    time = 0; // Reset the time, for example
    currentQuestionIndex = 0; // Reset the question index
    // ... Add any other reset logic here

    // Optional: Redirect to the start screen or another page
    document.getElementById('start').classList.remove('hide');
    document.getElementById('questions').classList.add('hide');
    // Do not hide the end-screen
});



//Function to submit initials and save score to high scores
function submitInitials() {
    const initials = document.getElementById('initials').value;

    if (initials.trim() !== "") {
        // Save the high score and initials to local storage
        const finalScore = calculateFinalScore();
        saveHighScore(initials, finalScore);

        // Log the initials and high score (you can remove this line if you don't need it)
        console.log(`Initials: ${initials}, High Score: ${finalScore}`);

        // Update the displayed high scores
        displayHighScores();

        // Reset the quiz
        resetQuiz();
    } else {
        alert("Please enter your initials.");
    }
}



// Event listener to submit initials and save high scores when the "Submit" button is clicked
document.getElementById('submit').addEventListener('click', function () {
    submitInitials();
});


// Function to display high scores on the page
function displayHighScores() {
    const highScoresList = document.getElementById('highscores');
    // Retrieve high scores from local storage
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Sort high scores in descending order by score
    highScores.sort((a, b) => b.score - a.score);

    // Display high scores on the page
    highScores.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${entry.initials}: ${entry.score}`;
        highScoresList.appendChild(listItem);
    });
}

// Function to save a high score to local storage
function saveHighScore(initials, score) {
    // Retrieve existing high scores or create an empty array
    const existingHighScores = JSON.parse(localStorage.getItem('highScores')) || [];
    // Add the new high score
    existingHighScores.push({ initials, score });
    // Save the updated high scores back to local storage
    localStorage.setItem('highScores', JSON.stringify(existingHighScores));
}

// Event listener to display high scores when the page loads
document.addEventListener('DOMContentLoaded', displayHighScores);











