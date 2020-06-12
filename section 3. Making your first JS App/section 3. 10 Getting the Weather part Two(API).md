## section 3. 10 Getting the Weather part Two(API)

```
function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}
```
then함수는 이전 함수가 실행이 된 이후, 다음 실행할 수 있도록 만들어 주는 함수입니다.