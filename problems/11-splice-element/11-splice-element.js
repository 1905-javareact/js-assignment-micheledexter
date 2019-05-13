/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

// for this, I'm assuminng we're writing our own splice method and not just
// using the splice prototype method.

function spliceElement(someArr, index) {
    if (!Array.isArray(someArr)) throw 'Please use a valid array object.';
    // in JS, an index is allowed to be negative, so we only enforce integer status
    // We _could_ do some of our own coercion, but I don't feel like doing that
    // because I think it promotes bad programming practices
    if (typeof(index) !== 'number' && Number.isInteger(index)) throw 'Please use a valid integer for the index';
    let newArr = [];
    let spliced = null;
    for (let i = someArr.length - 1; i >= 0; i--) {
        if (i === index) {
            spliced = someArr.pop();
        } else {
            newArr.unshift(someArr.pop());
        }
    }
    for (let i = newArr.length - 1; i >= 0; i--) {
        someArr.unshift(newArr.pop());
    }
    return spliced;
}

let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(spliceElement(alpha, 4));
console.log(alpha);