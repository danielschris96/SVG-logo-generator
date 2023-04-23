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
  
    generateSVG() {
      return '<circle cx="100" cy="100" r="100" class="shape"/>';
    }
  }
  
  class Triangle extends Shape {
    constructor(characters, textColor, shapeColor) {
      super(characters, textColor, shapeColor);
    }
  
    generateSVG() {
      return '<polygon points="100,0 50,100 0,100" class="shape"/>';
    }
  }
  
  class Square extends Shape {
    constructor(characters, textColor, shapeColor) {
      super(characters, textColor, shapeColor);
    }
  
    generateSVG() {
      return '<rect x="0" y="0" width="200" height="200" class="shape"/>';
    }
  }