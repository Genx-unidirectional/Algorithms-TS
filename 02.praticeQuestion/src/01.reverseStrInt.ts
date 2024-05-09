console.log("hello");
// Q-create the function to reverse the string

function reverseStr(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverseStr("hello"));

function reverseStr2(str: string): string {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}
console.log(reverseStr2("hello"));

function reverseStr3(str: string): string {
  let reverse = "";
  for (let char of str) {
    reverse = char + reverse;
  }
  return reverse;
}

console.log(reverseStr3("hello"));

//Q-reverse integer

function reverseInt(num: number): number {
  return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
}

console.log(reverseInt(-12345));

function reverseInt2(num: number): number {
  let reverse = "";
  for (let char of num.toString()) {
    reverse = char + reverse;
  }
  return parseInt(reverse) * Math.sign(num);
}

console.log(reverseInt2(12345));
