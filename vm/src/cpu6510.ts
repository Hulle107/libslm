import { byte, word } from "../../binary/dist";
import { machine } from "./machine";
import { ADC_A, ADC_AX, ADC_AY, ADC_I, ADC_Z, ADC_ZDX, ADC_ZDY, ADC_ZX } from "./operations/ADC";
import { ANC_I } from "./operations/ANC";
import { AND_A, AND_AX, AND_AY, AND_I, AND_Z, AND_ZDX, AND_ZDY, AND_ZX } from "./operations/AND";
import { ANE_I } from "./operations/ANE";
import { ARR_I } from "./operations/ARR";
import { ASL, ASL_A, ASL_AX, ASL_Z, ASL_ZX } from "./operations/ASL";
import { ASR_I } from "./operations/ASR";
import { BCC_R } from "./operations/BCC";
import { BCS_R } from "./operations/BCS";
import { BEQ_R } from "./operations/BEQ";
import { BIT_A, BIT_Z } from "./operations/BIT";
import { BMI_R } from "./operations/BMI";
import { BNE_R } from "./operations/BNE";
import { BPL_R } from "./operations/BPL";
import { BRK } from "./operations/BRK";
import { BVS_R } from "./operations/BVS";
import { CLC } from "./operations/CLC";
import { CLD } from "./operations/CLD";
import { CLI } from "./operations/CLI";
import { CLV } from "./operations/CLV";
import { CMP_A, CMP_AX, CMP_AY, CMP_I, CMP_Z, CMP_ZDX, CMP_ZDY, CMP_ZX } from "./operations/CMP";
import { CPX_I, CPX_Z, CPX_A } from "./operations/CPX";
import { CPY_I, CPY_Z, CPY_A } from "./operations/CPY";
import { DCP_ZDX, DCP_Z, DCP_ZDY, DCP_ZX, DCP_A, DCP_AY, DCP_AX } from "./operations/DCP";
import { DEC_Z, DEC_ZX, DEC_A, DEC_AX } from "./operations/DEC";
import { DEX } from "./operations/DEX";
import { DEY } from "./operations/DEY";
import { EOR_A, EOR_AX, EOR_AY, EOR_I, EOR_Z, EOR_ZDX, EOR_ZDY, EOR_ZX } from "./operations/EOR";
import { INC_Z, INC_ZX, INC_A, INC_AX } from "./operations/INC";
import { INX } from "./operations/INX";
import { INY } from "./operations/INY";
import { ISB_ZDX, ISB_Z, ISB_ZDY, ISB_ZX, ISB_A, ISB_AY, ISB_AX } from "./operations/ISB";
import { JAM } from "./operations/JAM";
import { JMP_A, JMP_AD } from "./operations/JMP";
import { JSR_A } from "./operations/JSR";
import { LAE_AY } from "./operations/LAE";
import { LAX_ZDX, LAX_Z, LAX_ZDY, LAX_ZY, LAX_A, LAX_AY } from "./operations/LAX";
import { LDA_A, LDA_AX, LDA_AY, LDA_I, LDA_Z, LDA_ZDX, LDA_ZDY, LDA_ZX } from "./operations/LDA";
import { LDX_A, LDX_AY, LDX_I, LDX_Z, LDX_ZY } from "./operations/LDX";
import { LDY_I, LDY_Z, LDY_ZX, LDY_A, LDY_AX } from "./operations/LDY";
import { LSR_Z, LSR_ZX, LSR, LSR_A, LSR_AX } from "./operations/LSR";
import { LXA_I } from "./operations/LXA";
import { NOP_Z, NOP_ZX, NOP_I, NOP_A, NOP, NOP_AX } from "./operations/NOP";
import { ORA_ZDX, ORA_Z, ORA_ZDY, ORA_ZX, ORA_I, ORA_A, ORA_AY, ORA_AX } from "./operations/ORA";
import { PHA } from "./operations/PHA";
import { PHP } from "./operations/PHP";
import { PLA } from "./operations/PLA";
import { PLP } from "./operations/PLP";
import { RLA_ZDX, RLA_Z, RLA_ZDY, RLA_ZX, RLA_A, RLA_AY, RLA_AX } from "./operations/RLA";
import { ROL_Z, ROL_ZX, ROL, ROL_A, ROL_AX } from "./operations/ROL";
import { ROR_Z, ROR_ZX, ROR, ROR_A, ROR_AX } from "./operations/ROR";
import { RRA_A, RRA_AX, RRA_AY, RRA_Z, RRA_ZDX, RRA_ZDY, RRA_ZX } from "./operations/RRA";
import { RTI } from "./operations/RTI";
import { RTS } from "./operations/RTS";
import { SAX_ZDX, SAX_Z, SAX_ZY, SAX_A } from "./operations/SAX";
import { SBC_ZDX, SBC_Z, SBC_ZDY, SBC_ZX, SBC_I, SBC_A, SBC_AY, SBC_AX } from "./operations/SBC";
import { SBX_I } from "./operations/SBX";
import { SEC } from "./operations/SEC";
import { SED } from "./operations/SED";
import { SEI } from "./operations/SEI";
import { SHA_ZDY, SHA_AY } from "./operations/SHA";
import { SHS_AY } from "./operations/SHS";
import { SHX_AY } from "./operations/SHX";
import { SHY_AX } from "./operations/SHY";
import { SLO_ZDX, SLO_Z, SLO_ZDY, SLO_ZX, SLO_A, SLO_AY, SLO_AX } from "./operations/SLO";
import { SRE_ZDX, SRE_Z, SRE_ZDY, SRE_ZX, SRE_A, SRE_AY, SRE_AX } from "./operations/SRE";
import { STA_ZDX, STA_Z, STA_ZDY, STA_ZX, STA_A, STA_AY, STA_AX } from "./operations/STA";
import { STX_Z, STX_ZY, STX_A } from "./operations/STX";
import { STY_Z, STY_ZX, STY_A } from "./operations/STY";
import { TAX } from "./operations/TAX";
import { TAY } from "./operations/TAY";
import { TSX } from "./operations/TSX";
import { TXA } from "./operations/TXA";
import { TXS } from "./operations/TXS";
import { TYA } from "./operations/TYA";

