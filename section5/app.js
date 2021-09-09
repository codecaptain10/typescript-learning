"use strict";
/*CLASSES */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// ------- Classes -------
var User = /** @class */ (function () {
    function User(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
// ------- Access Modifers -------
/*They are 3 access modifers:
  - private
  - public
  - protected
*/
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.contructor = function (price, speed, color) {
        this.price = price;
        this.speed = speed;
        this.color = color;
    };
    Car.prototype.changePrice = function (newPrice) {
        this.price = newPrice;
    };
    Car.prototype.changeSpeed = function (newSpeed) {
        this.speed = newSpeed;
    };
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Audi;
}(Car));
// ------- Readonly Properties -------
var Birthday = /** @class */ (function () {
    function Birthday(birthDate) {
        this.birthDate = birthDate;
    }
    return Birthday;
}());
// ------- Getters & Setters -------
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.setAge = function (newAge) {
        if (newAge <= 0 || newAge >= 200) {
            throw new Error('The age is invalid');
        }
        this.age = newAge;
    };
    Student.prototype.getFirstName = function () {
        return this.firstName;
    };
    Student.prototype.setFirstName = function (newFirstName) {
        if (!newFirstName) {
            throw new Error('Invalid first name.');
        }
        this.firstName = newFirstName;
    };
    Student.prototype.getLastName = function () {
        return this.lastName;
    };
    Student.prototype.setLastName = function (newLastName) {
        if (!newLastName) {
            throw new Error('Invalid last name.');
        }
        this.lastName = newLastName;
    };
    Student.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Student;
}());
// ------- Inheritance -------
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.describe = function () {
        return "This is " + this.firstName + " " + this.lastName + ".";
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        var _this = 
        // call the constructor of the Person class:
        _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee.prototype.describe = function () {
        return _super.prototype.describe.call(this) + ("My Job is " + this.jobTitle + ".");
    };
    return Employee;
}(Person));
var employee = new Employee('John', 'Doe', 'Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());
// ------- Static methods & properties -------
var Worker = /** @class */ (function () {
    function Worker(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Worker.headcount++;
    }
    Worker.getHeadcount = function () {
        return Worker.headcount;
    };
    Worker.headcount = 0;
    return Worker;
}());
// ------- Abstract Classes -------
var newEmployee = /** @class */ (function () {
    function newEmployee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    newEmployee.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    newEmployee.prototype.compensationStatement = function () {
        return this.getFullName + " makes " + this.getSalary() + " a month.";
    };
    return newEmployee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(newEmployee));
