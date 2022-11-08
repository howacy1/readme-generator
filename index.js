const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// Prompts the questions for title, project description, installation, contributors, tests, github username, email adress, and licenses.
const questions = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },

        {
            type: 'input',
            name: 'description',
            message: 'What is the descritption of your project?',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for your project?',
        },

        {
            type: 'input',
            name: 'contributor',
            message: 'List Contributors to this project',
        },

        {
            type: 'input',
            name: 'test',
            message: 'What is being tested?',
        },

        {
            type: 'input',
            name: 'username',
            message: "Enter GitHub Username",
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },

        {
            type: 'list',
            name: 'license',
            message: 'What license is used?',
            choices: ['MIT', 'The Unlincense', 'Apache 2.0'],
            default: 'MIT',
        },
    ])
};

// function to write the readme file
const writeToFile = (fileName, data) => {
    fs.writeFileSync(fileName, data, err => {
        if (err) {
            console.error(err);
        } 
    })
};

// call to initialize
function init() {
    questions()
    .then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('./example/README.md', markdown);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current enviroment")
        } else {
            console.error('Something went wrong', error)
        }
    })
};

init()