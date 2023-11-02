import { Invoivce } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interface/HasFormatter.js";


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
let form = document.querySelector('.new-item-form') as HTMLFormElement;

// get input fields
let type = document.querySelector('#type') as HTMLSelectElement;
let toFrom = document.querySelector('#tofrom') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let amount = document.querySelector('#amount') as HTMLInputElement;

// form event
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    
    if(type.value === 'invoice') {
        doc = new Invoivce(...values);
    } else {
        doc = new Payment(...values);
    }

    console.log(doc);

});
