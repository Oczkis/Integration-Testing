const {getRectangleArea, getRectanglePerimeter } = require('../js/rectangle');

test('should output length plus width multiplied by 2', () => {
    const number = getRectanglePerimeter(5, 5);
    expect(number).toBe(2 * (5 + 5));
});

test('should output length multiplied by width', () => {
    const number = getRectangleArea(5, 5);
    expect(number).toBe(5 * 5);
});

test('should output all neccessary rectangle information', () => {
    const area = getRectangleArea(5, 5);

    const perimeter = getRectanglePerimeter(5, 5);

    const string = `The perimeter of a rectangle is ${perimeter} and the area is ${area}`

    expect(string).toBe(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`);
});
