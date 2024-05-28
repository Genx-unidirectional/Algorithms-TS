interface Finance {
  Credit: string;
  debit: string;
}

type Mini = Finance["Credit"];

const arr = [
  {
    name: "ganesh",
    age: 12,
  },
  {
    name: "ganesh",
    age: 12,
  },
];

type IndexArr = (typeof arr)[number]["age"];
