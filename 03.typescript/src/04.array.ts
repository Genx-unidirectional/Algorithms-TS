function objective(arg: Array<number>) {}
function objective2(arg: ReadonlyArray<number>) {}
function objective3(...arg: number[]) {}
function objective4(arg: [string, number]) {}
function objective5(arg: [string, number, ...b: boolean[]]) {}

objective5(["ganesh", 12, false, true]);
