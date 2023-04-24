const {Circle, Triangle, Square} = require("./shapes.js");

describe('Circle', () => {
    describe('shapeColor', () => {
        it('should assignt the color of the shape equal to the user input', () => {
            const color = 'blue';
            const shape = new Circle();
            shape.shapeColor = 'blue';
            expect(shape.render()).toContain('style="fill:blue');
        });
    });
});