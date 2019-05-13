/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

// Use the following function if we are doing strict character-by-character
// function isPalindrome(someStr) {
//     if (typeof(someStr) !== 'string') throw 'Please use a string.';
//     let str = someStr;
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str.substr(i, 1) !== str.substr(str.length-(i+1), 1)) return false;
//     }
//     return true;
// }

// Use the following function if we are doing literary palindromes (ignores
// spaces, punctuation and capitalization)
function isPalindrome(someStr) {
    let newStr = '';
    // Get rid of all the extra stuff in the string we don't need
    for (let i = 0; i < someStr.length; i++) {
        if (someStr[i].match(/[a-zA-Z0-9]/) === null) continue;
        newStr += someStr[i];
    }
    let str = newStr.toLowerCase();
    console.log(str);
    for (let i = 0; i< str.length / 2; i++) {
        if (str.substr(i, 1) !== str.substr(str.length-(i+1), 1)) return false;
    }
    return true;
}

console.log(isPalindrome('This is a string.')); // false
console.log(isPalindrome('abc123321cba')); // true
console.log(isPalindrome('abc 123 321 cba')); // true
console.log(isPalindrome('abc 1234321 cba')); // true
console.log(isPalindrome('abc 124321 cba')); // false
console.log(isPalindrome('Abc 123 321cba.')); // true
console.log(isPalindrome('Abc, 123 abc 123')); // false