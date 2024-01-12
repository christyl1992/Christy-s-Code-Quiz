const element = document.getElementById("start");
element.addEventListener("click", timer);
function timer(){
    var sec = 75;
    var timer = setInterval(function(){
        document.getElementById('time').innerHTML= sec;
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






