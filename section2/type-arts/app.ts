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

//----- Enum -----

//----- Any -----

//----- Never -----

//----- Union -----

//----- Type Aliases -----

//----- String Literal Types -----
