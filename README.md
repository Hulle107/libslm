# Libslm
Life is boring so lets make

![Version](https://img.shields.io/github/package-json/v/Hulle107/libslm?style=for-the-badge)
![License](https://img.shields.io/github/license/Hulle107/libslm?style=for-the-badge)

## Indexing
- [Libslm](#libslm)
  - [Indexing](#indexing)
  - [Introduction](#introduction)
  - [Binary](#binary)
    - [Types](#types)
    - [Eksamples](#eksamples)
  - [Guard](#guard)
    - [Types](#types-1)
      - [Against](#against)
      - [Is](#is)
    - [Eksamples](#eksamples-1)

## Introduction

Welcome to this library—a chaotic collection of experiments, half-baked ideas, and random bursts of inspiration. This is not a polished, production-ready framework but rather a playground for concepts that may or may not evolve into something useful.

Because of its experimental nature, stability is not guaranteed. Features may change, disappear, or break without warning. If you're looking for a dependable tool, you might want to look elsewhere. But if you're here for curiosity, exploration, or sheer madness, welcome aboard!

Use at your own risk, and enjoy the ride.

## Binary

This library includes a set of low-level classes designed for working with binary data, numeric representations, and encoding transformations. These classes provide a flexible way to manipulate bits, bytes, and more. However, due to the experimental nature of this project, implementations may change over time.

### Types

| name | type | length | range |
|:-----|:-----|:------:|:------|
| bit | class | 1 | 0 - 1 |
| byte | class | 8 | 0 - 255 |
| word | class | 16 | 0 - 65,535 |
| int | class | 32 | 0 - 4,294,967,295 |

### Eksamples

```ts
let first = new byte(65);
console.info('toString: ', first.toString()); // toString: (0,1,0,0,0,0,0,1)
console.info('valueOf: ', first.valueOf()); // valueOf: 65
console.info('length: ', first.length) // length: 8
console.info('index: ', first[6]) // index: 1

let second = new byte(255);
second.value++;
second.value--;
second.value += 5;
second.value -= 5;

let third = +second;

console.info('first: ', stringify(first, true)); // first: 0b01000001
console.info('second: ', hexify(second, true)); // second: 0xFF
console.info('third: ', third); // third: 255
```

## Guard

### Types

#### Against

| name | path | description |
|:-|:-|:-|
| null | guard.against.null | Throws if input is null. |
| undefined | guard.against.undefined | Throws if input is undefined. |
| empty | guard.against.empty | Throws if input is empty. |
| outOfRange | guard.against.outOfRange | Throws if input is out of given range. |
| less | guard.against.less | Throws if input is less then given minimum. |
| bigger | guard.against.bigger | Throws if input is bigger then given maximum. |

#### Is

| name | path | description |
|:-|:-|:-|
| number | guard.is.number | Throws if input is not a number. |
| string | guard.is.string | Throws if input is not a string. |
| boolean | guard.is.boolean | Throws if input is not a boolean. |
| object | guard.is.object | Throws if input is not a object. |
| bigint | guard.is.bigint | Throws if input is not a bigint. |
| symbol | guard.is.symbol | Throws if input is not a symbol. |
| undefined | guard.is.undefined | Throws if input is not undefined. |
| null | guard.is.null | Throws if input is not null. |

### Eksamples

```ts
guard.against
  .undefined({foo: undefined}) // throws TypeError -> guard.against.undefined: 'foo' is undefined.
  .outOfRange({foo: 5}, 0, 4) // throws RangeError -> guard.against.outOfRange: 'foo' is out of range.
  .less({foo: 5}, 10) // throws RangeError -> guard.against.less: 'foo' is less then 10.

guard.is.string({foo: undefined}) // throws TypeError -> guard.is.string: 'foo' is not a string.
```