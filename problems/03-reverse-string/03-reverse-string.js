/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

function reverseStr(someStr) {
    if (typeof(someStr) !== 'string') throw "Please use a string";
    let str = someStr;
    let newStr = '';
    for (let i of str) {
        newStr = i + newStr;
    }
    return newStr;
}

let str = "this is a string.";
console.log(`reverse("${str}") is ${reverseStr(str)}`);