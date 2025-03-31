type primitive = 'string' | 'number' | 'bigint' | 'boolean' | 'undefined' | 'symbol' | 'null' ;

export class bit {
    readonly [Symbol.isConcatSpreadable]: boolean = true;
    readonly length: number = 1;
    readonly mask: number = 1;

    protected tuble = [false];

    get 0(): 0 | 1 { return this.tuble[0]? 1 : 0; }
    set 0(value: 0 | 1) { this.tuble[0] = value? true: false; }

    get value(): number { return this.valueOf(); }
    set value(value: number) {
        this.tuble[0] = value & this.mask? true : false;
    }

    static get zero(): bit { return new bit(0); }

    constructor(value: number) {
        this.tuble[0] = value & this.mask? true : false;
    }

    [Symbol.toPrimitive](hint: primitive) {
        if (hint === 'number') return this.valueOf();
        if (hint === 'string') return this.toString();
        if (hint === 'boolean') return this.tuble[0];
        return null;
    }

    valueOf(): number { return this.tuble[0]? 1 : 0; }
    toString(): string { return '(' + this.valueOf() + ')' }
}

export class nibble {
    readonly [Symbol.isConcatSpreadable]: boolean = true;
    readonly length: number = 4;
    readonly mask: number = 15;

    protected tuble = [false, false, false, false];

    get 0(): 0 | 1 { return this.tuble[3]? 1 : 0; }
    get 1(): 0 | 1 { return this.tuble[2]? 1 : 0; }
    get 2(): 0 | 1 { return this.tuble[1]? 1 : 0; }
    get 3(): 0 | 1 { return this.tuble[0]? 1 : 0; }

    set 0(value: 0 | 1) { this.tuble[3] = value? true: false; }
    set 1(value: 0 | 1) { this.tuble[2] = value? true: false; }
    set 2(value: 0 | 1) { this.tuble[1] = value? true: false; }
    set 3(value: 0 | 1) { this.tuble[0] = value? true: false; }

    get value(): number { return this.valueOf(); }
    set value(value: number) {
        let next: number = value;

        while(true) {
            if (next > this.mask) next = next >> this.length;
            if (next < 0) next = this.mask - Math.abs(next);
            if (next >= 0 && next <= this.mask) break;
        }

        for (
            let index = this.length - 1, mask = 1;
            index >= 0;
            this.tuble[index] = next & mask? true: false, mask <<= 1, index--
        );
    }

    static get zero(): nibble { return new nibble(0); }

    constructor(value: number) {
        for (
            let index = this.length - 1, mask = 1;
            index >= 0;
            this.tuble[index] = value & mask? true: false, mask <<= 1, index--
        );
    }

    [Symbol.toPrimitive](hint: primitive) {
        if (hint === 'number') return this.valueOf();
        if (hint === 'string') return this.toString();
        return null;
    }

    valueOf(): number {
        let number: number = 0;

        for (
            let index = this.length - 1, mask = 1;
            index >= 0;
            number += this.tuble[index]? mask : 0, mask <<= 1, index--
        );

        return number;
    }
    toString(): string {
        let string: string = '';

        for (let index = 0; index < this.length; index++) {
            let value: number = this.tuble[index]? 1 : 0;

            if (index > 0) string += ',';
            string += value;
        }

        return '(' + string + ')';
    }
}

export class byte {
    readonly [Symbol.isConcatSpreadable]: boolean = true;
    readonly length: number = 8;
    readonly mask: number = 255;

    protected tuble = [false, false, false, false, false, false, false, false];

    get 0(): 0 | 1 { return this.tuble[7]? 1 : 0; }
    get 1(): 0 | 1 { return this.tuble[6]? 1 : 0; }
    get 2(): 0 | 1 { return this.tuble[5]? 1 : 0; }
    get 3(): 0 | 1 { return this.tuble[4]? 1 : 0; }
    get 4(): 0 | 1 { return this.tuble[3]? 1 : 0; }
    get 5(): 0 | 1 { return this.tuble[2]? 1 : 0; }
    get 6(): 0 | 1 { return this.tuble[1]? 1 : 0; }
    get 7(): 0 | 1 { return this.tuble[0]? 1 : 0; }

    set 0(value: 0 | 1) { this.tuble[7] = value? true: false; }
    set 1(value: 0 | 1) { this.tuble[6] = value? true: false; }
    set 2(value: 0 | 1) { this.tuble[5] = value? true: false; }
    set 3(value: 0 | 1) { this.tuble[4] = value? true: false; }
    set 4(value: 0 | 1) { this.tuble[3] = value? true: false; }
    set 5(value: 0 | 1) { this.tuble[2] = value? true: false; }
    set 6(value: 0 | 1) { this.tuble[1] = value? true: false; }
    set 7(value: 0 | 1) { this.tuble[0] = value? true: false; }

