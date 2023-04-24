const {Circle, Triangle, Square} = require("./shapes.js");

describe('Circle', () => {
    describe('shapeColor', () => {
        it('should assign the color of the shape equal to the user input', () => {
            const color = 'blue';
            const shape = new Circle();
            shape.shapeColor = 'blue';
            expect(shape.render()).toContain('style="fill:blue');
        });
    });
});

describe('Triangle', () => {
    describe('shapeColor', () => {
        it('should assign the color of the shape equal to the user input', () => {
            const color = 'red';
            const shape = new Triangle();
            shape.shapeColor = 'red';
            expect(shape.render()).toContain('style="fill:red');
        });
    });
});

describe('Square', () => {
    describe('shapeColor', () => {
        it('should assign the color of the shape equal to the user input', () => {
            const color = 'green';
            const shape = new Circle();
            shape.shapeColor = 'green';
            expect(shape.render()).toContain('style="fill:green');
        });
    });
});