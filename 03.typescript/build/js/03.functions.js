"use strict";
//using functions with types
function greet(func) {
    func("nice");
}
function printMsg(msg) {
    console.log(msg);
}
greet(printMsg);
const descriptiveFunc = () => { };
descriptiveFunc.description = "useLess";
function taker(func) {
    new func("jim");
}
function MakePerson(name, age, active) {
    this.name = name;
    this.age = age;
    this.active = active;
}
MakePerson.prototype.greet = function () {
    console.log("hello" + this.name);
};
const p2 = new MakePerson("tim", 22, false);
console.log(p2);
const p1Typed = p2;
p1Typed.greet();
//Q- create generic for map function
function mapFunc(arg, callback) {
    return arg.map(callback);
}
console.log(mapFunc([1, 2, 3, 4], (x) => x + "hello"));
//Q create the generic function which takes two argument which should constraint the {length : number} property in them and check who has length bigger and return that argument
function compare(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return arr1;
    }
    else {
        return arr2;
    }
}
//Q-Create function with generic in which we later can explicit tells the function that what type of argument we taking in
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(combine([1, 2, 3, 4], ["tim", "jake"]));
function makeDate(timeStampsOrm, d, y) {
    if (y !== undefined && d !== undefined) {
        return new Date(timeStampsOrm, d, y);
    }
    else {
        return new Date(timeStampsOrm);
    }
}
//using rest parameter
function makeState(...arr) { }
makeState(1, 2, 33);
function makeState2(arr) { }
makeState2(["jimmy", 12, false]);
function takeObj({ a, b, c }) { }
