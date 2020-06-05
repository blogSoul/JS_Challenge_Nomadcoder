## section 2.6 DOM - If else -Function practice

MDN 문서에서 찾으면 사용가능합니다!
```navigator.addEventListener("offline", handleOffline);```
```
function handleClick() {
    title.getElementsByClassName.color = "red";
}
```
위 코드를 참고하고 만들면 좋을 거 같습니다.
오프라인일 때, 사용할 수 있는 함수입니다.
Ex)
```
function handleOffline(){
    console.log("lala");
}

function handleOnline(){
    console.log("Welcome back");
}
navigator.addEventListener("online", handleOnline);
```

이번 강의 때 나온 코드입니다.
```
const title = document.querySelector("#title");

const BASE_COLOR = "#34495e";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();
```