const addCommas = require("./addCommas");

describe("addCommas function", () => {
    test("should be a function", () => {
        expect(typeof addCommas).toBe("function");
    });

    test("should add commas to a positive integer", () => {
        expect(addCommas(1000)).toBe('1,000');
    });

    test("should add commas to a large positive integer", () => {
        expect(addCommas(123456789)).toBe('123,456,789');
    });

    test("should add commas to a number with decimal", () => {
        expect(addCommas(9876543.21)).toBe('9,876,543.21');
    });

    test("should add commas to a negative integer", () => {
        expect(addCommas(-123456789)).toBe('-123,456,789');
    });

    test("should add commas to a negative number with decimal", () => {
        expect(addCommas(-9876543.21)).toBe('-9,876,543.21');
    });

    test("should not add commas to a small number", () => {
        expect(addCommas(42)).toBe('42');
    });

    test("should handle zero correctly", () => {
        expect(addCommas(0)).toBe('0');
    });

    test("should handle invalid input gracefully", () => {
        expect(addCommas('abc')).toBe('NaN');
    });
});
