/*CLASSES */

// ------- Classes -------
class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// ------- Access Modifers -------


// ------- Readonly Properties -------


// ------- Getters & Setters -------


// ------- Inheritance -------


// ------- Static methods & properties -------

// ------- Abstract Classes -------