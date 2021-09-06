/*FUNCTIONS*/

/*Syntax in TypeScript
function name(parameter: type, parameter:type,...): returnType {
   // do something
}
*/

// ------- Functions -------
//Examples
//type number
function add(a: number, b: number): number {
  return a + b;
}
//type void
function echo(message: string): void {
  console.log(message.toUpperCase());
}
//without type - TypeScript will try to infer an appropriate type
function addTwoNumbers(a: number, b: number) {
  return a + b;
}


// ------- Funtions Types -------

let addTwoVariables: (a: number, b: number) => number;

addTwoVariables = function (x: number, y: number) {
  return x + y;
};

// ------- Optional Parameters -------

function multiply(a: number, b: number, c?: number): number {

  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}

// ------- Default Parameters -------

/*JavaScript Syntax
function name(parameter1=defaultValue1,...) {
   // do something
}

//Example
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
*/

/*TypeScript Syntax
function name(parameter1:type=defaultvalue1, parameter2:type=defaultvalue2,...) {
   // do something
}
*/

//Example
function applyDiscount(price: number, discount: number = 0.05): number {
  return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95


// ------- Rest Parameters -------
/*Syntax:
function fn(...rest: type[]) {
   //...
}
*/
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => total += num);
  return total;
}

//console.log(getTotal()); // 0
//console.log(getTotal(10, 20)); // 30
//console.log(getTotal(10, 20, 30)); // 60


// ------- Funtions Overloadings -------
//Overloading addVariables() function
function addVariables(a: number, b: number): number;
function addVariables(a: string, b: string): string;
function addVariables(a: any, b: any): any {
  return a + b;
}

//Overloading sum() function with optional parameters
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
  if (c) return a + b + c;
  return a + b;
}

//Overloading count() method in class Connter
class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      this.current = target;
      return values;
    }
    return ++this.current;
  }
}

let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array
