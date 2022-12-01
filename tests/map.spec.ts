import {
  capitalizeNames,
  doubleNumbers,
  namesOnly,
  stringItUp,
  getFullInitials,
  getMiddleNameInitials,
  createNumeronym,
} from "../src/map";
import { describe, it, expect } from "vitest";

describe("Map/Exercise 1", () => {
  it("should double numbers in given array", () => {
    const result = doubleNumbers([1, 2, 3]);
    expect(result).toEqual([2, 4, 6]);
  });
});

describe("Map/Exercise 2", () => {
  it("should stringify numbers in given array", () => {
    const result = stringItUp([1, 2, 3]);
    expect(result).toEqual(["1", "2", "3"]);
  });
});

describe("Map/Exercise 3", () => {
  it("should capitalize all the names in given array", () => {
    const result = capitalizeNames(["dan", "FRANZ", "taYloR"]);
    expect(result).toEqual(["Dan", "Franz", "Taylor"]);
  });
});

describe("Map/Exercise 4", () => {
  it("should only return the names of people", () => {
    const people = [
      { name: "Dan", age: 33 },
      { name: "Franz", age: 30 },
      { name: "Taylor", age: 32 },
    ];
    const result = namesOnly(people);
    expect(result).toEqual(["Dan", "Franz", "Taylor"]);
  });
});

describe("Map/Exercise 5", () => {
  it("should only return the initials from give name", () => {
    const result = getFullInitials("George Raymond Richard Martin");
    expect(result).toEqual("GRRM");
  });
});

describe("Map/Exercise 6", () => {
  it("should only return the middle name initials from give name", () => {
    const result = getMiddleNameInitials("George Raymond Richard Martin");
    expect(result).toEqual("George R. R. Martin");
  });
});

describe("Map/Exercise 7", () => {
  it("should create numeronyms for every word in a sentence thats longer than 4 characters", () => {
    const input = "Every developer likes to mix kubernetes and javascript";
    const result = createNumeronym(input);
    expect(result).toEqual("E3y d7r l3s to mix k8s and j8t");
  });
});
