/*INTERFACES*/


// ------- Interfaces -------

//Example 1: Interface Person
interface Person {
  firstName: string;
  lastName: string;
}

//Use interface Person as function parameter
function getFullName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

//Object john
let john = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(getFullName(john)); //John Doe

//Object jane
let jane = {
  firstName: 'Jane',
  middleName: 'K.',
  lastName: 'Doe',
  age: 22
};
console.log(getFullName(jane)); // Jane Doe

//Example 2: Class Types
//define a contract between unrelated classes
interface Json {
  toJSON(): string
}

class User implements Json {
  constructor(private firstName: string,
    private lastName: string) {
  }
  toJSON(): string {
    return JSON.stringify(this);
  }
}

let user = new User('John', 'Doe');
console.log(user.toJSON());



// ------- Extending Interfaces -------