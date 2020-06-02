// TODO: Write code to define and export the Employee class
//what features do all employees have? start with these: name, role, email, id
const inquirer = require("inquirer");

//TEST - can instantiate employee instance (needs to make constructor)

//what if we build our inquirer here? to wrap around the employee function?
inquirer
    .prompt([
        {
            name: "empName",
            type: "input",
            message: "Employee name:"
        },
        {

        }
    ])
//2nd attempt - w3 schools says classes always start with a constructor function
class Employee {
    constructor(name, role, email, id) {
      this.name = name;
      this.role = role;
      this.email = email;
      this.id = id;
    }
  };

let mike = new Employee("Mike");
console.log(mike);

exports.Employee = Employee;
