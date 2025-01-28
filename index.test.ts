import { assertEquals } from "@std/assert";
import { numEnum, stringEnum } from "./index.ts";

Deno.test(function testNumEnum() {
  const colors = numEnum(["red", "green", "blue"]);
  assertEquals(colors.red, 0);
  assertEquals(colors.green, 1);
  assertEquals(colors.blue, 2);
});

Deno.test(function testNumEnum() {
  const colors = numEnum(["one", "one"]);

  // @ts-expect-error cannot assign to never
  const _foo: typeof colors = 0;
});

Deno.test(function testStringEnum() {
  const animals = stringEnum(["cat", "dog", "bird"]);
  assertEquals(animals.cat, "cat");
  assertEquals(animals.dog, "dog");
  assertEquals(animals.bird, "bird");
});
