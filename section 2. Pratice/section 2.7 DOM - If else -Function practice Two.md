## section 2.7 DOM - If else -Function practice Two

className보단 classList 시용하는 것을 조금 더 권장합니다.

```
title.classList.toggle(CLICKED_CLASS);
```
와 
```
function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}
```
이 코드는 같은 기능을 제공하고 있습니다.