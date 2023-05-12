import { sum } from "./math";

describe("Math", () => {  // "Math" is what we are testing for 
  test("addition should work", () => {
    expect(sum(2,2)).toBe(4);
    expect(sum(3,3)).toBe(6);
  });
  
  test("shoud throw error when number is bigger than 100", () => {
    expect(() => sum(101,4)).toThrowError();
  });
});


