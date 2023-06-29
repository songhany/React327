export function sum(a:number, b:number):number {
  if (a > 100 || b > 100) {
    throw new Error("number is bigger than 100");
  }
  return a + b;
}