"use strict";
//Awaited
async function lastNum() {
    return new Promise((resolve, reject) => {
        resolve(12);
    });
}
async function giveNum() {
    return new Promise((resolve, reject) => {
        resolve(lastNum());
    });
}
(async () => {
    const result = await giveNum();
    //   console.log(result); // Output: 12
})();
(function hello() {
    //   console.log("helo");
})();
function updateTodo(todo, updatedFields) {
    return { ...todo, ...updatedFields };
}
const obj7 = {
    todo: "jim",
    description: "good to go",
};
console.log(updateTodo(obj7, { description: "done" }));
const obj8 = {
    block: 12,
    time: 1,
};
const obj9 = {
    block: 1,
};
const obj10 = {
    block: 12,
    time: 12,
};
const obj11 = {
    hawk: { breed: "bulldog", weight: 12 },
    sam: { breed: "bulldog", weight: 12 },
    todd: { breed: "bulldog", weight: 12 },
};
const options = {
    level: 2,
    securityCheck: true,
};
const term = "b";
//Parameter
function DigIt(force, time) { }
const arr1 = [12, 12];
const arr2 = [];
