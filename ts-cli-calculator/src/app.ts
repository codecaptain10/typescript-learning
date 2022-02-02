/*CLI Calculator
1) Start the project
2) In console run: >node ./dist/app.js
3) Give parameters
4) Become result

*/
import { question } from "readline-sync";

function main(): void {
  const firstStr: string = question("Enter first number:\n");
  const operator: string = question("Enter operator: \n");
  const secondStr: string = question("Enter second number:\n");

  const valudInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
  console.log(valudInput);

  //console.log("Result:\n" + firstStr, operator, secondStr);
}

function isOperator(operator: string): boolean {
  switch (operator) {
    case "+":
    case "-":
    case "/":
    case "*":
      return true;
    default:
      return false;
  }
}

function isNumber(str: string): boolean {
  const mayBeNumber = parseInt(str);
  const isNum: boolean = Boolean(!isNaN(mayBeNumber));
  return isNum;
}

main();
