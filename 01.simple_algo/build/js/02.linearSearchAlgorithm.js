"use strict";
//Q- find the given number in the make the function to do this;
function findNum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return `number ${num} found at index ${i}`;
        }
    }
}
console.log(findNum([1, 2, 3, 4, 5, 6], 3));
//This is linear search algorithm example where the time complexity is O(n) means number of inputs equals number of operations
