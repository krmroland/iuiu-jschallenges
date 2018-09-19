const closestTo100 = require("../questions/closestTo100");

test("It throws a TyperError for any argument that is not a number", () => {
    expect(() => closestTo100("a", 10)).toThrow(TypeError);
});

test("it determines the closest the number to 100 ", () => {
    expect(closestTo100(90, 10)).toBe(90);
    expect(closestTo100(-20, 300)).toBe(-20);
    expect(closestTo100(-2, 40)).toBe(40);
});
