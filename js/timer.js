const timerSpan = document.querySelector("span#timer-span");

function timerCount() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    timerSpan.innerText = `${hours}:${minutes}:${seconds}`;
}

// theDay.innerText = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

setInterval(timerCount, 1000);