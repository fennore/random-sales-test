import { v4 as uuidv4 } from 'uuid';

export default class SaleAgreement
{
    #date
    #id;
    #salesperson;
    #articleCollection;
    #client;
    
    constructor(date, salesperson, articleCollection, client) {
        this.#date = date;
        this.#id = uuidv4();
        this.#salesperson = salesperson;
        this.#articleCollection = articleCollection;
        this.#client = client;
    }
    
    get id() {
        return this.#id;
    }
    
    toJSON() {
        return {
            date: this.#date,
            id: this.#id,
            salesPersonName: this.#salesperson.name,
            articles: this.#articleCollection,
            totalPrice: this.#articleCollection.totalPrice,
            client: this.#client
        };
    }
}