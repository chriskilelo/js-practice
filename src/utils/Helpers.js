/**
 * TO GOD BE ALL THE GLORY
 * 14-NOV-2023
 * All utility functions hat should be used across the application will reside on this file
 */

const getArrayDifference = (array1, array2) => {
    // Remove/filter out the elements in array1 that are present in array2
    const uniqueArray1Elements = array1.filter(element => !array2.includes(element));
    // Remove/filter out the elements in array2 that are present in array1
    const uniqueArray2Elements = array2.filter(element => !array1.includes(element));
    // Combine the two resultant arrays above that contain unique elements
    const uniqueElementsArray = uniqueArray1Elements.concat(uniqueArray2Elements);
    // Return the result to the calling function
    return uniqueElementsArray;

}

module.exports = {
    getArrayDifference
}