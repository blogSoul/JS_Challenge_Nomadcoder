console.log(console);
console.log("Greeting A");
console.log("Greeting B");
console.log("Greeting C");
console.log("Greeting D");

function sayHello(potato, num){
    console.log('Hello!', potato, "Hi",num);
    console.log("Hello!" + potato + "Hi" + num);
    console.log(`Hello ${potato} you are ${num} years old`);
}
function sayHello2(potato, num){
    console.log(`Hello ${potato} you are ${num} years old`);
}
const greeting = sayHello2("asd", 15)
console.log(greeting)

sayHello("Hi", 15);
console.log("Hi");

const calculator = {
    plus: function(a, b){
        return a + b;
    }
}

const plus = calculator.plus(5,5);
console.log(plus);

if(10 === '10'){
    console.log("Hi");
} else if("10" === "10"){
    console.log("lalala");
}
else {
    console.log("Oh");
}

true && true === true;
false || true === true;
false || false === false;

const age = prompt("How old are you");

if(age >= 18 && age <= 21){
    console.log("yan can");
} else if(age > 21){
    console.log("go ahead");
} else {
    console.log("you cant")
}