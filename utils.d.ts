// deno-lint-ignore-file no-explicit-any
/**
 * @see https://github.com/type-challenges/type-challenges
 */
export type Expect<T extends true> = T;

export type ExpectTrue<T extends true> = T;

export type ExpectFalse<T extends false> = T;

export type IsTrue<T extends true> = T;

export type IsFalse<T extends false> = T;

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;

export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;

// https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
export type IsAny<T> = 0 extends (1 & T) ? true : false;

export type NotAny<T> = true extends IsAny<T> ? false : true;

export type Debug<T> = { [K in keyof T]: T[K] };

export type Merge<T> = T extends object
  ? { [K in keyof T]: Merge<T[K]> }
  : T;

export type Alike<X, Y> = Equal<Merge<X>, Merge<Y>>;

export type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true
  : false;

export type ExpectValidArgs<
  FUNC extends (...args: any[]) => any,
  ARGS extends any[],
> = ARGS extends Parameters<FUNC> ? true
  : false;

export type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I
    : never;
