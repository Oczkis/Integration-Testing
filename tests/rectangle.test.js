const { getRectangleArea, getRectanglePerimeter, getRectangleInfo } = require('../js/rectangle');

test('should output length plus width multiplied by 2', () => {
    const number = getRectanglePerimeter(5, 5);
    expect(number).toBe(2 * (5 + 5));
});

test('should output length multiplied by width', () => {
    const number = getRectangleArea(5, 5);
    expect(number).toBe(5 * 5);
});

test('should output all neccessary rectangle information', () => {

    const consoleLogSpy = jest.spyOn(console, 'log')
    const number = 5;
    const string = (`The perimeter of a rectangle is ${getRectanglePerimeter(number, number)} and the area is ${getRectangleArea(number, number)}`);

    getRectangleInfo(number, number);

    expect(consoleLogSpy).toBeCalledWith(string);
});
