import { cpu6510 } from "../cpu6510";
import { statusFlag } from "../cpu6510";

export function ADC_I(this: cpu6510) {
    let data: number = +this.fetchMemory();
    let result: number = +this.a + data + this.ps[statusFlag.c];
    let signedIsSame: boolean = !((+this.a ^ data) & 0x80);

    this.a.value = result & 0xFF;
    this.setZeroAndNegativeFlags(this.a);
    this.ps[statusFlag.c] = result > 0xFF ? 1 : 0;
    this.ps[statusFlag.v] = signedIsSame && !((+this.a ^ data) & 0x80)? 1 : 0;
    this.pc.value++;
}
export function ADC_Z(this: cpu6510) { throw "Error: Not implemented!" }
export function ADC_ZX(this: cpu6510) { throw "Error: Not implemented!" }
export function ADC_A(this: cpu6510) { throw "Error: Not implemented!" }
export function ADC_AX(this: cpu6510) { throw "Error: Not implemented!" }
export function ADC_AY(this: cpu6510) { throw "Error: Not implemented!" }
export function ADC_ZDX(this: cpu6510) { throw "Error: Not implemented!" }
export function ADC_ZDY(this: cpu6510) { throw "Error: Not implemented!" }