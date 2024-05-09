//Q-make function which test the string is palindrome

function checkPalindrome(str: String): boolean {
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}

console.log(checkPalindrome("kayak"));

//Q-using two pointer technique
function checkPalindrome2(str: string): boolean {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome2("kayak"));

function checkPalindromeWithPointer(str: string): boolean {
  let leftPointer = 0;
  let rightPointer = str.length - 1;
  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) return false;
    leftPointer++;
    rightPointer--;
  }

  return true;
}

console.log(checkPalindromeWithPointer("kayak"));
