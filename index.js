// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
let fileName = 'README.md';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?(Required)',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE-2.0', 'LGPL-3.0', 'BSL-1.0', 'None'],
      },
      {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies? (npm i)',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests? (npm test)',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Generating README.md file...')
    );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    const readmeData = generateMarkdown(answers);
    writeToFile(fileName, readmeData)
  })
}

// Function call to initialize app
init();
