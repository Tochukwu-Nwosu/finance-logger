// payment class
import { HasFormatter } from "../interface/HasFormatter";

export class Payment implements HasFormatter{
    recipient: string;
    details: string;
    amount: number;

    constructor(a: string, b: string, c: number) {
        this.recipient = a;
        this.details = b;
        this.amount = c;
    }

    format() {
        return `${this.recipient} owed £${this.amount} for ${this.details}`;
    }
}
