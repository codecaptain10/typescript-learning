/*CLI Calculator
1) Start the project
2) In console run: >node ./dist/app.js
3) Give parameters
4) Become result

*/
import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void {
  const firstStr: string = question("Enter first number:\n");
  const operator: string = question("Enter operator: \n");
  const secondStr: string = question("Enter second number:\n");

  const valudInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

  if (valudInput) {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log("Result:\n" + result);
  } else {
    console.log("\nInvalid input!");
  }

  console.log(valudInput);
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
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
