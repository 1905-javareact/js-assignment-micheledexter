/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

// for this one we're operating under the assumption that we're going to be
// using simple palindromes, and not literary palindromes.

function isPalindrome(someStr) {
    if (typeof(someStr) !== 'string') throw 'Please use a string.';
    let str = someStr;
    for (let i = 0; i < str.length / 2; i++) {
        if (str.substr(i, 1) !== str.substr(str.length-(i+1), 1)) return false;
    }
    return true;
}

console.log(isPalindrome('This is a string.'));
console.log(isPalindrome('abc123321cba'));
console.log(isPalindrome('abc 123 321 cba'));
console.log(isPalindrome('abc 1234321 cba'));
console.log(isPalindrome('abc 124321 cba'));