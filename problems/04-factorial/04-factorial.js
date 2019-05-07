/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

function factorial(sumNum) {
    if (sumNum <= 1) return sumNum;
    return sumNum * factorial(sumNum - 1);
}

for (let i = 1; i <= 10; i++) {
    console.log(`factorial(${i}) = ${factorial(i)}`);
}