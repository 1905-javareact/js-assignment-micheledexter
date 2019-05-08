/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

// for this, I'm assuminng we're writing our own splice method and not just
// using the splice prototype method.

function spliceElement(someArr, index) {
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