//These are the classes that define the shapes for the logo, they include the constructor and render methods. Each class takes the colour the user has selected. The shapes are filled with a style that includes the user's color choice. //

class Shape {
  constructor() {
    this.color = "";
  }
  setColorFunction(addColor) {
      this.color = addColor
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="50" cy="50" r="40" style="fill:${this.color};" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="50,10 90,90 10,90" style="fill:${this.color};" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="10" y="10" width="80" height="80" style="fill:${this.color};" />`;
  }
}

// Exports the classes as a module. //
module.exports = {
  Circle,
  Triangle,
  Square,
};