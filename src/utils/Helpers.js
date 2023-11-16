/**
 * TO GOD BE ALL THE GLORY
 * 14-NOV-2023
 * All utility functions hat should be used across the application will reside on this file
 */

/**
 * This function accepts two arrays and compares them, removing the elements that 
 * are common on both arrays and returning a new array that only has the 
 * unique elements that were not removed.
 * Link to challenge: https://www.codewars.com/kata/523f5d21c841566fde000009
 * @param {*} array1 
 * @param {*} array2 
 * @returns 
 */
const getArrayDifference = (array1, array2) => {
    // Check if the first array supplied is empty
    if (array1.length === 0) {
        // Means the first array is empty, return an empty array
        return [];
    } else {
        // Means the first array has data, therefore remove the elements in array1 that are present in array2
        const uniqueArray1Elements = array1.filter(element => !array2.includes(element));
        // Remove/filter out the elements in array2 that are present in array1
        const uniqueArray2Elements = array2.filter(element => !array1.includes(element));
        // Combine the two resultant arrays above that contain unique elements
        const uniqueElementsArray = uniqueArray1Elements.concat(uniqueArray2Elements);
        // Return the result to the calling function
        return uniqueElementsArray;
    }
}

/**
 * A function that accepts an integer, computes its binary equivalent, counts the number 
 * of 1's on the binary equivalent and returns the total count of the 1's identified
 * Link to challenge: https://www.codewars.com/kata/526571aae218b8ee490006f4
 * @param {int} integer2Use 
 * @returns 
 */
const countBits = (integer2Use) => {
    // Convert the integer into binary
    const binaryEquivalent = integer2Use.toString(2);
    // Initialize a counter for counting 1's
    let onesCounter = 0;
    // Iterate through each character in the binary string
    for (let i = 0; i < binaryEquivalent.length; i++) {
        // Check if the character is '1'
        if (binaryEquivalent[i] === '1') {
            onesCounter++;
        }
    }
    // Return the total count of the 1's
    return onesCounter;
}

/**
 * This function capitalizes the first letter of each word whether its a single word or a sentence
 * Link to challenge: https://www.codewars.com/kata/5390bac347d09b7da40006f6
 * @returns string
 */
String.prototype.capitalizeWords = function () {
    // Split the sentence into an array of words
    const words = this.toLowerCase().split(' ');
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // Join the capitalized words back into a sentence
    const capitalizedSentence = capitalizedWords.join(' ');
    // Return the new sentence back to the calling function
    return capitalizedSentence;
};

/**
 * This function looks for the word 'needle' in an array that is called the 'haystack'.
 * Link to challenge: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
 * @param {*} haystack 
 * @returns string
 */
const findNeedle = (haystack) => {
    // Check whether the variable passed in is an array
    if (Array.isArray(haystack) === false) {
        // Means the variable is not an array
        return 'Variable supplied is NOT an array.'
    } else {
        // Means variable is an array, get the its length 
        let haystackLength = haystack.length;
        var response = "";
        // Loop through the haystack to search for the needle
        for (let i = 0; i <= haystackLength - 1; i++) {
            // Check to see if the current element is the needle
            if (haystack[i].toLowerCase().trim() === 'needle') {
                response = 'found the needle at position ' + i.toString();
            }
        }
        // Return back the result
        return response;
    }
}


module.exports = {
    getArrayDifference,
    countBits,
    findNeedle,
}