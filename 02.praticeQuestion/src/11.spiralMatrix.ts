// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function spiralMatrix(num: number) {
  const result: number[][] = [];
  let RS = 0,
    RE = num - 1,
    CS = 0,
    CE = num - 1,
    counter = 1;

  for (let i = 0; i < num; i++) {
    result.push([]);
  }
  while (RS < RE && CS < CE) {
    for (let i = 0; i <= CE; i++) {
      result[RS][i] = counter;
      counter++;
    }
    RS++;
    for (let i = RS; i <= RE; i++) {
      result[i][CE] = counter;
      counter++;
    }
    CE--;
    for (let i = CE; i >= CS; i--) {
      result[RE][i] = counter;
      counter++;
    }
    RE--;
    for (let i = RE; i >= RS; i--) {
      result[i][CS] = counter;
      counter++;
    }
    CS++;
  }
  return result;
}

console.log(spiralMatrix(4));
