"use strict";
const displayName = (myName) => "My name is " + myName;
// console.log(displayName(true));    // flagged by typescript but not by javascript
// console.log(displayName('Tochi'));
// Arrays
let numbers = [10, 20, 30, 40];
let animals = ['cat', 'dog', 'parrot'];
let mixedTypes = ['Luigi', true, 'black belt', 3];
numbers.push(50);
// numbers.push('60');  // not allowed
animals[2] = 'bird';
// animals[1] = 9;   // not allowed
mixedTypes.push('Antonio');
mixedTypes[1] = false;
// console.log(numbers, animals, mixedTypes);
// Objects
let user = {
    name: 'Leonardo',
    age: 45,
    isMarried: true
};
// user.age = '25';   // not allowed
user.age = 25;
// user.skills = ['HTML', 'CSS', 'JavaScript'];    // not allowed
/* user = {
    email: 'unknow@email.com',
    phone: 234-567-678
}  */ // not allowed
user = {
    name: 'Anna',
    age: 20,
    isMarried: false
};
// console.log(user)
// Explicit type - declaring variables, arrays, & objects
let score;
let userId;
let arrayOne;
let arrayTwo = [];
let arrayThree = [];
let objOne;
let objTwo;
// Dynamic type
let unknownOne;
let unknowTwo = 6;
unknowTwo = 'John';
// console.log(unknowTwo);
// Function
let greet;
greet = () => {
    console.log('Hello, World!');
};
// greet();
const add = (a, b = 10, c) => {
    console.log(a + b);
    console.log(c); // c is optional, which is a number | undefined
};
// add(2, 10, 3);
const display = (a, b) => {
    console.log('b: ' + b);
    return a;
};
const userInfo = (user) => {
    console.log(`Hi, I am ${user.name} and I am ${user.age} years old`);
};
userInfo({
    id: '1234',
    name: 'John',
    age: 54
});
