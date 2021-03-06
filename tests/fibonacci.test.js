const fibonacciSequence = require("../questions/fibonacci");

test("it generates a Fibonacci sequence", () => {
    expect(fibonacciSequence(5)).toEqual([1, 1, 2, 3, 5]);
    expect(fibonacciSequence(10)).toEqual([1, 1, 2, 3, 5, 8]);
});

test("fibonacciSequence generates a sequence up to 100 with no argument", () => {
    expect(fibonacciSequence()).toEqual(
        expect.arrayContaining([1, 1, 2, 3, 5, 8, 13, 21])
    );
});
