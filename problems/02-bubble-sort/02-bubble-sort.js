/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

function bubbleSort(numArray) {
    let arr = numArray;
    for (let i = 1; i < arr.length-1; i++) {
        for (let x = arr.length-1; x >- i; x--) {
            if (arr[x] < arr[x-1]) {
                let tmp = arr[x];
                arr[x] = arr[x-1];
                arr[x-1] = tmp;
            }
        }
    }
    return arr;
}

let bubbleArr = [8, 9, 7, 6, 1, 3, 2, 4, 5];
console.log(bubbleArr);
console.log(bubbleSort(bubbleArr));