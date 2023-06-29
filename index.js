const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./Lib/shapes');

// 
class Logo {
  constructor() {
    this.text = '';
    this.shape = '';
  };
  render() {
    return(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${this.text}${this.shape}
    </svg>`
    );
  };
  setText(text){
      this.text = `<text class="letters" x="50" y="60"text-anchor="middle">${text}</text>`
  }

  setShape(shape){
    this.shape = `<g class="shape">${shape.render()}</g>`
  }
};



// Define the questions for the user prompts
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

// Prompt the user with the questions
inquirer.prompt(questions).then((answers) => {
  const { shape, color, letters } = answers;

  console.log('answers --->', answers)

  let selectedShape;
  let logo = new Logo();
  let chosenLogo;

  if(shape === "triangle") {
    selectedShape = new Triangle()
    
  }

  selectedShape.setColorFunction(color)

  console.log(selectedShape)
  logo.setText(letters)
  logo.setShape(selectedShape)


  chosenLogo = logo.render()

  console.log('CHOSEN LOGO ---> ', chosenLogo)

  
  // Generate the SVG markup based on user inputs
  // const svgMarkup = generateSVGAttributes(shape, color, letters);

  // Write the SVG markup to a file
  // fs.writeFile('logo.svg', svgMarkup, (err) => {
  //   if (err) {
  //     console.error('Failed to write SVG file:', err);
  //   } else {
  //     console.log('SVG file generated successfully!');
  //   }
  // });
});

// Function to generate the SVG Logo
// function generateSVGAttributes(shape, color, letters) {
//   let shapeAttributes = '';

//   // Generate the shape based on the selected shape
//   switch (shape) {
//     case 'circle':
//       shapeAttributes = `<circle cx="50" cy="50" r="40" />`;
//       break;
//     case 'triangle':
//       shapeAttributes = `<polygon points="50,10 90,90 10,90" />`;
//       break;
//     case 'square':
//       shapeAttributes = `<rect x="10" y="10" width="80" height="80" />`;
//       break;
//     default:
//       console.error('Invalid shape selected!');
//       break;
//   }

//   // Generate the SVG markup with the selected shape, color, and letters
//   const svgLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//     <style>
//       .shape {
//         fill: ${color};
//       }
//       .letters {
//         font-family: Arial, sans-serif;
//         font-size: 12px;
//         fill: #fff; /* Updated to make the text white */
//       }
//     </style>
//     <g class="shape">${shapeAttributes}</g>
//     <text class="letters" x="50" y="60" text-anchor="middle">${letters}</text>
//   </svg>`;

//   return svgLogo;
// }
