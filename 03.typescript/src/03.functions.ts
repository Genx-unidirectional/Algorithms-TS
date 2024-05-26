//using functions with types

function greet(func: (name: string) => void) {
  func("nice");
}

function printMsg(msg: string) {
  console.log(msg);
}

greet(printMsg);

type FuncWithDescription = {
  (): void;
  description: string;
};

const descriptiveFunc: FuncWithDescription = () => {};
descriptiveFunc.description = "useLess";

//type constructs

type ConstructorFunc = {
  new (str: string): void;
};

function taker(func: ConstructorFunc) {
  new func("jim");
}

interface IPerson {
  name: string;
  age: number;
  active: boolean;
  greet(): void;
}
function MakePerson(this: IPerson, name: string, age: number, active: boolean) {
  this.name = name;
  this.age = age;
  this.active = active;
}
MakePerson.prototype.greet = function (this: IPerson) {
  console.log("hello" + this.name);
};
const p2 = new (MakePerson as any)("tim", 22, false);
console.log(p2);

const p1Typed = p2 as IPerson;

p1Typed.greet();

//Q- create generic for map function
function mapFunc<input, output>(
  arg: input[],
  callback: (item: input) => output
): output[] {
  return arg.map(callback);
}

console.log(mapFunc([1, 2, 3, 4], (x) => x + "hello"));

//Q create the generic function which takes two argument which should constraint the {length : number} property in them and check who has length bigger and return that argument

function compare<Type extends { length: number }>(arr1: Type[], arr2: Type[]) {
  if (arr1.length > arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
}

//Q-Create function with generic in which we later can explicit tells the function that what type of argument we taking in

function combine<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(combine<string | number>([1, 2, 3, 4], ["tim", "jake"]));

function makeDate(timStamps: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(timeStampsOrm: number, d?: number, y?: number): Date {
  if (y !== undefined && d !== undefined) {
    return new Date(timeStampsOrm, d, y);
  } else {
    return new Date(timeStampsOrm);
  }
}

//using rest parameter

function makeState(...arr: number[]) {}

makeState(1, 2, 33);

function makeState2(arr: [string, number, boolean]) {}

makeState2(["jimmy", 12, false]);

function takeObj({ a, b, c }: { a: number; b: number; c: number }) {}
