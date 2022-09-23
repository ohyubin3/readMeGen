const inquirer = require("inquirer");
const fs = require("fs");

function renderLicenseBadge(license) {
  let badgeString = "";
  if (license === "MIT") {
    badgeString = `[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "IBM") {
    badgeString =
      "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }
  return badgeString;
}

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Please provide the title of your project.",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide your project description.",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide your project installation instructions.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide your project usage information",
    },
    {
      type: "input",
      name: "guideline",
      message: "Please provide your project contribution guidelines.",
    },
    {
      type: "list",
      name: "license",
      message: "Please choose your licenses.",
      choices: ["MIT", "IBM"],
    },
    {
      type: "input",
      name: "test",
      message: "Please provide your test instructions for your project.",
    },
    {
      type: "input",
      name: "github",
      message: "Please provide your github repository address",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide your email",
    },
  ])
  .then((response) => {
    let readMeText = `
# ${renderLicenseBadge(response.license)}

# ${response.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Test](#test)
* [Contact Me](#contact)
    
# Description
    ${response.description}
    


# Installation
    ${response.installation}
    


# Usage
    ${response.usage}
    


# Contributors
    ${response.guideline}
    


# License 
    ◈This project has been covered under the ${response.license} license.
    


# Test
    ${response.test}



# Contact Me
    Github : https://github.com/${response.github}
    Email : ${response.email}
`;
    fs.writeFile("newReadMe.md", readMeText, function (err) {
      if (err) console.log(err);
    });
  });
