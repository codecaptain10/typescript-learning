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

// ------- Optional Parameters -------

// ------- Default Parameters -------

// ------- Rest Parameters -------

// ------- Funtions Overloadings -------
