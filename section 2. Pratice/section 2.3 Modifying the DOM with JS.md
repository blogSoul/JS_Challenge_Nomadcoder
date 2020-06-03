## section 2.3 Modifying the DOM with JS


```
const title = document.querySelector("title");
console.log(title);
title.innerHTML = "Hi , JS";
title.style.color = "red";
// console.dir(title);
console.dir(document);
document.title = "I own you";
```
이러면 title이 null로 됩니다. 따라서 밑에 코드가 적용이 되지 않습니다.

```
const title = document.querySelector("#title");
console.log(title);
title.innerHTML = "Hi , JS";
title.style.color = "red";
// console.dir(title);
console.dir(document);
document.title = "I own you";
```
이러면 따라서 밑에 코드가 적용이 됩니다.

querySelector함수는 모든 자식을 찾습니다!