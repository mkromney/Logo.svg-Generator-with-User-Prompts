const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./Lib/shapes');

class Logo {
  constructor() {
    this.text = '';
    this.shape = '';
  }

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

  selectedShape.setColorFunction(color);

  logo.setText(letters);
  logo.setShape(selectedShape);

  chosenLogo = logo.render();

  fs.writeFile('logo.svg', chosenLogo, (err) => {
    if (err) {
      console.error('Error writing logo.svg:', err);
    } else {
      console.log('logo.svg created successfully!');
    }
  });
});
