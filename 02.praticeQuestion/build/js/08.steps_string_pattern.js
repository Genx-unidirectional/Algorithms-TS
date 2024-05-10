"use strict";
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
function stepPrinter(step) {
    for (let i = 0; i < step; i++) {
        let line = "";
        for (let j = 0; j <= i; j++) {
            line += "#";
        }
        console.log(line);
    }
}
stepPrinter(6);
