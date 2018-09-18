const reverseString = require("../questions/2");
test("test it reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("Andela")).toBe("alednA");
    expect(() => reverseString()).toThrow(TypeError);
});
