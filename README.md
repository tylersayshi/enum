# enum replacement

Let's deprecate `enum`s!

The typescript team has added `--erasableSyntaxOnly` to their compiler, which disables the use of `enum`s. This is for compatibility with running `.ts` files directly from a runtime without a build step. You can [read more about it here](https://www.totaltypescript.com/erasable-syntax-only) from Matt Pocock.

## If you miss `enum`s

I've written this library to give the feel of `enum`s, but in a way that doesn't require a build step.

## Usage

```ts
import { numEnum, stringEnum } from "@tyler/enum";

const colors = numEnum(["red", "green", "blue"]);
const animals = stringEnum(["cat", "dog", "bird"]);

console.log(colors.red); // 0
console.log(colors.green); // 1
console.log(colors.blue); // 2

console.log(animals.cat); // cat
console.log(animals.dog); // dog
console.log(animals.bird); // bird
```

## Try it yourself

[Playground Link](https://tsplay.dev/WzdbQN)
