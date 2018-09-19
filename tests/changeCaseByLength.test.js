const changeCaseByLength = require("../questions/changeCaseByLength");

test("it returns all caps for characters less than three", () => {
    expect(changeCaseByLength("py")).toBe("PY");
});

test("it makes the first 3 characters lower and the rest upper", () => {
    expect(changeCaseByLength("python")).toBe("pytHON");
});
