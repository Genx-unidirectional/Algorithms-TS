type Victim = {
  login: () => void;
  active: () => void;
};

type Mapper<T> = {
  [property in keyof T]: boolean;
};

type Result = Mapper<Victim>;

//Mapping modifiers

// + to add and - to remove readonly

type Mapper2<T> = {
  -readonly [property in keyof T]: T[property];
};

//for removing optional
type Mapper3<T> = {
  [property in keyof T]-?: T[property];
};

type Tester = {
  readonly champ: string;
  age: number;
};
type Result2 = Mapper2<Tester>;

type Tester2 = {
  verified?: boolean;
  glories?: number;
};

type Result3 = Mapper3<Tester2>;

//using as clause to make the another property

// type NewKeyType = {
//   name: string;
//   age: number;
// };

// type Mapper4<T> = {
//   [Property in keyof T as NewKeyType]: T[Property];
// };

//using string literals

type Mapper5<T> = {
  [Property in keyof T as `get${Capitalize<string & Property>}`]: T[Property];
};

type Tester3 = {
  name: string;
  age: number;
};

type Result4 = Mapper5<Tester3>;

//create mapper to filter the properties
type Mapper6<T> = {
  [Property in keyof T as Exclude<Property, "kind">]: T[Property];
};

type Tester7 = {
  kind: string;
  good: boolean;
};

type Result5 = Mapper6<Tester7>;

//For type unions

type Mapper7<Event extends { kind: string }> = {
  [E in Event as E["kind"]]: (event: E) => void;
};

type SquareEvent = {
  kind: "square";
  size: "big";
};
type CircleEvent = {
  kind: "Circle";
  size: "Tiny";
};

type Result6 = Mapper7<SquareEvent | CircleEvent>;

// create type which is nothing but the mapped type which map over the type and check the property conditionally in order to find out it contain specific type in there if yes then assign true else false

type Mapper8<Type> = {
  [Property in keyof Type]: Type[Property] extends { money: string }
    ? true
    : false;
};

type Tester8 = {
  id: number;
  sum: {
    money: "1212";
    bookings: 10;
  };
};

type Result7 = Mapper8<Tester8>;
