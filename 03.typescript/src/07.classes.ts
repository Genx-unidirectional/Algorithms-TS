class Base {
  greet() {
    console.log("hello");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      this.greet();
    } else {
      console.log(`hello ${name} `);
    }
  }
}

//adding more type specification
interface Animal {
  name: string;
}

interface Dog {
  name: string;
  breed: string;
}
class AnimalBase {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}

class AnimalDerived extends AnimalBase {
  declare resident: Dog;
  constructor(animal: Dog) {
    super(animal);
    this.resident = animal;
  }
}

//Behavior of this keyword
class Test2 {
  name: string = "Logan";
  getName() {
    return this.name;
  }
}

const t1 = new Test2();
const testObj = {
  name: "jake",
  getName: t1.getName,
};

console.log(t1.getName());
console.log(testObj.getName());

class Test3 {
  name: string = "Andrew";
  getName = () => {
    return this.name;
  };
}

const t2 = new Test3();
console.log(t2.getName());

const testObj2 = {
  name: "Tristan",
  getName: t2.getName,
};

console.log(testObj2.getName());
