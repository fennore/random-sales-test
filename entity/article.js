import { v4 as uuidv4 } from 'uuid';

export default class Article
{
    #id;
    #name;
    #price;
    
    constructor(name, price) {
        this.#id = uuidv4();
        this.#name = name;
        this.#price = price;
    }
    
    get id() {
        return this.#id;
    }
    
    get name() {
        return this.#name;
    }
    
    get price() {
        return this.#price;
    }
}
