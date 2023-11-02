import { Invoivce } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// interface IsPerson {
//     name: string;
//     age: number;
//     isMarried: boolean;
//     speak(): void;
//     add(a: number, b: number): number; 
// }
// const me: IsPerson = {
//     name: 'Trump',
//     age: 70,
//     isMarried: true,
//     speak() {
//         console.log('Hi');
//     },
//     add(num1, num2) {
//         return num1 + num2;
//     }
// }
// console.log(me);
// let doc1: HasFormatter;
// let doc2: HasFormatter;
// doc1 = new Invoivce('Donald', 'work on website', 300);
// doc2 = new Payment('Bill', 'work on plumbing', 100);
// console.log(doc1);
// console.log(doc2);
// get form element
let form = document.querySelector('.new-item-form');
// get input fields
let type = document.querySelector('#type');
let toFrom = document.querySelector('#tofrom');
let details = document.querySelector('#details');
let amount = document.querySelector('#amount');
// form event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoivce(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    let values = {
        type: type.value,
        toFrom: toFrom.value,
        details: details.value,
        amount: amount.valueAsNumber
    };
    // console.log(values);
});
// GENERICS
const print = (obj) => obj; // T represents a generic type
const printObj = print({ name: 'John', age: 40 });
console.log(printObj.name);
// the same block of code but different data type for 'data' prop.
const res1 = {
    name: 'James Bond',
    department: 'MI6',
    data: { mission: 'Secure the package' }
};
const res2 = {
    name: 'Angelina',
    department: 'Grocery',
    data: ['Bread', 'Milk', 'Egg']
};
console.log(res1, res2);
