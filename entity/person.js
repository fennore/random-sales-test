export default class Person
{
    #name;
    
    constructor(name) {
        this.#name = name;
    }
    
    get name() {
        return this.#name;
    }
}