    get value(): number { return this.valueOf(); }
    set value(value: number) {
        let next: number = value;

        while(true) {
            if (next > this.mask) next = next >> this.length;
            if (next < 0) next = this.mask - Math.abs(next);
            if (next >= 0 && next <= this.mask) break;
        }

        for (
            let index = this.length - 1, mask = 1;
            index >= 0;
            this.tuble[index] = next & mask? true: false, mask <<= 1, index--
        );
    }

    static get zero(): byte { return new byte(0); }

    constructor(value: number) {
        for (
            let index = this.length - 1, mask = 1;
            index >= 0;
            this.tuble[index] = value & mask? true: false, mask <<= 1, index--
        );
    }

    [Symbol.toPrimitive](hint: primitive) {
        if (hint === 'number') return this.valueOf();
        if (hint === 'string') return this.toString();
        return null;
    }

    valueOf(): number {
        let number: number = 0;

        for (
            let index = this.length - 1, mask = 1;
            index >= 0;
            number += this.tuble[index]? mask : 0, mask <<= 1, index--
        );

        return number;
    }
    toString(): string {
        let string: string = '';

        for (let index = 0; index < this.length; index++) {
            let value: number = this.tuble[index]? 1 : 0;

            if (index > 0) string += ',';
            string += value;
        }

        return '(' + string + ')';
    }
}

export class word {
    readonly [Symbol.isConcatSpreadable]: boolean = true;
    readonly length: number = 16;
    readonly mask: number = 65535;

    protected tuble = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

    get  0(): 0 | 1 { return this.tuble[15]? 1 : 0; }
    get  1(): 0 | 1 { return this.tuble[14]? 1 : 0; }
    get  2(): 0 | 1 { return this.tuble[13]? 1 : 0; }
    get  3(): 0 | 1 { return this.tuble[12]? 1 : 0; }
    get  4(): 0 | 1 { return this.tuble[11]? 1 : 0; }
    get  5(): 0 | 1 { return this.tuble[10]? 1 : 0; }
    get  6(): 0 | 1 { return this.tuble[9] ? 1 : 0; }
    get  7(): 0 | 1 { return this.tuble[8] ? 1 : 0; }
    get  8(): 0 | 1 { return this.tuble[7] ? 1 : 0; }
    get  9(): 0 | 1 { return this.tuble[6] ? 1 : 0; }
    get 10(): 0 | 1 { return this.tuble[5] ? 1 : 0; }
    get 11(): 0 | 1 { return this.tuble[4] ? 1 : 0; }
    get 12(): 0 | 1 { return this.tuble[3] ? 1 : 0; }
    get 13(): 0 | 1 { return this.tuble[2] ? 1 : 0; }
    get 14(): 0 | 1 { return this.tuble[1] ? 1 : 0; }
    get 15(): 0 | 1 { return this.tuble[0] ? 1 : 0; }

    set  0(value: 0 | 1) { this.tuble[15] = value? true: false; }
    set  1(value: 0 | 1) { this.tuble[14] = value? true: false; }
    set  2(value: 0 | 1) { this.tuble[13] = value? true: false; }
    set  3(value: 0 | 1) { this.tuble[12] = value? true: false; }
    set  4(value: 0 | 1) { this.tuble[11] = value? true: false; }
    set  5(value: 0 | 1) { this.tuble[10] = value? true: false; }
    set  6(value: 0 | 1) { this.tuble[9]  = value? true: false; }
    set  7(value: 0 | 1) { this.tuble[8]  = value? true: false; }
    set  8(value: 0 | 1) { this.tuble[7]  = value? true: false; }
    set  9(value: 0 | 1) { this.tuble[6]  = value? true: false; }
    set 10(value: 0 | 1) { this.tuble[5]  = value? true: false; }
    set 11(value: 0 | 1) { this.tuble[4]  = value? true: false; }
    set 12(value: 0 | 1) { this.tuble[3]  = value? true: false; }
    set 13(value: 0 | 1) { this.tuble[2]  = value? true: false; }
    set 14(value: 0 | 1) { this.tuble[1]  = value? true: false; }
    set 15(value: 0 | 1) { this.tuble[0]  = value? true: false; }

