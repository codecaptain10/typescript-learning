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

//Interface extends interface
interface A {
  a(): void
}

interface B extends A {
  b(): void
}

//Interface extends other interface
interface C {
  c(): void
}

interface D extends B, C {
  d(): void
}



//Interface extends class
class Control {
  private state: boolean;
}

interface StatefulControl extends Control {
  enable(): void
}

class Button extends Control implements StatefulControl {
  enable() { }
}
class TextBox extends Control implements StatefulControl {
  enable() { }
}
class Label extends Control { }


// Error: cannot implement
// class Chart implements StatefulControl {
//   enable() { }

// }