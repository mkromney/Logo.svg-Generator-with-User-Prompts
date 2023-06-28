// // Jest test example: 
// describe('Testing Multiply'), () => {
//   const color = 'blue'
//   Test('Adds colour blue to class Triangle', () => {
//     expect(triangle.render()).toBe(
//       '<polygon points="100, 30, 200 200, 0 200" style="fill:blue;" />'
//     )
//   })
// }; 

const { Circle, Triangle, Square } = require('./Lib/shapes');

describe('Shape Classes', () => {
  test('Circle render() method generates correct SVG markup', () => {
    const shape = new Circle();
    shape.setColor('blue');
    const expectedAttributes = '<circle cx="50" cy="50" r="40" style="fill:blue;" />';
    expect(shape.render()).toEqual(expectedAttributes);
  });

  test('Triangle render() method generates correct SVG markup', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    const expectedAttributes = '<polygon points="50,10 90,90 10,90" style="fill:blue;" />';
    expect(shape.render()).toEqual(expectedAttributes);
  });

  test('Square render() method generates correct SVG markup', () => {
    const shape = new Square();
    shape.setColor('blue');
    const expectedAttributes = '<rect x="10" y="10" width="80" height="80" style="fill:blue;" />';
    expect(shape.render()).toEqual(expectedAttributes);
  });
});