import Person from './person.js';

export default class Client extends Person
{
    #email;
    
    constructor(name, email) {
        super(name);
        this.#email = email;
    }
    
    get email() {
        return this.#email;
    }
    
    toJSON() {
        return {
            name: this.name,
            email: this.#email
        };
    }
}

