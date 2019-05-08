/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

// this is the recursive version, but we don't want to use this
// one because the stack gets overwhelmed too easily
// function fib(n) {
//     if (n-1 <= 1) return 1;
//     return (fib(n-1) + fib(n-2));
// }

function fib(n) {
    let x = 0;
    let y = 0;
    let i = 0;
    while (n >= 0) {
        i = x + y;
        x = y;
        y = i;
        if (y === 0 && x === 0) y = 1;
        n--;
    }
    return x;
}

/*
Test out the code
*/
for (let i = 1; i <= 10; i++) {
    console.log(`fib(${i}) = ${fib(i)}`);
}
