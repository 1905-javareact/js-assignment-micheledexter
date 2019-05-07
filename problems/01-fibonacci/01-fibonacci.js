/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

function fib(n) {
    // if (n <= 0) return 0; // if you want the sequence to start at 0, uncomment this line
    if (n <= 1) return 1;
    return fib(n-1) + fib(n-2);
}

/*
Test out the code
*/
for (let i = 0; i < 20; i++) {
    console.log(`fib(${i}) = ${fib(i)}`);
}
