"use strict";
//Q- Take the string make it a title example "jim eat shit" => "Jim Eat Shit"
function makeTitle(str) {
    return str
        .split(" ")
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join(" ");
}
console.log(makeTitle("jim eat shit"));
