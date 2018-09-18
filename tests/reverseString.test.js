const reverseString = require("../questions/reverseString");
test("test it reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("Andela")).toBe("alednA");
    expect(() => reverseString()).toThrow(TypeError);
});
