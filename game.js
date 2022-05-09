var textPannel = document.querySelector(".textPannel");
var smashMe = document.querySelector(".smashMe");
var timerDisplay = document.querySelector(".timer");
var startButton = document.querySelector('.startbutton')
var gamestatus = false;
var Score = 0;
var timerOn = false
var i = 10
timerDisplay.textContent = i;

function buttonSmashed() {
    if (gamestatus == true) {
        if (timerOn == false) {
            timerOn = true;
            i = 10;
            Score ++;
            textPannel.textContent = "Your score is " + Score;
            
        }
            else {
                Score ++;
                textPannel.textContent = "Your score is " + Score;
            }
    }
}   
function TIMER(){
    setInterval(
        function timerStart() {
            if (i != -1) {
                timerDisplay.textContent = i--;
            }
            else  {
                timerOn = false;
                textPannel.textContent = 'Time Finished ' + Score + ' is your final score.'
                gamestatus = false;
                startButton.textContent = 'Start'
    startButton.style.backgroundColor = 'lightgreen'
                return;
            }
            }          
         ,1000)  
    }  

function gameStart() {
    if (gamestatus == false)
        Score = 0;
        i = 10;
        gamestatus = true;
        startButton.textContent = 'Playing'
        startButton.style.backgroundColor = 'orange'
        TIMER()
}

