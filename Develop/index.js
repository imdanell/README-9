const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const mdGen = require('../utils/generateMarkdown')

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "what is the name of your project"
    },
    {
      type: "input",
      name: "description",
      message: "describe the project please"
    },
    {
      type: "input",
      name: "installation",
      message: "how do we install your project"
    },
    {
      type: "input",
      name: "usage",
      message: "how do we use your project"
    },
    {
      type: "list",
    message: "choose your license for the project",
    name: "license",
    choices: [
      {
        name: "Apache License 2.0",
        value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      },
      {
        name: "GNU General Public License v3.0",
        value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      },
      {
        name: "MIT License",
        value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      },
      {
        name: "Mozilla Public License 2.0",
        value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      }
      ]

    },
    {
      type: "input",
      name: "contributing",
      message: "Who helped make your project what it is"
    },{
      type: "input",
      name: "tests",
      message: "add instructions on how to test here"
    },
    {
      type: "input",
      name: "github",
      message: "enter your GitHub Username"
    },
    {
        type: "input",
        name: "email",
        message: "enter your email please"
    },
  ]);
}

// function to initialize program

async function init() {
  try {
    const answers = await promptUser();

var filename = "README_Test.md";
const data = mdGen(answers);


    await writeFileAsync(filename, data);

    console.log("Successfully wrote to README_Test.md");
  } catch(err) {
    console.log(err);
  }
}

// function call to initialize program
init();
