"use strict";
// Q-make array of chunks of given size eg, ([1,2,3,4,5,6,7,8,9,10],2) =>([[1,2],[3,4]],[5,6],[7,8],[9,10]])
// function makeArrayChunk<T>(arr: T[], size: number): T[][] {
//   let result: T[][] = [];
//   let tempSize = size;
//   let smaller: T[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (tempSize >= 0) {
//       smaller.push(arr[i]);
//       tempSize--;
//     }
//     if (tempSize < 0) {
//       result.push(smaller);
//       tempSize = size;
//       i--;
//     }
//   }
//   return result;
// }
// console.log(makeArrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
// console.log([1, 2, 3, 4].flatMap((item) => [item, item ** 2]));
function makeArrChunk(arr, size) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        result.push(arr.slice(i, i + size));
        i = i + size;
    }
    return result;
}
console.log(makeArrChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
