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
