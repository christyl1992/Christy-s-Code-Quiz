





// Function to display high scores
function displayHighScores() {
  
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const highScoresList = document.getElementById('highscoresol');
    highScoresList.innerHTML = '';

    highScores.forEach(score => {
        
        const listItem = document.createElement('li');

        listItem.textContent = `Initials: ${score.initials}, Score: ${score.score}`;

        highScoresList.appendChild(listItem);
    });

    // document.getElementById('highscores').classList.remove('hide');
    // document.getElementById('end-screen').classList.add('hide');
}

displayHighScores();