'use strict';

//PROBLEM:

/* We work for a company building a smart home thermometer.
Out most recent task is this: "Given an array of temperatures of one day,
calculate the temperature amplitude. Keep in mind that sometimes there might
be a sensor error.
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [2, 4, 5, 3, 2, -7, -45, 24, -1, -3];

// 1) Understanding the problem
//- How do you calculate 'amplitude'? How do i get min and max values of array
//what is temperature amplitude? - the difference between the highest and lowest temps
//what causes a sensor error? What should we do to handle it? (ignore it)
// 2) Breakup problem into sub-problems
// - how to ignore the 'error' in the array
// - find max value in the array
// - find min value in the array
// - subtract min from max
// - return the value of (min - max) - amplitude

//here we get the max value of the array
const getMaxOfArray = function () {
  let max = temperatures[0];
  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > max) {
      max = temperatures[i];
    }
  }
  return max;
};

//here we get the min value of the array
const getMinOfArray = function () {
  let min = temperatures[0];
  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] < min) {
      min = temperatures[i];
    }
  }
  return min;
};

//return the amplitude of the temperatures array
const getAmplitudeOfArray = (min, max) => {
  return max - min;
};

console.log(getMaxOfArray(temperatures));
console.log(getMinOfArray(temperatures));
console.log(getAmplitudeOfArray(getMinOfArray(), getMaxOfArray()));

//here we are concatenating two arrays together with the "concat" command
console.log(temperatures.concat(temperatures2));
