import { cpu6510 } from "../cpu6510";

export function AND_I(this: cpu6510) {
    let data: number = +this.fetchMemory();

    this.a.value = +this.a & data;
    this.setZeroAndNegativeFlags(this.a);
}
export function AND_Z(this: cpu6510) {
    let data: number = +this.readMemory(this.zeroPageAddress);

    this.a.value = +this.a & data;
    this.setZeroAndNegativeFlags(this.a);
}
export function AND_ZX(this: cpu6510) {
    let data: number = +this.readMemory(this.zeroPageXAddress);

    this.a.value = +this.a & data;
    this.setZeroAndNegativeFlags(this.a);
}
export function AND_A(this: cpu6510) {
    let data: number = +this.readMemory(this.absoluteAddress);

    this.a.value = +this.a & data;
    this.setZeroAndNegativeFlags(this.a);
}
export function AND_AX(this: cpu6510) {
    let data: number = +this.readMemory(this.absoluteXAddress);

    this.a.value = +this.a & data;
    this.setZeroAndNegativeFlags(this.a);
}
export function AND_AY(this: cpu6510) {
    let data: number = +this.readMemory(this.absoluteYAddress);

    this.a.value = +this.a & data;
    this.setZeroAndNegativeFlags(this.a);
}
export function AND_ZDX(this: cpu6510) {
    let data: number = +this.readMemory(this.indirectXAddress);

    this.a.value = +this.a & data;
    this.setZeroAndNegativeFlags(this.a);
}
export function AND_ZDY(this: cpu6510) {
    let data: number = +this.readMemory(this.indirectYAddress);

    this.a.value = +this.a & data;
    this.setZeroAndNegativeFlags(this.a);
}