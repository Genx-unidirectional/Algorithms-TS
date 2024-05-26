"use strict";
function isWorking(work) {
    if (typeof work === "string") {
        return "do your " + work;
    }
    return work + 3;
}
// console.log(null === undefined);
class People {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
const p1 = new People("gex", 22);
console.log(p1 instanceof People);
function narrow(str, padding) {
    if (typeof padding === "string") {
        return str + padding;
    }
    return str + " ".repeat(padding);
}
//How to check truthiness
console.log(Boolean(false));
console.log(!!"time");
//Q- Make the function which takes str of type string or array or null and print them
function printAll(str) {
    if (str && typeof str === "object") {
        for (let i of str) {
            console.log(i);
        }
    }
    else if (typeof str === "string") {
        console.log(str);
    }
}
// printAll("gimm");
// printAll(["tim", "kate", "marry"]);
//make the function which takes factor and value to which have to multiply
function mapIt(value, factor) {
    if (!value)
        return undefined;
    return value.map((item) => item * factor);
}
console.log(mapIt([2, 3, 4, 2234, 34, 34, 2], 4));
function action(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    else {
        return animal.fly();
    }
}
function action2(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    else {
        return animal.fly();
    }
}
function dateChecker(date) {
    if (date instanceof Date) {
        return date.getDate();
    }
    else {
        console.log("done");
        return date;
    }
}
console.log(dateChecker(new Date()));
//CFA
function checkVisibility() {
    let x;
    x = false;
    if (Math.random() > 0.5) {
        x = "tim";
    }
    else {
        x = 12;
    }
    return x;
}
// typescript analyze code and based on that it finds out reachability of type of variable is called control flow analysis
//type predicates
function isFish(arg) {
    return arg.swim !== undefined;
}
const petArr = [
    {
        fly: () => { },
    },
    {
        fly: () => { },
    },
    {
        swim: () => { },
    },
    {
        fly: () => { },
    },
    {
        fly: () => { },
    },
    {
        swim: () => { },
    },
];
const filterArr = (arg) => {
    return arg.filter((item) => isFish(item));
};
console.log(filterArr(petArr));
const checkVehicle = (vehicle) => {
    return typeof vehicle === "object" && vehicle.name === "Mercedes";
};
function area(shape) {
    if (shape.kind === "Square") {
        return shape.side * 4;
    }
    else {
        return Math.PI * shape.radius * 2;
    }
}
console.log(area({ kind: "Square", side: 12 }));
//Exhaustive type checking
function checkType(shape) {
    switch (shape.kind) {
        case "Square": {
            return shape.side;
        }
        case "circle": {
            return shape.radius;
        }
        default: {
            let exhaustiveType = shape;
            return exhaustiveType;
        }
    }
}
