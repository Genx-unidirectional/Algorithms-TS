//Awaited

type B = Awaited<Promise<Promise<number>>>;

async function lastNum(): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(12);
  });
}
async function giveNum(): Promise<Promise<number>> {
  return new Promise((resolve, reject) => {
    resolve(lastNum());
  });
}

(async () => {
  const result: B = await giveNum();
  //   console.log(result); // Output: 12
})();

(function hello() {
  //   console.log("helo");
})();

//Partial type

interface TaskRepo {
  todo: string;
  description: string;
}

function updateTodo(todo: TaskRepo, updatedFields: Partial<TaskRepo>) {
  return { ...todo, ...updatedFields };
}

const obj7: TaskRepo = {
  todo: "jim",
  description: "good to go",
};

console.log(updateTodo(obj7, { description: "done" }));

//required

interface Lego {
  block: number;
  time?: number;
}

const obj8: Required<Lego> = {
  block: 12,
  time: 1,
};

const obj9: Lego = {
  block: 1,
};

const obj10: Readonly<Lego> = {
  block: 12,
  time: 12,
};

//Record

type Genz = Record<string, string>;

type DogInfo = {
  breed: string;
  weight: number;
};
type DogName = "sam" | "hawk" | "todd";

const obj11: Record<DogName, DogInfo> = {
  hawk: { breed: "bulldog", weight: 12 },
  sam: { breed: "bulldog", weight: 12 },
  todd: { breed: "bulldog", weight: 12 },
};

//Pick

interface Lock1 {
  type: string;
  level: number;
  securityCheck: boolean;
}

const options: Pick<Lock1, "level" | "securityCheck"> = {
  level: 2,
  securityCheck: true,
};

//omit

type Certain = Omit<Lock1, "type">;

//Exclude

type Char = Exclude<"a" | "b" | "c", "a">;
const term: Char = "b";
type Something = Exclude<string | number | (() => void), Function>;

//extract

type Char2 = Extract<"a" | "b" | "c", "a" | "f">;
type Something2 = Extract<string | number | (() => void), Function | boolean>;

//NonNullable

type Positive = NonNullable<false | null | {} | "tim" | undefined>;

//Parameter

function DigIt(force: number, time: number) {}
declare function DigIt2(force: number, time: number): number;

type ParamType = Parameters<typeof DigIt>;
type T0 = Parameters<() => string>;
const arr1: ParamType = [12, 12];
const arr2: T0 = [];
//ReturnType

type Return = ReturnType<typeof DigIt2>;
