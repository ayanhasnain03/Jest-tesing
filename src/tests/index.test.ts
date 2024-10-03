import { describe, expect, it } from "@jest/globals";
import { sum } from "../index";

describe("sum", () => {
  it("should add 1 + 2 to equal 3", () => {
    const finalAnswer = sum(1, 2);
    expect(finalAnswer).toBe(3);
  });

  it("should add 2 + 2 to equal 4", () => {
    const finalAnswer = sum(2, 2);
    expect(finalAnswer).toBe(4);
  });

  it("should add 3 + 2 to equal 5", () => {
    const finalAnswer = sum(3, 2);
    expect(finalAnswer).toBe(5);
  });

  it("should add 4 + 2 to equal 6", () => {
    const finalAnswer = sum(4, 2);
    expect(finalAnswer).toBe(6);
  });
});
