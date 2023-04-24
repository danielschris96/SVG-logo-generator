class Shape{
    constructor (characters, textColor, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
};

class Circle extends Shape {
    constructor(characters, textColor, shapeColor) {
      super(characters, textColor, shapeColor);
    }
  
    render() {
        const shapeStyle = `fill:${this.shapeColor};`;
        const textStyle = `fill:${this.textColor};`;
        const text = `<text x="50%" y="62%" font-size="75px" text-anchor="middle" style="${textStyle}">${this.characters}</text>`;
        return `<circle cx="50%" cy="50%" r="100" class="shape" style="${shapeStyle}"/>${text}`;
      }
  };
  
  class Triangle extends Shape {
    constructor(characters, textColor, shapeColor) {
      super(characters, textColor, shapeColor);
    }
  
    render() {
      const shapeStyle = `fill:${this.shapeColor};`;
      const textStyle = `fill:${this.textColor};`;
      const text = `<text x="50%" y="60%" font-size="50px" text-anchor="middle" dominant-baseline="central" style="${textStyle}">${this.characters}</text>`;
      return `<polygon cx="50%" cy="50%" points="150, 18 244, 182 56, 182" class="shape" style="${shapeStyle}"/>${text}`;
    }
  };
  
  class Square extends Shape {
    constructor(characters, textColor, shapeColor) {
      super(characters, textColor, shapeColor);
    }
  
    render() {
      const shapeStyle = `fill:${this.shapeColor};`;
      const textStyle = `fill:${this.textColor};`;
      const text = `<text x="50%" y="50%" font-size="75px" text-anchor="middle" dominant-baseline="central" style="${textStyle}">${this.characters}</text>`;
      return `<rect x="50px" width="200" height="200" style="${shapeStyle}"/>${text}`;
    }
  };

  module.exports = {Circle, Triangle, Square};