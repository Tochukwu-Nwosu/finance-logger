const displayName = (myName: string) => "My name is " + myName;

// console.log(displayName(true));    // flagged by typescript but not by javascript
// console.log(displayName('Tochi'));

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
}  */    // not allowed

user = {
    name: 'Anna',
    age: 20,
    isMarried: false
};

// console.log(user)

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

// console.log(unknowTwo);

// Function

let greet: Function;

greet = () => {
    console.log('Hello, World!')
}

// greet();

const add = (a: number, b: number = 10, c?: number) => {
    console.log(a + b);
    console.log(c);  // c is optional, which is a number | undefined
}

// add(2, 10, 3);

const display = (a: number, b?: number | string): number => {
    console.log('b: ' + b);
    return a;
}

// let result = display(23, '5');
// console.log(result);

// Type Aliases

type user = {id: number | string, name: string, age: number} // this is an aliase type

const userInfo = (user:  user) => {
    console.log(`Hi, I am ${user.name} and I am ${user.age} years old`);
}

userInfo({
    id: '1234',
    name: 'John',
    age: 54
});

// Function signatures

/* Function signature specifies the structure of the fuction assigned to a variable
   by defining the type of the parameter(s), and the return type of the function
*/

let welcome: (a: string) => void;            // function signature: parameter type & return type

welcome = (name: string) => {
    console.log('Welcome back, ' + name);
}


let logDetails: (a: {name: string, age: number}) => string;     // function signature

type person = {name: string, age: number};                      // type aliase

logDetails = (user: person) => {

    return `${user.name} is ${user.age} years old`;
}