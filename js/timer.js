const timerSpan = document.querySelector("span#timer-span");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

let TIME = 0;

function updateTimer() {
    const hours =  String(Math.floor(TIME/3600)).padStart(2, "0");
    const minutes =  String(Math.floor(TIME/60) % 60).padStart(2, "0");
    const seconds =  String(TIME % 60).padStart(2, "0");

    timerSpan.innerText = `${hours}:${minutes}:${seconds}`;

    TIME++;
}

let cron;

function startTimer(){
    updateTimer();
    cron = setInterval(updateTimer, 1000);
}

function stopTimer(){
    clearInterval(cron);
}

function resetTimer(){
    stopTimer();
    timerSpan.innerText = "00:00:00";
    TIME = 0;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);