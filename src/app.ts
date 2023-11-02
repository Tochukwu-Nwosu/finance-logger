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

    let doc: HasFormatter;
    
    if(type.value === 'invoice') {
        doc = new Invoivce(toFrom.value, details.value, amount.valueAsNumber);
    } else {
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


// Tuple

let student: [string, number] = ['John', 123];

student = ['Jane', 456];
// student = [true, 123]; // this is not allowed