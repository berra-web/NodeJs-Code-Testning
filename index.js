// Import the Class Person 
const Person = require('./classes/Person.js');

// Create Person 
let Berra = new Person('Berra', 'Hb', 'hbberra@gmail.com', '1986-03-20');
console.log(Berra);
console.log(Berra.firstName);
console.log(Berra.lastName);
console.log(Berra.email);
console.log(Berra.birthDate);