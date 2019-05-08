/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

function objectProperties(someObj) {
    for (let item in someObj) {
        console.log(`someObj[${item}] has a value of ${someObj[item]}`);
    }
}

let obj1 = {
    name: 'Homer',
    hobby: 'drinking beer',
    kids: 3,
    occupation: 'nuclear safety inspector'
}

objectProperties(obj1);