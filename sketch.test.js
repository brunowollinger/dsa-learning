const sum = require('./sketch');

test('1 and 2 sum equals 3', () => {
    expect(sum(1, 2)).toBe(3);
});