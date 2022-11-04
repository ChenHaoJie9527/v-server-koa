import { it, describe, expect } from "vitest";
import { compose } from "../hooks";
import { MDlist } from "../middleware";
describe("sun", () => {
  it("test sun", () => {
    const a = 10;
    expect(a).toBe(10);
  });
  it("test compose", async () => {
    async function f1(ctx, fn) {
      console.log(1);
      await Promise.resolve(fn);
      console.log(6);
    }
    async function f2(ctx, fn) {
      console.log(2);
      await Promise.resolve(fn);
      console.log(5);
    }
    async function f3(ctx, fn) {
      console.log(3);
      await Promise.resolve(fn);
      console.log(4);
    }
    const middleware = [f1, f2, f3];
    const fn = await compose(middleware);
    fn({ name: "chj", age: 18 }, () => {
      return Promise.resolve();
    });
  });
});
