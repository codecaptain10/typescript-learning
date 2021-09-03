/*Type Annotation 

3 options:
  let [variableName] : [type];
  let [variableName] : [type] = [value];
  const [constantName] : [type] = [value];

*/

//type annotation number
let numberVariable1: number;
numberVariable1 = 100;
//type annotation string
let stringVariable: string;
stringVariable = "Hello World!";
//type annotation number
let numberVariable2: number;
numberVariable2 = 200;
//type annotation boolean
let booleanVariable: boolean;
booleanVariable = true;

//type annotation arrays
let names: string[];
names = ['Szymon', "Matty", "John"];

//type annotation object
let person: {
  name: string;
  age: number;
}

person = {
  name: 'John',
  age: 25
};

//type annotation functions
let greeting: (name: string) => string;

greeting = function (name: string) {
  return 'Hello Mr ...';
}