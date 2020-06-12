## section 3. 8 Image Background

css부분입니다.
```
.bgImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    animation: fadeIn .5s linear;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
```

bg.js입니다.
```
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}
```
append 대신 prepend를 사용했습니다.
prepend는 ```body.prepend(image);```로 예를 들면 body 생성보다 먼저 실행하는 함수입니다.
