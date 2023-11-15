/**
 * TO GOD BE ALL THE GLORY
 * 14-NOV-2023
 * All utility functions hat should be used across the application will reside on this file
 */

/**
 * 
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
 * 
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

module.exports = {
    getArrayDifference,
    countBits,
}