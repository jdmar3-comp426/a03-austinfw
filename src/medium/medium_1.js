import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var sum = 0;
    for (let i = 0; i < [...array].length; i++) {
        sum += array[i];
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    var sorted_array = [...array].sort(function(a,b){return a-b});
    var middle = [...array].length/2;
    return sorted_array.length % 2 == 0 ? sorted_array[middle] : (sorted_array[middle - 1] + sorted_array[middle] / 2)

}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let min = 0;
    let median = 0;
    let max = 0;
    let variance = 0;
    let mean = 0;
    let length = 0;
    let sum = 0;
    let standard_deviation = 0;
    if ([...array].length > 0) {
        var sorted_array = [...array].sort(function(a,b){return a-b});
        min = sorted_array[0];
        median = getMedian(array);
        max = sorted_array[sorted_array.length - 1]
        mean = getSum(array);
        variance  = variance(array, mean);
        length = array.length;
        sum = getSum(array);
        standard_deviation = Math.sqrt(variance);
        return {length, sum, mean, median, min, max, variance, standard_deviation}
    } else {
        return "";
    }

    

}

