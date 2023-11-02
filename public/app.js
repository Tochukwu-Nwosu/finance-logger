import { Invoivce } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
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
// get ul element
let listContainer = document.querySelector('ul');
// instance of ListTemplate
const list = new ListTemplate(listContainer);
// form event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'Invoice') {
        doc = new Invoivce(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    // console.log(doc);
});
