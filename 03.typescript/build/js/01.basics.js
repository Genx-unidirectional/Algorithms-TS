"use strict";
let a1;
let a2;
let a3;
let a4;
let a5;
let a6;
let a7;
let a8;
let a9;
let a10;
let a11;
//Function basics
const sum = (a, b) => {
    return a + b;
};
const obj = {
    type: "fast",
    payload: { sku: 12 },
};
const Gozu = {
    style: "gangham",
    name: "Gozu",
};
const leeto = {
    name: "leeto",
    age: 293,
};
const timo = leeto;
// timo.age = 3;
leeto.age = 34;
class Musician {
    name;
    age;
    instrument;
    art;
    constructor(name, age, instrument, art) {
        this.name = name;
        this.age = age;
        this.instrument = instrument;
        this.art = art;
        this.name = name;
        this.age = age;
        this.art = art;
        this.instrument = instrument;
    }
}
class ListMoney {
    name;
    age;
    accessories;
    constructor(name, age, accessories) {
        this.name = name;
        this.age = age;
        this.accessories = accessories;
    }
}
class Sku {
    name;
    static count = 0;
    static getCount() {
        return Sku.count;
    }
    id;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = Sku.count++;
    }
}
const obj2 = {
    name: "ganesh",
    age: 22,
    active: true,
};
const obj3 = {
    name: "ganesh",
    age: 22,
    active: true,
};
for (let key in obj2) {
    // console.log(obj2[key]);
}
for (let key in obj3) {
    // console.log(obj3[key as keyof typeof obj3]);
}
//generics
const echo = (arg) => {
    return arg;
};
const isObj = (obj) => {
    return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
};
console.log(isObj({}));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "ganesh" }));
const isTrue = (arg) => {
    if (arg === isObj(arg) && Object.keys(arg).length === 0) {
        return { arg, is: false };
    }
    if (Array.isArray(arg) && arg.length === 0) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(true));
console.log(isTrue(12));
console.log(isTrue({}));
console.log(isTrue([]));
