// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(num: number) {
  const mid = Math.floor((2 * num - 1) / 2);
  for (let row = 0; row < num; row++) {
    let line = "";
    for (let col = 0; col < 2 * num - 1; col++) {
      if (col >= mid - row && col <= mid + row) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

console.log(pyramid(4));
