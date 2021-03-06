//this is the entry file, the main thing we're working out of

//these bring in the templates for our employee types
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//these bring in our other modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//what are these for?????
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


//this is the javascript file in our other folder
const render = require("./lib/htmlRenderer");


//empty array to push our employees to as we buid our roster
const employees = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
//inquirer prompt to ask about each team member, with info from their class

//STEP: create an array for the employees to go in?
//STEP: write a for each that does the below to all the objects?


function enterData() {

inquirer
    .prompt([
        {
            name: "name",
            message: "Enter the employee's name:"
        },
        {
            name: "role",
            message: "Enter the employee's role:"
        },
        {
            name: "github",
            message: "Enter the employee's github:",
            when: function(answers) {
              return answers.role === "Engineer";
            }
            //try making the above a double == so you don't have to worry about capitalization
        },
        {
            name: "officeNumber",
            message: "Enter the employee's office number:",
            when: function(answers) {
              return answers.role === "Manager";
            }
        },
        {
            name: "school",
            message: "Enter the employee's school:",
            when: function(answers) {
              return answers.role === "Intern";
            }
        },
        {
            name: "email",
            message: "Enter the employee's email address:"
        },
        {
            name: "id",
            message: "Enter the employee's ID number:"
        },
        {
            name: "keepGoing",
            type: "confirm",
            message: "Enter another employee?",
        }
    ]).then(function(data){
        switch(data.role.type) {
            case "Manager":
                employees.push(new Manager(data));
               break;
            case "Intern":
                employees.push(new Intern(data));
                break;
            case "Engineer":
                employees.push(new Engineer(data));
                break;
        };
        if (data.keepGoing === true) {
            data.keepGoing = null;
            enterData();
        } else {
            data.keepGoing = null;
            let output = render(employees);
            fs.writeFile(__dirname + "/output/teamRoster.html", output, function (err) {
                if (err) throw err;
                console.log('success');
            });
            //need to write fs function here to make it export to html.
        };
    });

};//closing bracket of enterdata function
    
enterData();

// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.

// Hint: you may need to check if the `output` folder exists and create it if it does not.

//FINISHED:

// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work! ```