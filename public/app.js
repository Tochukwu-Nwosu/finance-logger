import { Invoivce } from "./classes/Invoice.js";
const me = {
    name: 'Trump',
    age: 70,
    isMarried: true,
    speak() {
        console.log('Hi');
    },
    add(num1, num2) {
        return num1 + num2;
    }
};
console.log(me);
const invoiceOne = new Invoivce('Donald', 'work on website', 300);
const invoiceTwo = new Invoivce('Bill', 'work on plumbing', 100);
// console.log(invoiceOne.client, invoiceOne.details, invoiceOne.amount, invoiceOne.format());
// console.log(invoiceTwo.client, invoiceTwo.details, invoiceTwo.amount, invoiceTwo.format());
const invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
// invoices.forEach( invoice => {
//     console.log(invoice);
// })
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
    let values = {
        type: type.value,
        toFrom: toFrom.value,
        details: details.value,
        amount: amount.valueAsNumber
    };
    console.log(values);
});
