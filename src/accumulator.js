/*
 * Accumulates one or more variables together and maintains a running integer sum of the
 * elements. Updates to this total sum are done via the accumulate() function. The current
 * value of the running total is returned by calling total().
 *
 * The initial value of the running sum should be 0.
 *
 * The total sum should be set to 0 by calling reset().
 *
 * Usage example:
 *   const { accumulate, total, reset } = require('./Accumulator');;
 *   let firstSum = accumulate([1, 2, 3]);
 *   let secondSum = accumulate([4]);
 *   let total = total(); 
 * 
 * In this case, the value of firstSum is 6, secondSum is 4 and the value of is 10. Calling reset() would reset the total value to 0.
 *
 */

module.exports = {
    accumulate(values) {
        return values[0];
    },

    total() {
        return 5;
    },

    reset() {
        return 5;
    },
}