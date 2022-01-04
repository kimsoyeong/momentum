const timerSpan = document.querySelector("span#timer-span");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

const doneBtn = document.querySelector("#done-btn");
const resultList = document.querySelector("#result-list");

const TIMES_KEY = "times";

let TIME = 0;
let times = [];

function updateTimer() {
    const hours =  String(Math.floor(TIME/3600)).padStart(2, "0");
    const minutes =  String(Math.floor(TIME/60) % 60).padStart(2, "0");
    const seconds =  String(TIME % 60).padStart(2, "0");

    timerSpan.innerText = `${hours}:${minutes}:${seconds}`;

    TIME++;
}

let cron;

function startTimer(){
    if (timerName.innerText !== "TIMER"){
        updateTimer();
        cron = setInterval(updateTimer, 1000);

        startBtn.disabled = true;
        startBtn.classList.add("disabled");
    } else {
        alert("할 일을 선택한 후, 이용 가능합니다.")
    }
    
}

function stopTimer(){
    clearInterval(cron);

    startBtn.disabled = false;
    startBtn.classList.remove("disabled");
}

function resetTimer(){
    stopTimer();
    timerSpan.innerText = "00:00:00";
    TIME = 0;
}


function saveTimes(){
    localStorage.setItem(TIMES_KEY, JSON.stringify(times));
}

function doneTimer(){
    if (timerName.innerText !== "TIMER"){
        stopTimer();
        const doneObj = {
          time: TIME,
          todo: timerName.innerText,
        };
        const li = document.getElementById(timerName.value);
        
        li.remove();
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
        saveTodos();

        times.push(doneObj);
        saveTimes();
        paintResult(doneObj);
        
        timerName.value = "";
        timerName.innerText = "TIMER";
        resetTimer();
    } else {
        alert("현재 기록 중인 할 일이 없습니다.")
    }
    
}

function paintResult(result){ // result as Object
    const li = document.createElement("li");
    const todo = document.createElement("span");
    todo.innerText = result.todo;

    const time = document.createElement("span");
    const hours =  String(Math.floor(result.time/3600)).padStart(2, "0");
    const minutes =  String(Math.floor(result.time/60) % 60).padStart(2, "0");
    const seconds =  String(result.time % 60).padStart(2, "0");
    time.innerText = `${hours}:${minutes}:${seconds}`;

    li.appendChild(todo);
    li.appendChild(time);
    resultList.appendChild(li);
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
doneBtn.addEventListener("click", doneTimer);

const savedTimes = localStorage.getItem(TIMES_KEY);
if(savedTimes){
    const paresdTimes = JSON.parse(savedTimes);
    times = paresdTimes;
    paresdTimes.forEach(paintResult);
}
