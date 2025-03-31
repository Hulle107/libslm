# Libslm
Life is boring so lets make

![Version](https://img.shields.io/github/package-json/v/Hulle107/libslm?style=for-the-badge)
![License](https://img.shields.io/github/license/Hulle107/libslm?style=for-the-badge)

## Indexing
- [Libslm](#libslm)
  - [Indexing](#indexing)
  - [Introduction](#introduction)
  - [Binary](#binary)
    - [Features](#features)
    - [Primitive Types](#primitive-types)
    - [Utility Methods](#utility-methods)
    - [Usage Example](#usage-example)
    - [Notes](#notes)
  - [Guard](#guard)
    - [Features](#features-1)
    - [Available Guard Methods](#available-guard-methods)
    - [Usage Example](#usage-example-1)
    - [Notes](#notes-1)

## Introduction
Welcome to this library—a chaotic collection of experiments, half-baked ideas, and random bursts of inspiration. This is not a polished, production-ready framework but rather a playground for concepts that may or may not evolve into something useful.

Because of its experimental nature, stability is not guaranteed. Features may change, disappear, or break without warning. If you're looking for a dependable tool, you might want to look elsewhere. But if you're here for curiosity, exploration, or sheer madness, welcome aboard!

Use at your own risk, and enjoy the ride.

## Binary
This library provides a set of primitive type classes for working with binary data at a low level. These classes are designed to represent fundamental binary structures, allowing for precise manipulation of bits and bytes.

### Features
- **Encapsulation of Binary Data**: Represent numbers as fixed-width bit sequences.
- **Basic Arithmetic & Bitwise Operations**: Perform operations while maintaining binary integrity.

### Primitive Types
- **bit**: A single binary digit (0 or 1).
- **nibble**: A 4-bit unsigned integer.
- **byte**: An 8-bit unsigned integer.
- **word**: A 16-bit unsigned integer.
- **dword**: A 32-bit unsigned integer.

### Utility Methods
- `stringify(value)`
- `hexify(value)`

### Usage Example
```typescript
import {byte, stringify, hexify} from 'libslm-binary';

let first = new byte(65);
console.info(first.toString());   // (0,1,0,0,0,0,0,1)
console.info(first.valueOf());    // 65
console.info(first.length)        // 8
console.info(first[6])            // 1

let second = new byte(255);
second.value++;
second.value--;
second.value += 5;
second.value -= 5;

let third = +second;

console.info(stringify(first, true)); // 0b01000001
console.info(hexify(second, true));   // 0xFF
console.info(third);                  // 255
```

### Notes
These classes serve as fundamental building blocks for binary manipulation. Since this library is experimental, implementations may change as new ideas emerge.

## Guard
This library provides a simple yet flexible implementation of guard clauses to enforce preconditions and fail fast when encountering invalid input. Instead of cluttering your functions with nested conditionals, these guard clauses help keep code clean, readable, and robust.

### Features
- **Concise and expressive**: Reduce boilerplate validation code.
- **Extensible**: Easily add custom guards for specific use cases.
- **Fail-fast approach**: Stop execution immediately when invalid data is detected.

### Available Guard Methods
- `guard.against.null(variables, message?, options?)`
- `guard.against.undefined(variables, message?, options?)`
- `guard.against.empty(variables, message?, options?)`
- `guard.against.outOfRange(variables, minimum, maximum, message?, options?)`
- `guard.against.less(variables, minimum, message?, options?)`
- `guard.against.bigger(variables, maximum, message?, options?)`
- `guard.is.number(variables, message?, options?)`
- `guard.is.string(variables, message?, options?)`
- `guard.is.boolean(variables, message?, options?)`
- `guard.is.object(variables, message?, options?)`
- `guard.is.bigint(variables, message?, options?)`
- `guard.is.symbol(variables, message?, options?)`
- `guard.is.undefined(variables, message?, options?)`
- `guard.is.null(variables, message?, options?)`

### Usage Example
Here’s how the built-in guard clauses can be used:
```typescript
import {guard} from 'libslm.guard';

function foo(value: unknown) {
  guard.against.null({value})       // throws if value is null
  guard.against.undefined({value})  // throws if value is undefined
  guard.is.string({value})          // throws if value is not a string

  console.info(typeof value)        // string
}
```

### Notes
Since this library is experimental, these implementations may change or expand over time. Use them as needed, tweak them as desired, and embrace the chaos.