// invoice class
class Invoivce{
    client: string;
    details: string;
    amount: number;

    constructor(a: string, b: string, c: number) {
        this.client = a;
        this.details = b;
        this.amount = c;
    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}

const invoiceOne = new Invoivce('Donald', 'work on website', 300);

console.log(invoiceOne.client, invoiceOne.details, invoiceOne.amount, invoiceOne.format());

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