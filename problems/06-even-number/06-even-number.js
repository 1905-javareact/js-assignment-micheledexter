/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven(someNum) {
    if (typeof(someNum) !== 'number' || isNaN(someNum) || Math.abs(someNum) === Infinity) throw 'Please use a valid number.';
    let num = someNum + '';
    if (num.match(/[\.]+/) !== null) return false;
    return num.match(/[02468]$/) !== null;
}

console.log(isEven(2468));
console.log(isEven(1357));
console.log(isEven(0));
console.log(isEven(-5001));
console.log(isEven(-8));
console.log(isEven(5.8));