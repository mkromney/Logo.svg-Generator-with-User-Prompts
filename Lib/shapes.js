class Circle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="50" cy="50" r="40" style="fill:${this.color};" />`;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="50,10 90,90 10,90" style="fill:${this.color};" />`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="10" y="10" width="80" height="80" style="fill:${this.color};" />`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};
