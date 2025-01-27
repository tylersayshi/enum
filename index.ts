// deno-lint-ignore-file ban-types

/* util types */
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type FlattenMap<T extends unknown[], Result = {}> = T extends [
  infer Head,
  ...infer Tail
]
  ? FlattenMap<Tail, Result & Head>
  : Result;

/* numEnum */
type MapNumEnum<T extends string[], Result extends unknown[] = []> = T extends [
  infer Head extends string,
  ...infer Tail extends string[]
]
  ? MapNumEnum<Tail, [...Result, { [K in Head]: Result["length"] }]>
  : Result;

type NumEnum<T extends string[]> = Prettify<FlattenMap<MapNumEnum<T>>>;

/**
 * create an enum with numeric keys that match the input
 * @param values list of keys
 * @returns an "enum"
 */
export const numEnum = <const T extends string[]>(values: T): NumEnum<T> => {
  const result: Record<string, number> = {};
  for (let i = 0; i < values.length; i++) {
    result[values[i]] = i;
  }
  return result as NumEnum<T>;
};

/* stringEnum */

type StringEnum<T extends string[]> = Prettify<{
  [K in T[number]]: K;
}>;

/**
 * create an enum with string keys that match the input
 * @param values list of keys that will also be the values
 * @returns an "enum"
 */
export const stringEnum = <const T extends string[]>(
  values: T
): StringEnum<T> => {
  const result: Record<string, string> = {};
  for (let i = 0; i < values.length; i++) {
    result[values[i]] = values[i];
  }
  return result as StringEnum<T>;
};
