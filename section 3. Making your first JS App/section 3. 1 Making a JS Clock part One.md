## section 3. 1 Making a JS Clock part One

clock.js에선
```
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init(){
    getTime();
}

init();
```

index.html에선
```
<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <link rel="stylesheet"
        href="index.css">
    </head>
    <body>
        <div class="js-clock">
            <h1>00:00</h1>
        </div>
        <script src="clock.js"></script>
    </body>
</html>
```
console객체와 date객체를 사용했습니다.