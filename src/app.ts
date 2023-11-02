import { Invoivce } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interface/HasFormatter.js";


// get form element
let form = document.querySelector('.new-item-form') as HTMLFormElement;

// get input fields
let type = document.querySelector('#type') as HTMLSelectElement;
let toFrom = document.querySelector('#tofrom') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let amount = document.querySelector('#amount') as HTMLInputElement;

// get ul element
let listContainer = document.querySelector('ul')!;

// instance of ListTemplate
const list = new ListTemplate(listContainer);

// form event
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    
    if(type.value === 'Invoice') {
        doc = new Invoivce(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
});
