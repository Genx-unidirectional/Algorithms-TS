//Recursion;
//Make the function which filter out array with odd number

function filterArr(arr: number[]) {
  const result: number[] = [];
  function helper(num: number[]) {
    if (num.length === 0) {
      return;
    } else if (num[0] % 2 !== 0) {
      result.push(num[0]);
    }
    helper(num.slice(1));
  }
  helper(arr);
  return result;
}

console.log(filterArr([1, 2, 3, 45, 7, 13, 33, 5]));
