console.log('Im Working');

const a = 25;
let b = a- 5;
// String
const what = "Soul";
const wat = true;
const wath = 10.2;
// a = 4;
console.log(b, a);
console.log(what);

// Array
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
const daysOfWeek = [true, "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek[2]);

// Object
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