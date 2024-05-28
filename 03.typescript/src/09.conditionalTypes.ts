interface Animal2 {
  live(): void;
}

interface Dog2 extends Animal2 {
  Woof(): void;
}

type Term = Dog2 extends Animal2 ? string : number;

interface NameLabel {
  name: string;
}

interface IdLabel {
  id: number;
}

type NameOrId<T> = T extends number ? IdLabel : NameLabel;

function user<T extends string | number>(nameOrId: T): NameOrId<T> {
  throw "unimplemented";
}

type Message<T extends { message: unknown }> = T["message"];
type Message2<T> = T extends { message: unknown } ? T["message"] : never;
interface Email {
  message: string;
}
type EmailMsgType = Message<Email>;

//Make the conditional generic which takes any type checks it is an array if yes then return what type of element that array hold else return that type itself

type Flatten<T> = T extends any[] ? T[number] : T;

type flatten2<T> = T extends Array<infer item> ? item : T;

//make a generic conditional type which checks the generic extends any function if yes then infer it's return type

type GenerateType<T> = T extends (...args: never[]) => infer Return
  ? Return
  : never;

type G1 = GenerateType<() => string>;

type G2 = GenerateType<(arg: string[]) => number>;

type G3 = GenerateType<(a: boolean, b: boolean) => boolean[]>;

//Distributivity in conditional types

type MakeArr<T> = T extends any ? T[] : never;

type A1 = MakeArr<string | number>;

type MakeArr2<T> = [T] extends [any] ? T[] : never;

type A2 = MakeArr2<string | number>;