    get value(): number { return this.valueOf(); }
    set value(value: number) {
        let next: number = value;

        while(true) {
            if (next > this.mask) next = next >> this.length;
            if (next < 0) next = this.mask - Math.abs(next);
            if (next >= 0 && next <= this.mask) break;
        }

        for (
            let index = this.length - 1, mask = 1;
            index >= 0;
            this.tuble[index] = next & mask? true: false, mask <<= 1, index--
        );
    }

    static get zero(): word { return new word(0); }

    constructor(value: number) {
        for (
            let index = this.length - 1, mask = 1;
            index >= 0;
            this.tuble[index] = value & mask? true: false, mask <<= 1, index--
        );
    }

    [Symbol.toPrimitive](hint: primitive) {
        if (hint === 'number') return this.valueOf();
        if (hint === 'string') return this.toString();
        return null;
    }

    valueOf(): number {
        let number: number = 0;

        for (
            let index = this.length - 1, mask = 1;
            index >= 0;
            number += this.tuble[index]? mask : 0, mask <<= 1, index--
        );

        return number;
    }
    toString(): string {
        let string: string = '';

        for (let index = 0; index < this.length; index++) {
            let value: number = this.tuble[index]? 1 : 0;

            if (index > 0) string += ',';
            string += value;
        }

        return '(' + string + ')';
    }
}

export class dword {
    readonly [Symbol.isConcatSpreadable]: boolean = true;
    readonly length: number = 16;
    readonly mask: number = 4294967295;

    protected tuble = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

    get  0(): 0 | 1 { return this.tuble[31]? 1 : 0; }
    get  1(): 0 | 1 { return this.tuble[30]? 1 : 0; }
    get  2(): 0 | 1 { return this.tuble[29]? 1 : 0; }
    get  3(): 0 | 1 { return this.tuble[28]? 1 : 0; }
    get  4(): 0 | 1 { return this.tuble[27]? 1 : 0; }
    get  5(): 0 | 1 { return this.tuble[26]? 1 : 0; }
    get  6(): 0 | 1 { return this.tuble[25]? 1 : 0; }
    get  7(): 0 | 1 { return this.tuble[24]? 1 : 0; }
    get  8(): 0 | 1 { return this.tuble[23]? 1 : 0; }
    get  9(): 0 | 1 { return this.tuble[22]? 1 : 0; }
    get 10(): 0 | 1 { return this.tuble[21]? 1 : 0; }
    get 11(): 0 | 1 { return this.tuble[20]? 1 : 0; }
    get 12(): 0 | 1 { return this.tuble[19]? 1 : 0; }
    get 13(): 0 | 1 { return this.tuble[18]? 1 : 0; }
    get 14(): 0 | 1 { return this.tuble[17]? 1 : 0; }
    get 15(): 0 | 1 { return this.tuble[16]? 1 : 0; }
    get 16(): 0 | 1 { return this.tuble[15]? 1 : 0; }
    get 17(): 0 | 1 { return this.tuble[14]? 1 : 0; }
    get 18(): 0 | 1 { return this.tuble[13]? 1 : 0; }
    get 19(): 0 | 1 { return this.tuble[12]? 1 : 0; }
    get 20(): 0 | 1 { return this.tuble[11]? 1 : 0; }
    get 21(): 0 | 1 { return this.tuble[10]? 1 : 0; }
    get 22(): 0 | 1 { return this.tuble[9] ? 1 : 0; }
    get 23(): 0 | 1 { return this.tuble[8] ? 1 : 0; }
    get 24(): 0 | 1 { return this.tuble[7] ? 1 : 0; }
    get 25(): 0 | 1 { return this.tuble[6] ? 1 : 0; }
    get 26(): 0 | 1 { return this.tuble[5] ? 1 : 0; }
    get 27(): 0 | 1 { return this.tuble[4] ? 1 : 0; }
    get 28(): 0 | 1 { return this.tuble[3] ? 1 : 0; }
    get 29(): 0 | 1 { return this.tuble[2] ? 1 : 0; }
    get 30(): 0 | 1 { return this.tuble[1] ? 1 : 0; }
    get 31(): 0 | 1 { return this.tuble[0] ? 1 : 0; }

