// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}  ![badge](https://img.shields.io/badge/license-${answers.license}-yellow.svg)
  ## Description:
   ${answers.description}

  ## Table of Contents:
  
  * [installation](#installation)
  
  * [usage](#usage)
  
  * [License](#license)

  ## Install Instruction:
  
  ${answers.installation}
  ## Usage:
  
  ${answers.usage}

  ![screenshot](./images.ss1.png)


  ![screenshot](./images.ss2.png)
  

  ## Guidelines for contribution:
  
  ${answers.contribution}
  ## Test Instructions:
  
  ${answers.testInst}
## Contact Information:

for any clarification or questions, contact me!
email: ${answers.email}
GitHub: ${answers.github}

`;
}

module.exports = {
  generateMarkdown,
  
};
