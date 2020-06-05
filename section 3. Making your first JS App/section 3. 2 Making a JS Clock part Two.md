## section 3. 2 Making a JS Clock part Two

3000 millisecond = 3second
ternary operator(삼항 연산자)
Ex)
```
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
```