//**************************************
//* CENTRAL PROCESSING UNIT (CPU) 6510 *
//**************************************

// Source: http://www.unusedino.de/ec64/technical/aay/c64/
// Source: https://codebase64.org/lib/exe/fetch.php?media=base:nomoresecrets-nmos6510unintendedopcodes-20212412.pdf
// Source: https://ist.uwaterloo.ca/~schepers/MJK/6510.html
// Source: https://www.oxyron.de/html/opcodes02.html
// Source: https://github.com/davepoo/6502Emulator/tree/master
// Source: https://web.archive.org/web/20221106105459if_/http://archive.6502.org/books/mcs6500_family_hardware_manual.pdf

/**
 * Used to get given flag in **Processor Status**
 */
export enum statusFlag {
    /**
     * ## Negative flag
     */
    n = 0,
    /**
     * ## Overflow flag
     */
    v = 1,
    /**
     * ## Break flag
     */
    b = 3,
    /**
     * ## Decimal Mode flag
     */
    d = 4,
    /**
     * ## Interrupt Disabled flag
     */
    i = 5,
    /**
     * ## Zero flag
     */
    z = 6,
    /**
     * ## Carry flag
     */
    c = 7,
}

export class cpu6510 {
    //--------------------------------------------------
    // Properties
    //--------------------------------------------------

    /**
     * ## Program Counter
     * @private
     */
    protected pc: word = word.zero;
    /**
     * ## Stack Pointer
     * @private
     */
    protected sp: byte = byte.zero;
    /**
     * ## Processor Status
     * @private
     */
    protected ps: byte = byte.zero;
    /**
     * ## Accumulator
     * @private
     */
    protected  a: byte = byte.zero;
    /**
     * ## Index Register X
     * @private
     */
    protected  x: byte = byte.zero;
    /**
     * ## Index Register Y
     * @private
     */
    protected  y: byte = byte.zero;
    /**
     * How many **Clock cycles** to wait.
     * @description This simulate the time the processor takes to perform a task.
     * @private
     */
    protected wait: number = 0;

    //--------------------------------------------------
    // Getters & Setters
    //--------------------------------------------------
    /**
     * A boolean to check if the processor is in a working state.
     * @readonly
     */
    get working(): boolean { return this.wait > 0 }

