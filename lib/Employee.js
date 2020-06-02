// TODO: Write code to define and export the Employee class
//what features do all employees have? start with these: name, id, email in that order (per the test script)
const inquirer = require("inquirer");

//TEST - can instantiate employee instance (needs to make constructor)
class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
    this.getName = function() {
        return this.name;
      };
    this.getId = function() {
        return this.id;
      };
    this.getEmail = function() {
        return this.email;
    };
    this.getRole = function() {
        return this.role;
    }
    }
  };


// const mike = new Employee("Mike", "01", "mike@mike.com");
// console.log(mike);

module.exports = Employee;
