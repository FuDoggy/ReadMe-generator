var inquirer = require("inquirer")
var fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
    type: "input",
    message: "What would you like your application to be titled? ",
    name: "title",
    default: "My Awesome App"
    },

    {
    type: "input",
    message: "Please provide a description for your application: ",
    name: "description"
    },

    {
    type: "input",
    message: "What would you like in your table of contents: ",
    name: "tableofcontents"
    },

    {
    ype: "input",
    message: "How would a user install your application?  Provide instructions here: ",
    name: "installation",
    default: "npm install"
    },
    
    {
    type: "input",
    message: "How does a user use your application?  Provide instructions here: ",
    name: "usage",
    default: "follow the prompts"
    },
    
    {
    type: "input",
    message: "Which license would you like to use?  If none, please write 'none': ",
    name: "license",
    default: "none"
    },
    
    {
    type: "input",
    message: "Who else contributed to your application?  If none, please write 'none': ",
    name: "contributing",
    default: "just me"
    },
    
    {
    type: "input",
    message: "Please include your test instructions for the user: ",
    name: "tests",
    default: "none"
    },

    {
    type: "input",
    message: "What is your GitHub username?: ",
    name: "questions1"
    },

    {
    type: "input",
    message: "What is your email address?: ",
    name: "questions2"
    }

    
];







// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers)

        // function to write README file
        fs.writeFile("README.md", data, err => console.log(err))
    })
    .catch(error => {
        if(error) {
            console.log(error)
        }
    })
}

// function call to initialize program
init();
