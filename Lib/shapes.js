// These are the classes that define the shapes for the logo, they include the constructor and render methods. Each class takes the colour the user has selected. The shapes are filled with a style that includes the user's color choice. //

// Using Shape as a parent class makes it so I don't have to call every single class over to the index.js file. Instead, I can reference Shape and it will in turn reference the child classes within its domain. //
class Shape {
  constructor() {
    this.color = '';
  }
  setColorFunction(addColor) {
    this.color = addColor;
  }
}

class CircleShape extends Shape {
  render() {
    return `<circle cx="50" cy="50" r="40" style="fill:${this.color};" />`;
  }
}

class TriangleShape extends Shape {
  render() {
    return `<polygon points="50,10 90,90 10,90" style="fill:${this.color};" />`;
  }
}

class SquareShape extends Shape {
  render() {
    return `<rect x="10" y="10" width="80" height="80" style="fill:${this.color};" />`;
  }
}

module.exports = {
  Circle: CircleShape,
  Triangle: TriangleShape,
  Square: SquareShape,
};