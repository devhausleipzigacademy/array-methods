import { countElements, factorial, sum } from "../src/reduce";
import { describe, it, expect } from "vitest";

describe("Reduce/Exercise 1", () => {
  it("should return the sum of each number in given array", () => {
    const result = sum([1, 2, 3, 4]);
    expect(result).toEqual(10);
  });
});

describe("Reduce/Exercise 2", () => {
  it("should return the factorial of give number", () => {
    const result = factorial(4);
    expect(result).toEqual(24);
  });
});

describe("Reduce/Exercise 3", () => {
  it("should return the occurences of each element", () => {
    const input = [
      ["a", "b", "c"],
      ["c", "d", "f"],
      ["d", "f", "g"],
    ];
    const result = countElements(input);
    expect(result).toEqual({
      a: 1,
      b: 1,
      c: 2,
      d: 2,
      f: 2,
      g: 1,
    });
  });
});
