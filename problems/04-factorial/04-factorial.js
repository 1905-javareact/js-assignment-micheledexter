/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

function factorial(sumNum) {
    if (typeof(sumNum) !== 'number' || isNaN(sumNum) || Math.abs(sumNum) === Infinity) throw `Please use a positive number, ${sumNum} is not valid.`;
    if (sumNum <= 1) return sumNum;
    return sumNum * factorial(sumNum - 1);
}

for (let i = 1; i <= 10; i++) {
    console.log(`factorial(${i}) = ${factorial(i)}`);
}
try {
    console.log(`factorial('cheese') = ${factorial('cheese')}`);
} catch(e) {
    console.log(e);
}