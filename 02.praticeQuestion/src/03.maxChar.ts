//Q-find maximum character appear in the string
//In order to get the maximum appearance of thr character we can store the appearance in object
function maxAppear(str: string): string {
  let charObj: { [index: string]: number } = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    charObj[char] = ++charObj[char] || 1;
  }

  for (let key in charObj) {
    if (charObj[key] > max) {
      max = charObj[key];
      maxChar = key;
    }
  }
  console.log(max);
  return maxChar;
}

console.log(maxAppear("tttmmmtt"));
