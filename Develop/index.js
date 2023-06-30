// These constant variables store the necessary paths to require resources in other. This includes the inquirer library, and the variable storing information about the shapes modules. //

const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('../Lib/shapes');

// In this class we store the constructor and render methods which has two properties pulling from shapes.js, text and shape. //
class Logo {
  constructor() {
    this.text = '';
    this.shape = '';
  }

  // This render method give us the string that will represent the logo, below we set the parameter of that logo with the setText and setShape based on the user's input. //
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${this.shape}${this.text}</svg>`;
  }

  setText(text) {
    this.text = `<text class="letters" x="50" y="60" text-anchor="middle" fill="white">${text}</text>`;
  }

  setShape(shape) {
    this.shape = `<g class="shape">${shape.render()}</g>`;
  }
}

// Modelled after the inquirer library, this variable stores the user prompts and allowed selections. There is also an input prompt for three letters that make up the Text of the logo. //
const questions = [
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'list',
    name: 'color',
    message: 'Select a color:',
    choices: ['blue', 'green', 'red', 'yellow'],
  },
  {
    type: 'input',
    name: 'letters',
    message: 'Enter three letters:',
    validate: (input) => {
      if (input.length === 3) {
        return true;
      }
      return 'Please enter exactly three letters.';
    },
  },
];

// This function displays the questions to the user and then shows the user their selection as a confirmation. answers is broken down in order to take the selected logo attributes based on the classes stored in ./Lib/shapes.js. //
inquirer.prompt(questions).then((answers) => {
  const { shape, color, letters } = answers;
  let selectedShape;
  let logo = new Logo();
  let chosenLogo;

  if (shape === 'triangle') {
    selectedShape = new Triangle();
  } else if (shape === 'circle') {
    selectedShape = new Circle();
  } else if (shape === 'square') {
    selectedShape = new Square();
  }

  // These variables store the logo with its final attributes as a string, the string that ends up being the .svg file. //
  selectedShape.setColorFunction(color);

  logo.setText(letters);
  logo.setShape(selectedShape);

  chosenLogo = logo.render();

// The fs.writeFile function writes the file and names it 'logo.svg' usign the newly stored string. //
  fs.writeFile('logo.svg', chosenLogo, (err) => {
    if (err) {
      console.error('Error writing logo.svg:', err);
    } else {
      console.log('logo.svg created successfully!');
    }
  });
});
