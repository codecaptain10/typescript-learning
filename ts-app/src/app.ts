import { hide } from "yargs";

/* ---------- Hello World ---------- */
let helloWorld: string = "Hello, World!";

let helloWorldDOMElement: HTMLHeadingElement = document.querySelector(
  ".helloWorld"
) as HTMLHeadingElement;

helloWorldDOMElement.textContent = helloWorld;
console.log(helloWorld);

/* ---------- Basic Types ---------- */
let firstName: string = "Szymon";
let age: number = 24;
let isPositive: boolean = true;
let money: any = 5000 + "$";

/* ---------- Arrays & Tuples ---------- */
//Array
let ids: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Jack", "Emma"];
let something: any[] = ["Items", 77, true];

//Tuple
let person: [number, string, boolean] = [1, "Szymon", true];
//Tuple Array
let employee: [number, string][];
employee = [
  [1, "Julia"],
  [2, "Szymon"],
];

/* ---------- Unions & Enum ---------- */
//Union
let id: string | number;
id = 2;
id = "two";

//Enum
enum Directio1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Directio2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

/* ---------- Objects ---------- */
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

/* ---------- Type Assertion ---------- */
let cid: any = 1;
//Way 1: <[type]>
let customerId1 = <number>cid;
//Way 2: as [type]
let customerId2 = cid as number;

/* ---------- Functions ---------- */
function addNum(x: number, y: number): number {
  return x + y;
}

function sayHello(): string {
  return "Hello!";
}

const getValue = (value: number): number => {
  return value;
};

function log(message: string | number): void {
  console.log(message);
}

/* ---------- Interfaces ---------- */
interface UserInterface {
  id: number;
  name: string;
}

const newUser: UserInterface = {
  id: 1,
  name: "John",
};

interface Point {
  width: number;
  height: number;
}

const point: Point = {
  width: 1,
  height: 2,
};

/* ---------- Function Interfaces ---------- */

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

/* ---------- Classes ---------- */
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const szymon = new Person(1, "Szymon");
const matt = new Person(2, "Matt");

/* ---------- Data Modifieres ---------- */

class Car {
  private price: number;
  protected mark: string;
  public isFast: boolean;

  constructor(carPrice: number, carMark: string, isCarFast: boolean) {
    this.price = carPrice;
    this.mark = carMark;
    this.isFast = isCarFast;
  }
}

const Audi = new Car(2000, "Audi", true);
//console.log(Audi.price);
//console.log(Audi.mark);
//console.log(Audi.isFast)

/* ---------- Implement Interface in Class ---------- */

interface PerosnInterface {
  id: number;
  name: string;
  register(): string;
}

class PersonClass implements PerosnInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `User ${this.name} is register.`;
  }
}
