/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    let sum = a + b
    let otput = a + " + " +  b + " = " + sum   
    return otput

}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    let start = startNumber;
    let end = endNumber;
    let output = [];
    for (let n = start; n <= end; n++) {
        output.push(n);
    }
    return output;

}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let minimum = 0;
    let maximum = 0;
    let nums = numbers.sort(function(a,b){return a-b});
    minimum = nums[0];
    maximum = nums[nums.length-1];
    return {maximum, minimum};

}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    let output = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i] in output) {
            output[array[i]] += 1;
        } else if (!(array[i] in output)) {
            output[array[i]] = 1;
        }
    }
    return output;

}
