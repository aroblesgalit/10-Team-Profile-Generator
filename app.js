const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

init();

async function init() {
    try {
        // Create an empty array to push all employees into
        const employees = [];

        // Prompt for manager
        const { name, id, email, officeNumber } = await promptManager();
        // Push manager into array
        employees.push(new Manager(name, id, email, officeNumber));

        // Prompt for team members
        const response = await promptTeamMembers();
        employees.push(response);

        // Prompt if more to add
        await addAnother();

    } catch (err) {
        console.log(err);
    }

}


// Write code to use inquirer to gather information about the development team members,
// Manager prompts
function promptManager() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the manager's name:",
                name: "name"
            },
            {
                type: "number",
                message: "Enter the manager's ID:",
                name: "id"
            },
            {
                type: "input",
                message: "Enter the manager's email:",
                name: "email"
            },
            {
                type: "number",
                message: "Enter the manager's office number:",
                name: "officeNumber"
            }
        ])
}
// Prompt for type of team member
async function promptTeamMembers() {
    try {
        const { role } = await promptMemberRole();
        if (role === "Engineer") {
            return inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Enter the engineer's name:",
                        name: "name"
                    },
                    {
                        type: "number",
                        message: "Enter the engineer's ID:",
                        name: "id"
                    },
                    {
                        type: "input",
                        message: "Enter the engineer's email:",
                        name: "email"
                    },
                    {
                        type: "input",
                        message: "Enter the engineer's github username:",
                        name: "github"
                    }
                ]).then(function({ name, id, email, github }) {
                    return new Engineer(name, id, email, github)
                })
        } else if (role === "Intern") {
            return inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Enter the intern's name:",
                        name: "name"
                    },
                    {
                        type: "number",
                        message: "Enter the intern's ID:",
                        name: "id"
                    },
                    {
                        type: "input",
                        message: "Enter the intern's email:",
                        name: "email"
                    },
                    {
                        type: "input",
                        message: "Enter the intern's school:",
                        name: "school"
                    }
                ]).then(function({ name, id, email, school }) {
                    return new Engineer(name, id, email, school)
                })
        }

    } catch (err) {
        console.log(err);
    }
}
// Prompt for member role
function promptMemberRole() {
    return inquirer
        .prompt({
            type: "list",
            message: "Which type of team member would you like to add next?",
            name: "role",
            choices: [
                "Engineer",
                "Intern"
            ]
        })
}
// Function to ask if user wants to add another team member
// async function addAnother() {
//     try {

//     } catch (err)
//     return inquirer
//         .prompt ({

//         })
// } 
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
