/*CONTROL FLOW STATEMENTS*/
// ----- if else -----
var discount;
var itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5; // 5% discount
}
else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
}
else {
    discount = 15; // 15%
}
console.log("You got " + discount + "% discount. ");
//if else - Ternary operator
var max = 100;
var counter = 100;
counter < max ? counter++ : counter = 1;
console.log(counter);
// ----- switch case -----
//Example 1
var targetId = 'btnDelete';
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
var month = 2, year = 2020;
var day = 0;
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
console.log("The month " + month + " in " + year + " has " + day + " days");
// ----- for loop -----
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log(i_1);
}
// ----- while loop -----
//Example 1
var count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
//Example 2
var list = document.querySelector('#list');
while (list.firstChild) {
    list.removeChild(list.firstChild);
}
// ----- do while loop -----
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
// ----- break -----
//Example 1
var products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
for (var i_2 = 0; i_2 < products.length; i_2++) {
    if (products[i_2].price == 900)
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
// ----- continue -----
var index = -1;
while (index < 9) {
    index = index + 1;
    if (index % 2)
        continue;
    console.log(index);
}
