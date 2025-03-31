import { byte, word } from "../../binary";

export class programmableLogicArray {
    clock() {}
    reset() {}
    readByte(address: word): byte { return new byte(0) }
    writeByte(address: word, data: byte): void {}
}