const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require("./lib/shapes.js");

function init () {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What characters (no more than 3) would you like your logo to display?',
                name: 'characters',
                validate: function (input) {
                    if (input.length < 4 && input.length !== 0) {
                        return true;
                    }
                    else {
                        return 'Please enter 1 - 3 characters';
                    }
                }
            },
            {
                type: 'input',
                message: 'What color would you like the text to be?',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'What shape would you like the logo to be?',
                name: 'shape',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                message: 'What color would you like the shape to be?',
                name: 'shapeColor',
            },
        ])
        .then((data) => {
            let shape;
            if (data.shape === "Circle") {
              shape = new Circle(data.characters, data.textColor, data.shapeColor);
            } else if (data.shape === "Triangle") {
              shape = new Triangle(data.characters, data.textColor, data.shapeColor);
            } else if (data.shape === "Square") {
              shape = new Square(data.characters, data.textColor, data.shapeColor);
            }
            const logo = generateSVG(shape);
        
            fs.writeFile("logo.svg", logo, (err) =>
              err ? console.log(err) : console.log("Generated logo.svg")
            );
          });
};

function generateSVG(shape) {
    const svg = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`;
    return svg;
  };

init();