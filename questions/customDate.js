/**
 * Challenge 1
 * A  program to display the current day and time
 * Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38
 * @return {String}
 */
const currentDayAndTime = () => {
    const now = new Date();

    const today = new Date().toLocaleString("en-GB", { weekday: "long" });

    const time = now.toLocaleTimeString({ seconds: "numeric" });

    return `Today is : ${today}. Current time is : ${time}`;
};

module.exports = currentDayAndTime;
