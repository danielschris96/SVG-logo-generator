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
        const textStyle = `fill:${this.textColor};`;
        const text = `<text x="100" y="125" font-size="75" text-anchor="middle" style="${textStyle}">${this.characters}</text>`;
        return `<circle cx="100" cy="100" r="100" class="shape" style="${shapeStyle}"/>${text}`;
      }
  }
  
  class Triangle extends Shape {
    constructor(characters, textColor, shapeColor) {
      super(characters, textColor, shapeColor);
    }
  
    render() {
      const shapeStyle = `fill:${this.shapeColor}; stroke:none;`;
      const textStyle = `fill:${this.textColor};`;
      const text = `<text x="150" y="125" font-size="50" text-anchor="middle" dominant-baseline="central" style="${textStyle}">${this.characters}</text>`;
      return `<polygon points="150, 18 244, 182 56, 182" class="shape" style="${shapeStyle}"/>${text}`;
    }
  }
  
  class Square extends Shape {
    constructor(characters, textColor, shapeColor) {
      super(characters, textColor, shapeColor);
    }
  
    render() {
      const shapeStyle = `fill:${this.shapeColor}; stroke:none;`;
      const textStyle = `fill:${this.textColor};`;
      const text = `<text x="100" y="105" font-size="75" text-anchor="middle" dominant-baseline="central" style="${textStyle}">${this.characters}</text>`;
      return `<rect x="0" y="0" width="200" height="200" style="${shapeStyle}"/>${text}`;
    }
  };

  module.exports = {Circle, Triangle, Square}