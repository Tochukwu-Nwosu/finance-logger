import { Invoivce } from "./classes/Invoice.js";
const invoiceOne = new Invoivce('Donald', 'work on website', 300);
console.log(invoiceOne.client, invoiceOne.details, invoiceOne.amount, invoiceOne.format());
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
