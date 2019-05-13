/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

function substring(someStr, startIndex, endIndex) {

    // throw an exception for incorrect input
    if (typeof(someStr) !== "string" || someStr.length < 1) {
        throw "Invalid string input";
    }
    if (typeof(startIndex) !== 'number' || isNaN(startIndex) || startIndex < 0 || startIndex > someStr.length || startIndex > endIndex || Math.abs(startIndex) === Infinity) {
        throw "Invalid start index";
    }
    if (typeof(endIndex) !== 'number' || isNaN(endIndex) || endIndex > someStr.length || Math.abs(endIndex) === Infinity) {
        throw "Invalid end index";
    }

    let newStr = ''

    for (let i = startIndex; i < endIndex; i++) {
        newStr += someStr[i];
    }

    return newStr;
}

console.log(substring("hello", 0, 3));
console.log(substring("This is a string.", 8, 16));
console.log(substring("hello", 2, 6));