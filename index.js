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
 * getArrayDifference(arr1, arr2)
 * */
const arr1 = ['a','b','c','d','e','f','g','h'];
const arr2 = [];
const result = helpers.getArrayDifference(arr1, arr2);
console.log(result)

