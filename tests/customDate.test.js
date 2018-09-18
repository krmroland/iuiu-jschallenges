const currentDayAndTime = require("../questions/customDate");

test("It returns the correct meridian positon", () => {
    expect(currentDayAndTime().includes("Today is")).toBe(true);
});
