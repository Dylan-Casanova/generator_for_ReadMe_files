// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdownFile = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'contribution guidelines:'
    },
    {
        type: 'input',
        name: 'testInst',
        message: 'Test Instructions:'
    },
    {
        type:'list',
        name: 'license',
        message: 'please make a selection',
        choices: ['none','Apache-2.0', 'MIT','ISC']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github Usarname:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address:'
    },
];

// TODO: Create a function to write README file
function createReadme(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('File written!')
    );
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      createReadme('ReadMe.md', markdownFile.generateMarkdown(answers));
    })
  };
// Function call to initialize app
init();
