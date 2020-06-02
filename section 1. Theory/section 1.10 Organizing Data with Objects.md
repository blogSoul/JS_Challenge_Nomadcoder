## section 1.10 Organizing Data with Objects


Object에는 value를 넣어줄 수 있습니다.
[] : 브라켓 , {} :컬러 브라켓
Ex)
```
const WeeksID = {
    name: "Mon", 
    age: "Tue", 
    gender: "Wed",
    favs : [1,2,3,4],
    nams : [
        {
            name : "A",
            b : false
        },
        {
            name : "B",
            b : false
        }
    ]
};
console.log(WeeksID.gender);
WeeksID.gender = "Soul";
console.log(WeeksID.gender);
console.log(WeeksID);
```
이와 같은 방식으로 사용하면 됩니다.
Object안에  Object, Array 에 넣어도 됩니다.
