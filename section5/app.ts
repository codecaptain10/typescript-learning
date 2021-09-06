/*CLASSES */

import { strict } from "yargs";

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

/*They are 3 access modifers:
  - private
  - public
  - protected
*/

class Car {
  private price: number;
  private speed: number;
  private color: string;

  contructor(price: number, speed: number, color: string) {
    this.price = price;
    this.speed = speed;
    this.color = color;
  }

  protected changePrice(newPrice: number): void {
    this.price = newPrice;
  }

  protected changeSpeed(newSpeed: number): void {
    this.speed = newSpeed;
  }

}

class Audi extends Car {
  private model: string;

  changeSpeed;
}


// ------- Readonly Properties -------

class Birthday {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}


// ------- Getters & Setters -------

class Student {
  private age: number;
  private firstName: string;
  private lastName: string;

  public getAge() {
    return this.age;
  }

  public setAge(newAge: number) {
    if (newAge <= 0 || newAge >= 200) {
      throw new Error('The age is invalid');
    }
    this.age = newAge;
  }

  public getFirstName() {
    return this.firstName;
  }

  public setFirstName(newFirstName: string) {
    if (!newFirstName) {
      throw new Error('Invalid first name.');
    }
    this.firstName = newFirstName;
  }

  public getLastName() {
    return this.lastName;
  }

  public setLastName(newLastName: string) {
    if (!newLastName) {
      throw new Error('Invalid last name.');
    }
    this.lastName = newLastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// ------- Inheritance -------


// ------- Static methods & properties -------

// ------- Abstract Classes -------