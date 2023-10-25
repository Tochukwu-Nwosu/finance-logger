const displayName = (myName: string) => "My name is " + myName;

// console.log(displayName(true));    // flagged by typescript but not by javascript
console.log(displayName('Tochi'));

// Arrays

let numbers = [ 10, 20, 30, 40 ];
let animals = [ 'cat', 'dog', 'parrot' ];
let mixedTypes = [ 'Luigi', true, 'black belt', 3 ];

numbers.push(50);
// numbers.push('60');  // not allowed

animals[2] = 'bird';
// animals[1] = 9;   // not allowed

mixedTypes.push('Antonio');
mixedTypes[1] = false;

console.log(numbers, animals, mixedTypes);

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
}  */    // not allowed

user = {
    name: 'Anna',
    age: 20,
    isMarried: false
};

console.log(user)

// Explicit type - declaring variables, arrays, & objects

let score: number;
let userId: string | number;

let arrayOne: string[];
let arrayTwo: number[] = [];
let arrayThree: (string | number | boolean)[] = [];

let objOne: object;
let objTwo: {
    id: number,
    title: string,
    body: string
}

// Dynamic type

let unknownOne: any;
let unknowTwo: any = 6;

unknowTwo = 'John';

console.log(unknowTwo);
