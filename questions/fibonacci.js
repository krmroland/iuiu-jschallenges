/**
 * Generates a Fibonacci sequence up to a given number
 * @param  {Number} maximum
 * @return {Array}
 */
const fibonacciSequence = (maximum = 100) => {
    const sequence = [1];
    let prev = 0;
    let next = 1;
    while (next <= maximum) {
        const sum = prev + next;
        if (sum > maximum) break;
        sequence.push(sum);
        let prevCache = prev;
        prev = next;
        next = prevCache + next;
    }

    return sequence;
};

module.exports = fibonacciSequence;
