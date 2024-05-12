//Q- make the function to find the index of the given number in the array using binary search algorithm

function findNumInArr(arr: number[], num: number) {
  let strIdx = 0;
  let lastIdx = arr.length - 1;
  let midIdx = Math.floor((strIdx + lastIdx) / 2);
  while (strIdx <= lastIdx) {
    if (num === arr[midIdx]) {
      return `Number ${num} found at ${midIdx}`;
    } else if (arr[midIdx] < num) {
      strIdx = midIdx + 1;
    } else if (arr[midIdx] > num) {
      lastIdx = midIdx - 1;
    }
    midIdx = Math.floor((strIdx + lastIdx) / 2);
  }
}

console.log(findNumInArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// here the number of iteration does not depend on the input so the complexity of binary search algorithm is O(log(n))
