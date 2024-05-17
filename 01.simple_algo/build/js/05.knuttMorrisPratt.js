"use strict";
// by using knutt morris pratt algorithm we reduce time complexity of the naive search algorithm
//Creating the lps table
function createLps(str) {
    const lps = Array(str.length).fill(0);
    let i = 1;
    let j = 0;
    while (i < str.length) {
        if (str[i] === str[j]) {
            lps[i] = j + 1;
            j++;
            i++;
        }
        else {
            if (j !== 0) {
                j = lps[j - 1];
            }
            else {
                i++;
            }
        }
    }
    return lps;
}
// implementation of kmp
function searchStr(str, subStr) {
    const lps = createLps(subStr);
    let i = 0;
    let j = 0;
    while (i < str.length) {
        if (str[i] === subStr[j]) {
            i++;
            j++;
        }
        else {
            if (j !== 0) {
                j = lps[j - 1];
            }
            else {
                i++;
            }
        }
        if (j === subStr.length)
            return true;
    }
    return false;
}
console.log(searchStr("jake take shit but also perform shit", "also"));
