// Q- see a more realistic example. Our task is to return an array of odd numbers from a given array
function filterOddNum(arr: number[]): number[] {
  return arr.filter((num) => num % 2 !== 0);
}

console.time();
console.log(filterOddNum([1, 2, 3, 4, 5]));
console.timeEnd();

// using recursion

function recursiveOddFilter(arr: number[]): number[] {
  let result: number[] = [];
  function recursiveFn(arr: number[]) {
    if (arr.length === 0) return;
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    recursiveFn(arr.slice(1));
  }
  recursiveFn(arr);
  return result;
}

// console.time();
console.log(recursiveOddFilter([2, 4, 2, 443, 67, 2, 45, 33, 7]));
// console.timeEnd();

//Linear search algorithm
//linear search algorithm where the number of iteration is directly proportional to the input
//find the wanted number in a array

function findNum(arr: number[], num: number): string {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return `The number ${num} found at index ${i}`;
    }
  }
  return `The number ${num} not exists`;
}

console.log(findNum([1, 2, 4, 4, 43, 23, 211], 43));
