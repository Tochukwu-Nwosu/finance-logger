import { Invoivce } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
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
});
