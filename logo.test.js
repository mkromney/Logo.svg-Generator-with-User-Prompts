// For testing your shape classes:
// You would create another file for testing your shapes and import all your shape classes
// If the code for shapes is in a folder, you would need to make sure to include that in the file path (e.g. ./Lib/shapes.js)

const { generateSVGAttributes } = require('./index.js'); 

// Your test cases go here
test('generateSVGAttributes generates the correct SVG markup', () => {
  const shape = 'circle';
  const color = 'blue';
  const letters = 'ABC';

  const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <style>
      .shape {
        fill: blue;
      }
      .letters {
        font-family: Arial, sans-serif;
        font-size: 12px;
        fill: #fff;
      }
    </style>
    <g class="shape"><circle cx="50" cy="50" r="40" /></g>
    <text class="letters" x="50" y="60" text-anchor="middle">ABC</text>
  </svg>`;

  const generatedSVG = generateSVGAttributes(shape, color, letters);

  expect(generatedSVG).toBe(expectedSVG);
});
