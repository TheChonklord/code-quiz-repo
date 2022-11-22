const btn = document.getElementById('start-button')
const timer = document.getElementById('timer');
var seconds = 100




// timer function with timer end 
function setTime() {
var timerInterval = setInterval(function() {
    seconds--;
    timer.textContent = seconds ;

    if(seconds ===0) {
        clearInterval(timerInterval);
    }
}, 1000);
}

    
function startQuiz() {
    
}


    





// make button disappear on click and display the timer, and starts the quiz 
btn.addEventListener('click', function() {
    btn.style.display = 'none';
    setTime();
    startQuiz();
});