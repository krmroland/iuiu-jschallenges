const currentDayAndTime = require("../questions/1");

test("It returns the correct meridian positon", () => {
    expect(currentDayAndTime().includes("Today is")).toBe(true);
});
