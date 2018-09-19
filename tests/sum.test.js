const sum = require("../questions/sum");

test("sum adds an infinite list of numbers", () => {
    expect(sum(1, 2, 3)).toBe(6);
    expect(sum(1, 2, 3, 4, 5, 6)).toBe(21);
});

test("sum omits non numbers while adding", () => {
    expect(sum(1, 2, 3, "a")).toBe(6);
    expect(sum(1, 2, 3, "A non number", 4)).toBe(10);
});
