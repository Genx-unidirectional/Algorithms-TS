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