    /**
     * Returns the current **Stack address**.
     * @readonly
     * @private
     */
    protected get stackAddress(): word { return new word(0x0100 | +this.sp) }
    /**
     * Returns the current **Zero Page address**.
     * @readonly
     * @private
     */
    protected get zeroPageAddress(): word { return new word(+this.fetchMemory()) }
    /**
     * Returns the current **Zero Page address** with **Index Register X** added.
     * @readonly
     * @private
     */
    protected get zeroPageXAddress(): word { 
        let address: number = +this.zeroPageAddress;
        
        address += +this.x;
        this.wait++;

        return new word(address);
    }
    /**
     * Returns the current **Zero Page address** with **Index Register Y** added.
     * @readonly
     * @private
     */
    protected get zeroPageYAddress(): word {
        let address: number = +this.zeroPageAddress;

        address += +this.y;
        this.wait++;

        return new word(address);
    }
    /**
     * Returns the current **Absolute address**.
     * @readonly
     * @private
     */
    protected get absoluteAddress(): word {
        let low: number = +this.fetchMemory();
        let high: number = +this.fetchMemory();

        return new word(low + (high << 8));
    }
    /**
     * Returns the current **Absolute address** with **Index Register X** added.
     * @readonly
     * @private
     */
    protected get absoluteXAddress(): word {
        let address: number = +this.absoluteAddress;
        let addressX: number = address + (+this.x);

        if ((address ^ addressX) >> 8) this.wait++;

        return new word(addressX);
    }
    /**
     * Returns the current **Absolute address** with **Index Register Y** added.
     * @readonly
     * @private
     */
    protected get absoluteYAddress(): word {
        let address: number = +this.absoluteAddress;
        let addressY: number = address + (+this.y);

        if ((address ^ addressY) >> 8) this.wait++;

        return new word(addressY);
    }
    /**
     * Returns the current **Indirect address** with **Index Register X** added.
     * @readonly
     * @private
     */
    protected get indirectXAddress(): word {
        let zeroPageAddress: number = +this.fetchMemory();
        
        zeroPageAddress += +this.x;
        this.wait++;

        let low: number = +this.readMemory(new word(zeroPageAddress));
        let high: number = +this.readMemory(new word(zeroPageAddress+1));

        return new word(low + (high << 8));
    }
    /**
     * Returns the current **Indirect address** with **Index Register Y** added to the result.
     * @readonly
     * @private
     */
    protected get indirectYAddress(): word {
        let zeroPageAddress: number = +this.fetchMemory();
        let low: number = +this.readMemory(new word(zeroPageAddress));
        let high: number = +this.readMemory(new word(zeroPageAddress+1));
        let address: number = low + (high >> 8);
        let addressY: number = address + (+this.y);

        if ((address ^ addressY) >> 8) this.wait++;

        return new word(addressY);
    }

    //--------------------------------------------------
    // Contructor
    //--------------------------------------------------
    constructor() {}

    //--------------------------------------------------
    // Main Logic
    //--------------------------------------------------
    /**
     * Called every **Clock cycles**.
     * @description This work like an update function, to update the processor.
     */
    clock(): void {
        if (this.working) {
            this.wait--;
            return;
        }

        let operationIndex: number = +this.fetchMemory();
        this.operationTable[operationIndex].apply(this);
    }

    /**
     * Reset the processor to an known state.
     */
    reset(): void {
        this.pc.value = 0xFFFC; // 0b1111111111111100
        this.sp.value = 0xFF;   // 0b11111111
        this.ps.value = 0x04;   // 0b00000100
        this.a.value = 0;
        this.x.value = 0;
        this.y.value = 0;
    }

    //--------------------------------------------------
    // Memory Logic
    //--------------------------------------------------
    protected readMemory(address: word): byte {
        let data: byte = machine.pla.readByte(address);

        this.wait++;

        return data;
    }

    protected writeMemory(address: word, value: byte): void {
        machine.pla.writeByte(address, value);
        this.wait++;
    }

    protected fetchMemory(): byte {
        let data:byte = this.readMemory(this.pc);

        this.pc.value++;

        return data;
    }

