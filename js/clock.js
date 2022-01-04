const clock = document.querySelector("h2#clock");
const theDate = document.querySelector("h2#theDate");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
    const date = new Date();
    const years = String(date.getFullYear()).padStart(4, "0");
    const months = String(date.getMonth() + 1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");

    theDate.innerText = `${years}-${months}-${days}`;
}


getClock();
setInterval(getClock, 1000);

getDate();