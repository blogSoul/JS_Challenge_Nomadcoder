## section 3. 9 Getting the Weather part One(Geolocation)


```
function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
```
position Object에서 보면 위도와 경로를 볼 수 있습니다.