    //--------------------------------------------------
    // Stack Logic
    //--------------------------------------------------
    protected popStack(): byte {
        this.sp.value++;
        this.wait++;

        return this.readMemory(this.stackAddress);
    }

    protected pushStack(value: byte): void {
        this.writeMemory(this.stackAddress, value);
        this.sp.value--;
        this.wait++;
    }

    //--------------------------------------------------
    // Helper Logic
    //--------------------------------------------------
    protected setZeroAndNegativeFlags(register: byte): void {
        this.ps[statusFlag.z] = +register == 0? 1 : 0;
        this.ps[statusFlag.n] = +register == 0x80 ? 1 : 0;
    }

    /**
     * ## Operation table
     * @readonly
     * @private
     */
    protected readonly operationTable: Record<number, (this: cpu6510) => void> = {
        0x00: BRK,  0x01: ORA_ZDX,0x02: JAM,  0x03: SLO_ZDX,0x04: NOP_Z, 0x05: ORA_Z, 0x06: ASL_Z, 0x07: SLO_Z,
        0x10: BPL_R,0x11: ORA_ZDY,0x12: JAM,  0x13: SLO_ZDY,0x14: NOP_ZX,0x15: ORA_ZX,0x16: ASL_ZX,0x17: SLO_ZX,
        0x20: JSR_A,0x21: AND_ZDX,0x22: JAM,  0x23: RLA_ZDX,0x24: BIT_Z, 0x25: AND_Z, 0x26: ROL_Z, 0x27: RLA_Z,
        0x30: BMI_R,0x31: AND_ZDY,0x32: JAM,  0x33: RLA_ZDY,0x34: NOP_ZX,0x35: AND_ZX,0x36: ROL_ZX,0x37: RLA_ZX,
        0x40: RTI,  0x41: EOR_ZDX,0x42: JAM,  0x43: SRE_ZDX,0x44: NOP_Z, 0x45: EOR_Z, 0x46: LSR_Z, 0x47: SRE_Z,
        0x50: BCC_R,0x51: EOR_ZDY,0x52: JAM,  0x53: SRE_ZDY,0x54: NOP_ZX,0x55: EOR_ZX,0x56: LSR_ZX,0x57: SRE_ZX,
        0x60: RTS,  0x61: ADC_ZDX,0x62: JAM,  0x63: RRA_ZDX,0x64: NOP_Z, 0x65: ADC_Z, 0x66: ROR_Z, 0x67: RRA_Z,
        0x70: BVS_R,0x71: ADC_ZDY,0x72: JAM,  0x73: RRA_ZDY,0x74: NOP_ZX,0x75: ADC_ZX,0x76: ROR_ZX,0x77: RRA_ZX,
        0x80: NOP_I,0x81: STA_ZDX,0x82: NOP_I,0x83: SAX_ZDX,0x84: STY_Z, 0x85: STA_Z, 0x86: STX_Z, 0x87: SAX_Z,
        0x90: BCC_R,0x91: STA_ZDY,0x92: JAM,  0x93: SHA_ZDY,0x94: STY_ZX,0x95: STA_ZX,0x96: STX_ZY,0x97: SAX_ZY,
        0xA0: LDY_I,0xA1: LDA_ZDX,0xA2: LDX_I,0xA3: LAX_ZDX,0xA4: LDY_Z, 0xA5: LDA_Z, 0xA6: LDX_Z, 0xA7: LAX_Z,
        0xB0: BCS_R,0xB1: LDA_ZDY,0xB2: JAM,  0xB3: LAX_ZDY,0xB4: LDY_ZX,0xB5: LDA_ZX,0xB6: LDX_ZY,0xB7: LAX_ZY,
        0xC0: CPY_I,0xC1: CMP_ZDX,0xC2: NOP_I,0xC3: DCP_ZDX,0xC4: CPY_Z, 0xC5: CMP_Z, 0xC6: DEC_Z, 0xC7: DCP_Z,
        0xD0: BNE_R,0xD1: CMP_ZDY,0xD2: JAM,  0xD3: DCP_ZDY,0xD4: NOP_ZX,0xD5: CMP_ZX,0xD6: DEC_ZX,0xD7: DCP_ZX,
        0xE0: CPX_I,0xE1: SBC_ZDX,0xE2: NOP_I,0xE3: ISB_ZDX,0xE4: CPX_Z, 0xE5: SBC_Z, 0xE6: INC_Z, 0xE7: ISB_Z,
        0xF0: BEQ_R,0xF1: SBC_ZDY,0xF2: JAM,  0xF3: ISB_ZDY,0xF4: NOP_ZX,0xF5: SBC_ZX,0xF6: INC_ZX,0xF7: ISB_ZX,
        0x08: PHP,  0x09: ORA_I,  0x0A: ASL,  0x0B: ANC_I,  0x0C: NOP_A, 0x0D: ORA_A, 0x0E: ASL_A, 0x0F: SLO_A,
        0x18: CLC,  0x19: ORA_AY, 0x1A: NOP,  0x1B: SLO_AY, 0x1C: NOP_AX,0x1D: ORA_AX,0x1E: ASL_AX,0x1F: SLO_AX,
        0x28: PLP,  0x29: AND_I,  0x2A: ROL,  0x2B: ANC_I,  0x2C: BIT_A, 0x2D: AND_A, 0x2E: ROL_A, 0x2F: RLA_A,
        0x38: SEC,  0x39: AND_AY, 0x3A: NOP,  0x3B: RLA_AY, 0x3C: NOP_AX,0x3D: AND_AX,0x3E: ROL_AX,0x3F: RLA_AX,
        0x48: PHA,  0x49: EOR_I,  0x4A: LSR,  0x4B: ASR_I,  0x4C: JMP_A, 0x4D: EOR_A, 0x4E: LSR_A, 0x4F: SRE_A,
        0x58: CLI,  0x59: EOR_AY, 0x5A: NOP,  0x5B: SRE_AY, 0x5C: NOP_AX,0x5D: EOR_AX,0x5E: LSR_AX,0x5F: SRE_AX,
        0x68: PLA,  0x69: ADC_I,  0x6A: ROR,  0x6B: ARR_I,  0x6C: JMP_AD,0x6D: ADC_A, 0x6E: ROR_A, 0x6F: RRA_A,
        0x78: SEI,  0x79: ADC_AY, 0x7A: NOP,  0x7B: RRA_AY, 0x7C: NOP_AX,0x7D: ADC_AX,0x7E: ROR_AX,0x7F: RRA_AX,
        0x88: DEY,  0x89: NOP_I,  0x8A: TXA,  0x8B: ANE_I,  0x8C: STY_A, 0x8D: STA_A, 0x8E: STX_A, 0x8F: SAX_A,
        0x98: TYA,  0x99: STA_AY, 0x9A: TXS,  0x9B: SHS_AY, 0x9C: SHY_AX,0x9D: STA_AX,0x9E: SHX_AY,0x9F: SHA_AY,
        0xA8: TAY,  0xA9: LDA_I,  0xAA: TAX,  0xAB: LXA_I,  0xAC: LDY_A, 0xAD: LDA_A, 0xAE: LDX_A, 0xAF: LAX_A,
        0xB8: CLV,  0xB9: LDA_AY, 0xBA: TSX,  0xBB: LAE_AY, 0xBC: LDY_AX,0xBD: LDA_AX,0xBE: LDX_AY,0xBF: LAX_AY,
        0xC8: INY,  0xC9: CMP_I,  0xCA: DEX,  0xCB: SBX_I,  0xCC: CPY_A, 0xCD: CMP_A, 0xCE: DEC_A, 0xCF: DCP_A,
        0xD8: CLD,  0xD9: CMP_AY, 0xDA: NOP,  0xDB: DCP_AY, 0xDC: NOP_AX,0xDD: CMP_AX,0xDE: DEC_AX,0xDF: DCP_AX,
        0xE8: INX,  0xE9: SBC_I,  0xEA: NOP,  0xEB: SBC_I,  0xEC: CPX_A, 0xED: SBC_A, 0xEE: INC_A, 0xEF: ISB_A,
        0xF8: SED,  0xF9: SBC_AY, 0xFA: NOP,  0xFB: ISB_AY, 0xFC: NOP_AX,0xFD: SBC_AX,0xFE: INC_AX,0xFF: ISB_AX,
    }
}