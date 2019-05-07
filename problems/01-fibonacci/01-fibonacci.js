/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

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
for (let i = 0; i <= 1000; i++) {
    console.log(`fib(${i}) = ${fib(i)}`);
}
