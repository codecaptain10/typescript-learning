/*CONTROL FLOW STATEMENTS*/

// ----- if else -----

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; // 10% discount 
} else {
  discount = 15; // 15%
}

console.log(`You got ${discount}% discount. `)

//if else - Ternary operator
const max = 100;
let counter = 100;

counter < max ? counter++ : counter = 1;

console.log(counter);

// ----- switch case -----

//Example 1
let targetId = 'btnDelete';

switch (targetId) {
  case 'btnUpdate':
    console.log('Update');
    break;
  case 'btnDelete':
    console.log('Delete');
    break;
  case 'btnNew':
    console.log('New');
    break;
}

//Example 2
// change the month and year
let month = 2,
  year = 2020;

let day = 0;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    day = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    day = 30;
    break;
  case 2:
    // leap year
    if (((year % 4 == 0) &&
      !(year % 100 == 0))
      || (year % 400 == 0))
      day = 29;
    else
      day = 28;
    break;
  default:
    throw Error('Invalid month');
}
console.log(`The month ${month} in ${year} has ${day} days`);

// ----- for loop -----

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// ----- while loop -----

//Example 1
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

//Example 2
let list = document.querySelector('#list');

while (list.firstChild) {
  list.removeChild(list.firstChild);
}


// ----- do while loop -----

let i = 0;

do {
  console.log(i);
  i++
} while (i < 10);


// ----- break -----

//Example 1
let products = [
  { name: 'phone', price: 700 },
  { name: 'tablet', price: 900 },
  { name: 'laptop', price: 1200 }
];

for (let i = 0; i < products.length; i++) {
  if (products[i].price == 900)
    break;
}

// show the products
console.log(products[i]);


//Example 2
// let products = [
//   { name: 'phone', price: 700 },
//   { name: 'tablet', price: 900 },
//   { name: 'laptop', price: 1200 }
// ];

// let discount = 0;
// let product = products[1];

// switch (product.name) {
//   case 'phone':
//       discount = 5;
//       break;
//   case 'tablet':
//       discount = 10;
//       break;
//   case 'laptop':
//       discount = 15;
//       break;
// }

// console.log(`There is a ${discount}% on ${product.name}.`);

