/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

// Technically we don't need any error handling with these since variables are
// allowed to be any value we want, but if we wanted to have input control,
// we could do that if we wanted. I opt not to do that for these examples.
let homer = {
    name: 'Homer',
    occupation: 'Nuclear Safety Inspector',
    kids: 3,
    hobby: 'Drinking Beer'
}

function createPerson(name, occupation, kids, hobby) {
    this.name = name;
    this.occupation = occupation,
    this.kids = kids;
    this.hobby = hobby;
}

let stewie = new createPerson('Stewie', 'Being a baby', 0, 'Tormenting Lois');

class Person {
    constructor(name, occupation, kids, hobby) {
        this.name = name;
        this.occupation = occupation;
        this.kids = kids;
        this.hobby = hobby;
    }

    toString() {
        return `Name: ${this.name}\nOccupation: ${this.occupation}\nKids: ${this.kids}\nHobby: ${this.hobby}`;
    }
}

let ashley = new Person('Laura', 'Voice Actress', 1, 'Dungeons & Dragons');

console.log(homer);
console.log(stewie);
console.log(ashley);
console.log(ashley.toString());