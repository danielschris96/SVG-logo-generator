const {Circle, Triangle, Square} = require("./shapes.js");
// defining test suite
describe('Circle', () => {
    describe('shapeColor', () => {
        it('should assign the color of the shape equal to the user input', () => {
            const shape = new Circle();
            shape.shapeColor = 'blue';
            // confirms that the shape color is properly set
            expect(shape.render()).toContain('style="fill:blue');
        });
    });
});

describe('Triangle', () => {
    describe('shapeColor', () => {
        it('should assign the color of the shape equal to the user input', () => {
            const shape = new Triangle();
            shape.shapeColor = 'red';
            expect(shape.render()).toContain('style="fill:red');
        });
    });
});

describe('Square', () => {
    describe('shapeColor', () => {
        it('should assign the color of the shape equal to the user input', () => {
            const shape = new Circle();
            shape.shapeColor = 'green';
            expect(shape.render()).toContain('style="fill:green');
        });
    });
});

describe('Circle', () => {
    describe('characters', () => {
        it('should assign the text of the logo to the user input', () => {
            const shape = new Circle();
            shape.characters = 'ABC';
            // confirms that the logo text is properly set
            expect(shape.render()).toContain('ABC');
        });
    });
});

describe('Triangle', () => {
    describe('characters', () => {
        it('should assign the text of the logo to the user input', () => {
            const shape = new Triangle();
            shape.characters = 'DEF';
            expect(shape.render()).toContain('DEF');
        });
    });
});

describe('Square', () => {
    describe('characters', () => {
        it('should assign the text of the logo to the user input', () => {
            const shape = new Square();
            shape.characters = 'GHI';
            expect(shape.render()).toContain('GHI');
        });
    });
});

describe('Circle', () => {
    describe('textColor', () => {
        it('should assign the text of the logo to the user input', () => {
            const shape = new Circle();
            // confirms that the text color is properly set
            shape.textColor = 'orange';
            expect(shape.render()).toContain('style="fill:orange');
        });
    });
});

describe('Triangle', () => {
    describe('textColor', () => {
        it('should assign the text of the logo to the user input', () => {
            const shape = new Triangle();
            shape.textColor = 'purple';
            expect(shape.render()).toContain('style="fill:purple');
        });
    });
});

describe('Circle', () => {
    describe('textColor', () => {
        it('should assign the text of the logo to the user input', () => {
            const shape = new Square();
            shape.textColor = 'yellow';
            expect(shape.render()).toContain('style="fill:yellow');
        });
    });
});