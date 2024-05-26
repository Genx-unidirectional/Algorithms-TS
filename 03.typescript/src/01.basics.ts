let a1: string;
let a2: number;
let a3: boolean;
let a4: undefined;
let a5: null;
let a6: never;
let a7: string[];
let a8: (string | number)[];
let a9: [number, string];
let a10: Array<number>;
let a11: ReadonlyArray<number>;

//Function basics

const sum: (a: number, b: number) => number = (a: number, b: number) => {
  return a + b;
};

interface Sum {
  (a: number, b: number): number;
}

type Sum2 = (a: number, b?: number) => number;

//objects
interface Action {
  type: string;
  payload: { [index: string]: any };
}
const obj: Action = {
  type: "fast",
  payload: { sku: 12 },
};

type Person = {
  style?: string;
  readonly name: string;
};

const Gozu: Person = {
  style: "gangham",
  name: "Gozu",
};

// Gozu.name = "tim";

interface Person2 {
  name: string;
  age: number;
}

const leeto: Person2 = {
  name: "leeto",
  age: 293,
};

type Person3 = {
  name: string;
  readonly age: number;
};

const timo: Person3 = leeto;

// timo.age = 3;
leeto.age = 34;

//Classes
interface Artists {
  name: string;
  age: number;
  art: string;
  instrument: string;
}
class Musician implements Artists {
  constructor(
    readonly name: string,
    public age: number,
    public instrument: string,
    public art: string
  ) {
    this.name = name;
    this.age = age;
    this.art = art;
    this.instrument = instrument;
  }
}

class ListMoney {
  name: string;
  age: number;
  accessories: string;
  constructor(name: string, age: number, accessories: string) {
    this.name = name;
    this.age = age;
    this.accessories = accessories;
  }
}

class Sku {
  static count: number = 0;
  static getCount() {
    return Sku.count;
  }
  private id;

  constructor(public name: string) {
    this.name = name;
    this.id = Sku.count++;
  }
}

//index signatures

interface ObjType {
  [index: string]: number | string | boolean;
}
const obj2: ObjType = {
  name: "ganesh",
  age: 22,
  active: true,
};
const obj3: ObjType = {
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

const echo = <T>(arg: T): T => {
  return arg;
};

const isObj = <T>(obj: T): boolean => {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
};

console.log(isObj({}));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "ganesh" }));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (arg === isObj(arg) && Object.keys(arg as keyof T).length === 0) {
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
