//initialize variables
const stopwatch = document.querySelector('#stopwatch');
const startBtn = document.querySelector('#start');
const seconds = 0;
const minutes = 0;
const hour = 0;
var timeoutId = null;



/* function to start stopwatch */
function startWatch(flag) {
    if (flag) {
        startBtn.disabled = true;

    }

    timeoutId = setTimeout(function() {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
        ms++;

        if (ms == 100) {
            sec = sec + 1;
            ms = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (ms < 10) {
            ms = '0' + ms;
        }

        if (sec < 10) {
            sec = '0' + sec;
        }

        if (min < 10) {
            min = '0' + min;
        }

        stopwatch.innerHTML = min + ':' + sec + ':' + ms;

        // calling start() function recursivly to continue stopwatch
        startWatch();

    }, 10);
    
    // setTimeout delay time 10 milliseconds

}

// function to pause stopwatch 
function pauseWatch() {
    clearTimeout(timeoutId);
    startBtn.disabled = false;
}

// function to reset stopwatch 
function resetWatch() {
    ms = 0;
    sec = 0;
    min = 0;

    clearTimeout(timeoutId);
    stopwatch.innerHTML = '00:00:00';
    startBtn.disabled = false;
}














