//----- Number -----
//type number
var price;
price = 9.95;
//type bigint
//let big: bigint;
//big = 9007199254740991n;
//----- String -----
var firstName = "John";
var title = "Web Developer";
var profile = "I'm " + firstName + ". \nI'm a " + title;
//----- Boolean -----
var isGood;
isGood = true;
//----- Object -----
//1 - allowed but not good practice
var employee1;
employee1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
//2 - good practice
var employee2;
employee2 = {
    firstName: 'James',
    lastName: 'Dean',
    age: 33,
    jobTitle: 'Backend Developer'
};
//----- Array -----
//Arra with strings
var skills;
skills = ['Problem Sovling', 'Software Design', 'Programming'];
//Array with strings and numbers
var scores;
scores = ['Programming', 5, 'Software Design', 4];
//----- Tuple -----
//Tuple is an array with static number of elements and their types
//Good to present value pair
var skill;
skill = ['Programming', 5];
//Color in CSS
var color = [255, 0, 0];
//----- Enum -----
//Example 1
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    var isSummer;
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
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["draft"] = 0] = "draft";
    ApprovalStatus[ApprovalStatus["submitted"] = 1] = "submitted";
    ApprovalStatus[ApprovalStatus["approved"] = 2] = "approved";
    ApprovalStatus[ApprovalStatus["rejected"] = 3] = "rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var request = {
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
var json = "{\"latitude\": 10.11, \"longitude\":12.12}";
// parse JSON to find location
var currentLocation = JSON.parse(json);
console.log(currentLocation);
//Example 2
var result;
result = "123";
//----- Void -----
//Good practice for functions
function log(message) {
    console.log(message);
}
//Bad practice for variables, 
var yourResult;
//----- Never -----
function raiseError(message) {
    throw new Error(message);
}
//----- Union -----
//Example 1
var scoreResult;
scoreResult = 10; // OK
scoreResult = 'Hi'; // also OK
//scoreResult = false; // a boolean value, not OK
//Example 2
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
var messsage; // same as string type
var input;
input = 100; // valid
input = 'Hi'; // valid
//input = false; // Compiler error
//----- String Literal Types -----
var click;
//click = 'click'; // OK
//click = 'Blablabla' //Error
