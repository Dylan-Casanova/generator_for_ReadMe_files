// TODO: Include packages needed for this application
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
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
        name: 'test intructions',
        message: 'Test Instructions:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github Usarname:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'project description:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address:'
    },
];

// TODO: Create a function to write README file
function createReadme(fileName, data) {
    let content = markdown.generateMarkdown(data);
    fs.writeFile(fileName, content, (err) =>{
      err ? console.error(err) : console.log('File written!')
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      createReadme('output.md', answers);
    })
  }
// Function call to initialize app
init();
