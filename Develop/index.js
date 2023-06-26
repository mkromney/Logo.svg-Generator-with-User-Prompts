// The package needed for the assignment is here, in a const variable (Inquirer). // 
const inquirer = require("inquirer");
const fs = require("fs");

// The following lines create an array of questions for user input. These are modelled after the .prompt code syntax within Inquirer. Includes a validate prompt that requests an answer when the user does not give one. //
inquirer
  .prompt([
    {
      // Title //
      type: 'input',
      name: 'title',
      message: 'Project Title?',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // License Question, this list is stored above in the licenses const var licenseChoices. //
      type: "list",
      name: "license",
      message: "Which of these Licenses is applicable to your Project?",
      choices: licenseChoices
    },
  ])

  // This sections creates const variables for the responses and then console logs them. //
  .then(answers => {
    
    // Project Title Answer Section //
    const projectTitle = answers.tsitle;
    console.log('Project Title:', projectTitle);

    //Licenses Selection from List Section //
    const selectedLicense = answers.license;
    const selectedLicenseBadge = licenseBadges[selectedLicense];
    const selectedLicenseText = licenseTexts[selectedLicense];
    console.log("Selected License:", selectedLicense);
    console.log("License Badge:", selectedLicenseBadge);
    console.log("License Text:", selectedLicenseText);

  
    const fs = require('fs');

    // Preliminary help from https://www.w3.org/2000/svg -- not sure I will use this, no idea yet if it works. //
    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
      <rect x="50" y="50" width="200" height="100" fill="blue"></rect>
    </svg>`;

    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) {
        console.error('Error occurred while creating logo.svg:', err);
      } else {
        console.log('logo.svg file successfully created!');
      }
    });


  // Catches any errors that might have occurred in the rendering. //
  .catch(error => {
    console.error("Error occurred:", error);
  });
