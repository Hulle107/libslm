import { byte, word } from "libslm-binary";

export class programmableLogicArray {
    clock() {}
    reset() {}
    readByte(address: word): byte { return new byte(0) }
    writeByte(address: word, data: byte): void {}
}