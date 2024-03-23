import { test, describe, expect } from "vitest";

import { getOrDefault } from "./getOrDefault";

describe("getOrDefault", () => {
  test("definite value", () => {
    const definedString: string | undefined = "hello";
    const result = getOrDefault(definedString, "bogus");
    expect(result).toBe("hello");
  });

  test("definite value casts type", () => {
    const definedString: string | undefined = "hello";
    const result = getOrDefault(definedString, "bogus");
    expect(typeof result).toBe("string");
  });

  test("undefined value", () => {
    const undefinedString: string | undefined = undefined;
    const result = getOrDefault(undefinedString, "bogus");
    expect(result).toBe("bogus");
  });

  test("undefined value casts type", () => {
    const undefinedString: string | undefined = undefined;
    const result = getOrDefault(undefinedString, "bogus");
    expect(typeof result).toBe("string");
  });

  test("any number", () => {
    const definedNumber: number | undefined = 42;
    const result = getOrDefault(definedNumber, 1);
    expect(result).toBe(definedNumber);
  });

  test("zero", () => {
    const result = getOrDefault(0, 1);
    expect(result).toBe(0);
  });
});
