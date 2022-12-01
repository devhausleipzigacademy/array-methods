import { fiveAndGreaterOnly, evensOnly, removeNegatives } from "../src/filter";
import { describe, it, expect } from "vitest";

describe("Filter/Exercise 1", () => {
  it("should remove all numbers smaller than 5", () => {
    const result = fiveAndGreaterOnly([2, 7, 4, 5]);
    expect(result).toEqual([7, 5]);
  });
});

describe("Filter/Exercise 2", () => {
  it("should remove all odd numbers", () => {
    const result = evensOnly([2, 7, 4, 5]);
    expect(result).toEqual([2, 4]);
  });
});

describe("Filter/Exercise 3", () => {
  it("should remove all negative", () => {
    const result = removeNegatives([2, -7, 4, -5]);
    expect(result).toEqual([2, 4]);
  });
});
