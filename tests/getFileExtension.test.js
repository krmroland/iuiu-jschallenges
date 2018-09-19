const getFileExtension = require("../questions/getFileExtension");

test("Its returns the correct file extension", () => {
    expect(getFileExtension("a.php")).toBe("php");
    expect(getFileExtension("file.test.js")).toBe("js");
});

test("Its returns the null if a file has no extension", () => {
    expect(getFileExtension("file")).toBeNull();
});
