const { Circle, Triangle, Square } = require('./shapes');

describe('Shape render tests', () => {

    // test each shape to ensure it renders properly
    
    test('Circle renders properly', () => {

        const circle = new Circle('red');

        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
    });

    test('Triangle renders properly', () => {

        const triangle = new Triangle('blue');

        expect(triangle.render()).toEqual('<polygon points="150,50 100,150 200,150" fill="blue" />');
    });

    test('Square renders properly', () => {

        const square = new Square('green');

        expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
    });
});