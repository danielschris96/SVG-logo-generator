class Shape{
    constructor (characters, textColor, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(characters, textColor, shapeColor) {
      super(characters, textColor, shapeColor);
    }
  
    render() {
        const shapeStyle = `fill:${this.shapeColor}; stroke:none;`;
        return `<circle cx="100" cy="100" r="100" class="shape" style="${shapeStyle}"/>`;
      }
  }
  
  class Triangle extends Shape {
    constructor(characters, textColor, shapeColor) {
      super(characters, textColor, shapeColor);
    }
  
    render() {
      const shapeStyle = `fill:${this.shapeColor}; stroke:none;`;
      return `<polygon points="150, 18 244, 182 56, 182" class="shape" style="${shapeStyle}"/>`;
    }
  }
  
  class Square extends Shape {
    constructor(characters, textColor, shapeColor) {
      super(characters, textColor, shapeColor);
    }
  
    render() {
      const shapeStyle = `fill:${this.shapeColor}; stroke:none;`;
      return `<rect x="0" y="0" width="200" height="200" style="${shapeStyle}"/>`;
    }
  };

  module.exports = {Circle, Triangle, Square}