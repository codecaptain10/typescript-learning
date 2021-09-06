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

// ------- Funtions Overloadings -------
