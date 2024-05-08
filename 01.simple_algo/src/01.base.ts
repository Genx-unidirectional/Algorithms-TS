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

//Binary search algorithm

//Binary search algorithm only works on sorted array

function binaryNumFind(arr: number[], num: number) {
  let firstIdx = 0;
  let lastIdx = arr.length - 1;
  let midIdx = Math.floor((firstIdx + lastIdx) / 2);
  while (arr[midIdx] !== num && firstIdx <= midIdx) {
    if (arr[midIdx] < num) {
      firstIdx = midIdx + 1;
    } else {
      lastIdx = midIdx - 1;
    }
    console.log("hello");
    midIdx = Math.floor((firstIdx + lastIdx) / 2);
  }
  console.log("hello");
  return arr[midIdx] === num ? midIdx : -1;
}

console.log(
  binaryNumFind(
    [
      1, 2, 3, 393, 3303, 2020202, 11010101, 292929292, 399393939393,
      3939393939399393939, 39393939393939393939393939393939,
    ],
    3939393939399393939
  )
);

//Naive search algorithm
// Find the substring in the string
function findSubStr(mainStr: string, subStr: string) {
  if (subStr.length > mainStr.length) return false;
  for (let i = 0; i < mainStr.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (mainStr[i + j] !== subStr[j]) break;
      if (j === subStr.length - 1) return true;
    }
  }
}

console.log(findSubStr("timeatshit", "tsh"));
// The complexity of naive search algorithm is O(n^2)
