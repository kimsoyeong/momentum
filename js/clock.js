const now = document.querySelector("h3#now");

function getNow(){
    const date = new Date();
    const years = String(date.getFullYear()).padStart(4, "0");
    const months = String(date.getMonth() + 1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    now.innerText = `${years}-${months}-${days} ${hours}:${minutes}`;
}

getNow();
setInterval(getNow, 1000);