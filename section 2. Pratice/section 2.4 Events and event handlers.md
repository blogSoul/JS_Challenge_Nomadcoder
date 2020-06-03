## section 2.4 Events and event handlers

이벤트들 실행하는 중간에 이벤트를 훔칠 수 있습니다.
```
window.addEventListener("resize", handleResize);
```
resize를 할 때마다 handleResize 함수를 부릅니다.

```
const title = document.querySelector("#title");

function handleClick(){
    title.style.color = "blue";
}

window.addEventListener("click", handleClick);
```
이 코드를 보면 click이벤트가 발생할 때마다 handleClick함수가 호출되는 것을 볼 수 있습니다.