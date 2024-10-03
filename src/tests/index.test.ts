import { describe, expect, it } from "@jest/globals";
import { sum } from "../index";

describe("sum", () => {
  it("should add 1 + 2 to equal 3", () => {
    const finalAnswer = sum(1, 2);
    expect(finalAnswer).toBe(3);
  });
});
