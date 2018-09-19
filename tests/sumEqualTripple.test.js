const sum = require("../questions/sumEqualTriple");

test("sum correctly adds two numbers together", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(12, 3)).toBe(15);
});

test("It triples the sum if the numbers are equal", () => {
    expect(sum(2, 2)).toBe(12);
    expect(sum(5, 5)).toBe(30);
});
