import { cpu6510 } from "../cpu6510";
import { statusFlag } from "../cpu6510";

/**
 * ## ADC -> immediate
 * @description Adding memory to accumulator with carry.
 * @private
 */
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
/**
 * ## ADC -> zeropage
 * @description Adding memory to accumulator with carry.
 * @private
 */
export function ADC_Z(this: cpu6510) { throw "Error: Not implemented!" }
/**
 * ## ADC -> zeropage, x
 * @description Adding memory to accumulator with carry.
 * @private
 */
export function ADC_ZX(this: cpu6510) { throw "Error: Not implemented!" }
/**
 * ## ADC -> absolute
 * @description Adding memory to accumulator with carry.
 * @private
 */
export function ADC_A(this: cpu6510) { throw "Error: Not implemented!" }
/**
 * ## ADC -> absolute, x
 * @description Adding memory to accumulator with carry.
 * @private
 */
export function ADC_AX(this: cpu6510) { throw "Error: Not implemented!" }
/**
 * ## ADC -> absolute, y
 * @description Adding memory to accumulator with carry.
 * @private
 */
export function ADC_AY(this: cpu6510) { throw "Error: Not implemented!" }
/**
 * ## ADC -> (indirect, x)
 * @description Adding memory to accumulator with carry.
 * @private
 */
export function ADC_ZDX(this: cpu6510) { throw "Error: Not implemented!" }
/**
 * ## ADC -> (indirect), y
 * @description Adding memory to accumulator with carry.
 * @private
 */
export function ADC_ZDY(this: cpu6510) { throw "Error: Not implemented!" }