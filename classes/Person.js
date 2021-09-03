module.exports = class Person {
    
    #firstName;
    #lastName;
    #email;
    #birthDate;
    
    constructor(firstName, lastName, email, birthDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthDate = birthDate;
    }

    //Getters for private properties 
    get firstName() {return this.#firstName}
    get lastName() {return this.#lastName}
    get email() {return this.#email}
    get birthDate() {return this.#birthDate}


    //Setter for private properties 
    set firstName(val) {
        if(val.length < 1 || val.length > 50){
            // Do not allow a too short or too long firstName
            throw new Error('FirstName should be 1-50 characters long')
        }
        return this.#firstName = val}
    set lastName(val) {return this.#lastName = val}
    set email(val) {return this.#email = val}
    set birthDate(val) {return this.#birthDate = val}

    // A Getter that from birthDate age 
    get age() {
        //Calculate age from birthDate 
    }

    //A method that sayHi to another person
    sayHi(anotherPerson){
        // Write logic to chek that anotherPeron is a person
        // and return a correct greeting
    }
}