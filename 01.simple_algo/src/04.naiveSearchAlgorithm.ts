//Naive search algorithm is used for finding the substring in the string

function findSubStr(str: string, substr: string) {
  if (substr.length > str.length) return false;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) break;
      if (j === substr.length - 1) return true;
    }
  }
  return false;
}

console.log(findSubStr("tim eats shit and talks shit", "a"));

//In this algorithm  there are two loops are in a run on inside another which create complexity of O(n^2)
