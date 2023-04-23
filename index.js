const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

function init () {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What characters (no more than 3) would you like your logo to display?',
                name: 'characters',
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
    }