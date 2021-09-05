//----- Number -----
//type number
let price: number;
price = 9.95;
//type bigint
//let big: bigint;
//big = 9007199254740991n;

//----- String -----

let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

//----- Boolean -----

let isGood: boolean;
isGood = true;

//----- Object -----

//1 - allowed but not good practice
let employee1: object;

employee1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
};

//2 - good practice
let employee2: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

employee2 = {
  firstName: 'James',
  lastName: 'Dean',
  age: 33,
  jobTitle: 'Backend Developer'
};

//----- Array -----

//Arra with strings
let skills: string[];
skills = ['Problem Sovling', 'Software Design', 'Programming'];

//Array with strings and numbers
let scores: (string | number)[];
scores = ['Programming', 5, 'Software Design', 4];

//----- Tuple -----

//Tuple is an array with static number of elements and their types
//Good to present value pair
let skill: [string, number];
skill = ['Programming', 5];

//Color in CSS
let color: [number, number, number] = [255, 0, 0];

//----- Enum -----

//Example 1
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
};

function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}
//console.log(isItSummer(Month.Jun)); // true

//Example 2
enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected
};

const request = {
  id: 1,
  status: ApprovalStatus.approved,
  description: 'Please approve this request'
};

if (request.status === ApprovalStatus.approved) {
  // send an email
  console.log('Send email to the Applicant...');
}

//----- Any -----

//Example 1
// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);


//Example 2
let result: any;
result = "123";

//----- Void -----

//Good practice for functions
function log(message): void {
  console.log(message);
}

//Bad practice for variables, 
let yourResult: void;

//----- Never -----

function raiseError(message: string): never {
  throw new Error(message);
}
//----- Union -----

//Example 1
let scoreResult: number | string;
scoreResult = 10; // OK
scoreResult = 'Hi'; // also OK
//scoreResult = false; // a boolean value, not OK

//Example 2
function add(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
  throw new Error('Parameters must be numbers or strings');
}


//----- Type Aliases -----

//Example 1
type chars = string;
let messsage: chars; // same as string type

//Example 2
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
//input = false; // Compiler error

//----- String Literal Types -----

let click: 'click';
//click = 'click'; // OK
//click = 'Blablabla' //Error
