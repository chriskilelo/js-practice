/**
 * TO GOD BE ALL THE GLORY
 * 14-NOV-2023
 * The main entry file
 */

// Require colors to enable us to log to the console in different colors
require('colors')
// Require dotenv which loads environment variables from the .env file into process.env
require('dotenv').config()
const helpers = require('./src/utils/Helpers')

/**
 * KATA1
 * getArrayDifference(arr1, arr2)
 * This function accepts two arrays and compares them, removing the elements that 
 * are common on both arrays and returning a new array that only has the 
 * unique elements that were not removed.
 */
// const arr1 = ['a','b','c','d','e','f','g','h'];
// const arr2 = [];
// const result = helpers.getArrayDifference(arr1, arr2);
// console.log(result)


/**
 * KATA2
 * countBits(integer2Use)
 * This function accepts an integer, computes its binary equivalent, counts the number 
 * of 1's on the binary equivalent and returns the total count of the 1's identified
 */
// const integer2Use = 100;
// const result = helpers.countBits(integer2Use);
// console.log(result);


/**
 * KATA3
 * capitalizeWords(sentence)
 * This function capitalizes the first letter of each word whether its a single word or a sentence
 */
// const sentence = "How can MiRrORS bE real if our eYeS aren't REaL";
// const result = sentence.capitalizeWords();
// console.log(result.gray.bold.bgCyan);


/**
 * KATA4
 * findNeedle(sentence)
 * This function looks for the word 'needle' in an array that is called the 'haystack'.
 */
// const haystack = ['a','b','c','d','NEEdlE','f'];
// const result = helpers.findNeedle(haystack)
// console.log(result);