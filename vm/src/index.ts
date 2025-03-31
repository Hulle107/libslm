import { cpu6510 } from "./cpu6510";
import { programmableLogicArray } from "./pla";

export class machine {
    static pla: programmableLogicArray = new programmableLogicArray;
    static cpu: cpu6510 = new cpu6510();

    static clock() {
        this.cpu.clock();
        this.pla.clock();
    }
}