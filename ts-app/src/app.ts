//Variables
let first_name: string = "Szymon";
const age: number = 11135;

console.log(`User:${first_name}, age: ${age}`);

//DOM Elements
let userName: HTMLHeadElement = document.querySelector(
  ".name"
) as HTMLHeadingElement;
let userAge = document.querySelector(".age");

userName.textContent = "User: " + first_name;
