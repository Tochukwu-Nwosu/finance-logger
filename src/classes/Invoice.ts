// invoice class
import { HasFormatter } from "../interface/HasFormatter";

export class Invoivce implements HasFormatter{
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