    set  0(value: 0 | 1) { this.tuble[31] = value? true: false; }
    set  1(value: 0 | 1) { this.tuble[30] = value? true: false; }
    set  2(value: 0 | 1) { this.tuble[29] = value? true: false; }
    set  3(value: 0 | 1) { this.tuble[28] = value? true: false; }
    set  4(value: 0 | 1) { this.tuble[27] = value? true: false; }
    set  5(value: 0 | 1) { this.tuble[26] = value? true: false; }
    set  6(value: 0 | 1) { this.tuble[25] = value? true: false; }
    set  7(value: 0 | 1) { this.tuble[24] = value? true: false; }
    set  8(value: 0 | 1) { this.tuble[23] = value? true: false; }
    set  9(value: 0 | 1) { this.tuble[22] = value? true: false; }
    set 10(value: 0 | 1) { this.tuble[21] = value? true: false; }
    set 11(value: 0 | 1) { this.tuble[20] = value? true: false; }
    set 12(value: 0 | 1) { this.tuble[19] = value? true: false; }
    set 13(value: 0 | 1) { this.tuble[18] = value? true: false; }
    set 14(value: 0 | 1) { this.tuble[17] = value? true: false; }
    set 15(value: 0 | 1) { this.tuble[16] = value? true: false; }
    set 16(value: 0 | 1) { this.tuble[15] = value? true: false; }
    set 17(value: 0 | 1) { this.tuble[14] = value? true: false; }
    set 18(value: 0 | 1) { this.tuble[13] = value? true: false; }
    set 19(value: 0 | 1) { this.tuble[12] = value? true: false; }
    set 20(value: 0 | 1) { this.tuble[11] = value? true: false; }
    set 21(value: 0 | 1) { this.tuble[10] = value? true: false; }
    set 22(value: 0 | 1) { this.tuble[9]  = value? true: false; }
    set 23(value: 0 | 1) { this.tuble[8]  = value? true: false; }
    set 24(value: 0 | 1) { this.tuble[7]  = value? true: false; }
    set 25(value: 0 | 1) { this.tuble[6]  = value? true: false; }
    set 26(value: 0 | 1) { this.tuble[5]  = value? true: false; }
    set 27(value: 0 | 1) { this.tuble[4]  = value? true: false; }
    set 28(value: 0 | 1) { this.tuble[3]  = value? true: false; }
    set 29(value: 0 | 1) { this.tuble[2]  = value? true: false; }
    set 30(value: 0 | 1) { this.tuble[1]  = value? true: false; }
    set 31(value: 0 | 1) { this.tuble[0]  = value? true: false; }

    get value(): number { return this.valueOf(); }
    set value(value: number) {
        let next: number = value;

        while(true) {
            if (next > this.mask) next = next >> this.length;
            if (next < 0) next = this.mask - Math.abs(next);
            if (next >= 0 && next <= this.mask) break;
        }

        for (
            let index = this.length - 1, mask = 1;
            index >= 0;
            this.tuble[index] = next & mask? true: false, mask <<= 1, index--
        );
    }

    static get zero(): dword { return new dword(0); }

    constructor(value: number) {
        for (
            let index = this.length - 1, mask = 1;
            index >= 0;
            this.tuble[index] = value & mask? true: false, mask <<= 1, index--
        );
    }

    [Symbol.toPrimitive](hint: primitive) {
        if (hint === 'number') return this.valueOf();
        if (hint === 'string') return this.toString();
        return null;
    }

    valueOf(): number {
        let number: number = 0;

        for (
            let index = this.length - 1, mask = 1;
            index >= 0;
            number += this.tuble[index]? mask : 0, mask <<= 1, index--
        );

        return number;
    }
    toString(): string {
        let string: string = '';

        for (let index = 0; index < this.length; index++) {
            let value: number = this.tuble[index]? 1 : 0;

            if (index > 0) string += ',';
            string += value;
        }

        return '(' + string + ')';
    }
}

type valueType = number | bit | nibble | byte | word | dword;

export function stringify(value: valueType, prefix: boolean = false): string {
    let number: number = +value;
    let string: string = '';

    while(number > 0) {
        string += number & 1? 1 : 0;
        number >>= 1;
    }

    return (prefix? '0b' : '') + string;
}

export function hexify(value: valueType, prefix: boolean = false): string {
    let stringified: string = stringify(value, false);
    let length: number = Math.ceil(stringified.length / 4);
    let string: string = '';

    for (let char: number = 0; char < length; char++) {
        let number: number = 0;
        let start: number = char * 4;
        let end: number = start + 4;

        if (end < stringified.length)
            for (
                let index: number = start;
                index < end;
                number += stringified[index] == '1'? 1 : 0, index++
            );

        switch (number) {
            case 10: string += 'A'; break;
            case 11: string += 'B'; break;
            case 12: string += 'C'; break;
            case 13: string += 'D'; break;
            case 14: string += 'E'; break;
            case 15: string += 'F'; break;
            default: string += number; break;
        }
    }

    return (prefix? '0x' : '') + string;
}