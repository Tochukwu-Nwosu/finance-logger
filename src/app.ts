import { Invoivce } from "./classes/Invoice.js";


interface IsPerson {
    name: string;
    age: number;
    isMarried: boolean;

    speak(): void;
    add(a: number, b: number): number; 
}

const me: IsPerson = {
    name: 'Trump',
    age: 70,
    isMarried: true,
    speak() {
        console.log('Hi');
    },
    add(num1, num2) {
        return num1 + num2;
    }
}

console.log(me);

const invoiceOne = new Invoivce('Donald', 'work on website', 300);
const invoiceTwo = new Invoivce('Bill', 'work on plumbing', 100);

// console.log(invoiceOne.client, invoiceOne.details, invoiceOne.amount, invoiceOne.format());
// console.log(invoiceTwo.client, invoiceTwo.details, invoiceTwo.amount, invoiceTwo.format());

const invoices: Invoivce[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

// invoices.forEach( invoice => {
//     console.log(invoice);
// })

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

    let values = {
        type: type.value,
        toFrom: toFrom.value,
        details: details.value,
        amount: amount.valueAsNumber
    };

    console.log(values);
});