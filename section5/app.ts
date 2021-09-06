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


// ------- Getters & Setters -------


// ------- Inheritance -------


// ------- Static methods & properties -------

// ------- Abstract Classes -------