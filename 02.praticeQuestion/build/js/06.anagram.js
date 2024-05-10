"use strict";
//Check given pair of string are anagram of each other
//example ["safety! rail!","fairy tales"] ==>true
//example ["coding money", money coding] ==>true
//only consider capital letters| exclude punctuation and spaces
function clearString(str) {
    return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
}
function checkAnagram(str1, str2) {
    return clearString(str1) === clearString(str2);
}
console.log(checkAnagram("coding money", "money coding!"));
function charRecord(str) {
    const cleanStr = str.replace(/[\W]/g, "");
    const strRecord = {};
    for (let char of cleanStr) {
        strRecord[char] = ++strRecord[char] || 1;
    }
    return strRecord;
}
function checkAnagram2(str1, str2) {
    const strR1 = charRecord(str1);
    const strR2 = charRecord(str2);
    if (Object.keys(strR1).length !== Object.keys(strR2).length)
        return false;
    for (let key in strR1) {
        if (strR1[key] !== strR2[key])
            return false;
    }
    return true;
}
console.log(checkAnagram2("coding money", "money coding!"));
