const inquirer = require('inquirer');
const fs = require('fs');
// import shape classes from shapes.js
const {Circle, Triangle, Square} = require("./lib/shapes.js");

// inquirer prompts for the user
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What characters (no more than 3) would you like your logo to display?',
                name: 'characters',
                // only lets user use 1 - 3 characters for the logo
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
          // create new shape object based on user input
            let shape;
            if (data.shape === "Circle") {
              shape = new Circle(data.characters, data.textColor, data.shapeColor);
            } else if (data.shape === "Triangle") {
              shape = new Triangle(data.characters, data.textColor, data.shapeColor);
            } else if (data.shape === "Square") {
              shape = new Square(data.characters, data.textColor, data.shapeColor);
            }
            
            const logo = generateSVG(shape);
        
            // writes the data to a new or updated logo.svg file
            fs.writeFile("logo.svg", logo, (err) =>
              err ? console.log(err) : console.log("Generated logo.svg")
            );
          });

// generates svg code for the logo
function generateSVG(shape) {
    const svg = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`;
    return svg;
  };

