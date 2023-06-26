// The package needed for the assignment is here, in a const variable (Inquirer). // 
const inquirer = require("inquirer");
const fs = require("fs");

// Shapes const variable for choosing the shape of the logo. //
const shapeChoices = ["Triangle", "Circle", "Square"];

//Stores the values of the shapeChoices. //
const shapeLog = {
  Triangle: "", Circle: "", Square: ""
};

// Color const variable for choosing the color of the shape in the logo. //
const colorChoices = ["Green", "Yellow", "Blue", "Red"];

//Stores the values of the colorChoices. //
const colorLog = {
  Green: "", Yellow: "", Blue: "", Red: "", 
};

// The following lines create an array of questions for user input. These are modelled after the .prompt code syntax within Inquirer. Includes a validate prompt that requests an answer when the user does not give one. //
inquirer
.prompt([
  {
    // User input for the three letters in the svg logo. //
    type: 'input',
    name: 'text',
    message: 'Three Letter Logo',
    validate: (answer) => {
      // Forces user input to include at least three letters. //
      if (answer.length !== 3) {
        return 'Please enter exactly three letters.';
      }
      return true;
    },
  },
    {
      // License Question, this list is stored above in the licenses const var licenseChoices. //
      type: "list",
      name: "shape",
      message: "Choose a shape.",
      choices: shapeChoices
    },
  ])

  // This sections creates const variables for the responses and then console logs them. //
  .then(answers => {
    
    // Project Title Answer Section //
    const projectTitle = answers.tsitle;
    console.log('Project Title:', projectTitle);

    //Licenses Selection from List Section //
    const selectedLicense = answers.license;
    
    console.log("Selected License:", selectedLicense);
    

  
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
    });

// Need to catch errors here. //
  

