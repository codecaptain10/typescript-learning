//----- Number -----
//type number
let price: number;
price = 9.95;
//type bigint
let big: bigint;
big = 9007199254740991n;

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

//2
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

//----- Never -----

//----- Union -----

//----- Type Aliases -----

//----- String Literal Types -----
