"use strict";
//Q- here string is given count vowels from them
function countVowels(str) {
    let count = 0;
    for (let char of str) {
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels("jim can't wait"));
function countVowels2(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char))
            count++;
    }
    return count;
}
console.log(countVowels2("jim can't wait"));
function countVowels3(str) {
    const matches = str.match(/[aeiou]/gi);
    console.log(matches);
    return matches ? matches.length : 0;
}
console.log(countVowels3("jim an't wait"));
