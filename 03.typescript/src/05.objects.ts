interface Topic {
  name: string;
  time: number;
}

type ObjType2 = {
  readonly name: string;
};

type One = {
  status: string;
};

type Two = {
  work: string;
};

type Inter = One & Two;

interface Address {
  zip: number;
  country: string;
  city: string;
  landMark: string;
}
interface Profile {
  name: string;
  age: number;
  address: Address;
}

interface Extra extends Profile {
  graduate: boolean;
}

const obj4: Extra = {
  address: {
    city: "kalyan",
    country: "india",
    landMark: "kalimata temple",
    zip: 421306,
  },
  age: 22,
  name: "ganesh",
  graduate: true,
};

//generics with object

type Box<T> = {
  box: T;
};

const obj5: Box<string> = {
  box: "tin",
};

type BoxContent = {
  content: string;
};

const obj6: Box<BoxContent> = {
  box: { content: "good" },
};
