function isWorking(work: string | number) {
  if (typeof work === "string") {
    return "do your " + work;
  }
  return work + 3;
}

// console.log(null === undefined);
class People {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new People("gex", 22);

console.log(p1 instanceof People);

function narrow(str: string, padding: string | number) {
  if (typeof padding === "string") {
    return str + padding;
  }
  return str + " ".repeat(padding);
}

//How to check truthiness
console.log(Boolean(false));
console.log(!!"time");

//Q- Make the function which takes str of type string or array or null and print them

function printAll(str: string | string[] | null) {
  if (str && typeof str === "object") {
    for (let i of str) {
      console.log(i);
    }
  } else if (typeof str === "string") {
    console.log(str);
  }
}

// printAll("gimm");
// printAll(["tim", "kate", "marry"]);

//make the function which takes factor and value to which have to multiply

function mapIt(value: number[] | null, factor: number) {
  if (!value) return undefined;
  return value.map((item) => item * factor);
}

console.log(mapIt([2, 3, 4, 2234, 34, 34, 2], 4));

//using in operator in narrowing

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function action(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  } else {
    return animal.fly();
  }
}

type Human = { fly: () => void; swim: () => void };

function action2(animal: Bird | Fish | Human) {
  if ("swim" in animal) {
    return animal.swim();
  } else {
    return animal.fly();
  }
}

function dateChecker(date: any) {
  if (date instanceof Date) {
    return date.getDate();
  } else {
    console.log("done");
    return date;
  }
}

console.log(dateChecker(new Date()));

//CFA

function checkVisibility() {
  let x: number | string | boolean;
  x = false;
  if (Math.random() > 0.5) {
    x = "tim";
  } else {
    x = 12;
  }
  return x;
}

// typescript analyze code and based on that it finds out reachability of type of variable is called control flow analysis

//type predicates

function isFish(arg: Fish | Bird): arg is Fish {
  return (arg as Fish).swim !== undefined;
}

const petArr = [
  {
    fly: () => {},
  },
  {
    fly: () => {},
  },
  {
    swim: () => {},
  },
  {
    fly: () => {},
  },
  {
    fly: () => {},
  },
  {
    swim: () => {},
  },
];

const filterArr = (arg: (Fish | Bird)[]) => {
  return arg.filter((item) => isFish(item));
};

console.log(filterArr(petArr));

//Assertions: making assertion to check the type

type Car = {
  type: "dessert";
  name: "Mercedes";
};

type Truck = {
  type: "heavy lift";
  name: "mahindra";
};

const checkVehicle = (vehicle: Car | Truck): vehicle is Car => {
  return typeof vehicle === "object" && vehicle.name === "Mercedes";
};

// discriminated unions

type Circle = {
  kind: "circle";
  radius: number;
};
type Square = {
  kind: "Square";
  side: number;
};

type Shape = Circle | Square;

function area(shape: Shape): number {
  if (shape.kind === "Square") {
    return shape.side * 4;
  } else {
    return Math.PI * shape.radius * 2;
  }
}

console.log(area({ kind: "Square", side: 12 }));

//Exhaustive type checking

function checkType(shape: Shape) {
  switch (shape.kind) {
    case "Square": {
      return shape.side;
    }
    case "circle": {
      return shape.radius;
    }
    default: {
      let exhaustiveType: never = shape;
      return exhaustiveType;
    }
  }
}
