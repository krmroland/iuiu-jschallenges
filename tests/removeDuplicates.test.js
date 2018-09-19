const removeDuplicates = require("../questions/removeDuplicates");

test("it removes duplicates from a string", () => {
    expect(removeDuplicates("The boy boy is going to school school")).toBe(
        "The boy is going to school"
    );

    expect(removeDuplicates("This is is andela")).toBe("This is andela");
});
