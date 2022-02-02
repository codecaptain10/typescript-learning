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

  console.log("Result:\n" + firstStr, operator, secondStr);
}

main();
