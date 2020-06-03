### third another attempt at a function to repeat the input process
    function checkRepeat() {
        var keepGoing = confirm();
        if (keepGoing) {
            enterData();
        } else {
            return;
        }
    };

### second attempt at using enquirer prompt to tell function whether to repeat
    inquirer
        .prompt({
            type: 'confirm',
            name: 'confirmed',
            message: 'Do you want to enter another employee?',
            default: false
            }, function (reply) {
                if (reply.confirmed) {
                    enterData();
                } else {
                    return;
                }
            })


### attempt at telling the function whether to repeat/when to render
let repeat = inquirer.prompt({
            name: "keepGoing",
            type: "confirm",
            message: "Keep entering data?"
        });
        if (repeat === true) {
            enterData();
        } else {
            render(employeeRoster
            )}; //closing bracket of if-else statement




### first attempt at instantiating employee (test 1), doesn't work
// class Employee {
// inquirer
//     .prompt([
//         {
//             name: "name",
//             message: "Enter the employee's name:"
//         },
//         {
//             name: "role",
//             message: "Enter the employee's role:"
//         },
//         {
//             name: "email",
//             message: "Enter the employee's email address:"
//         },
//         {
//             name: "id",
//             message: "Enter the employee's ID number:"
//         }
//     ]).then (function Employee(name, role, email, id) {
//         this.name = name;
//         this.role = role;
//         this.email = email;
//         this.id = id;
//     }
// }
//closing bracket for employee class object

