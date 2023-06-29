// These are the classes that define the shapes for the logo, they include the constructor and render methods. Each class takes the colour the user has selected. The shapes are filled with a style that includes the user's color choice. //

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

module.exports = {
  Circle: CircleShape,
  Triangle: TriangleShape,
  Square: SquareShape,
  Logo,
};