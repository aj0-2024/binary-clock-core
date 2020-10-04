export enum Bulb {
    On,
    Off,
}

export interface TimeUnit {
    a1: Bulb;
    a2: Bulb;
    a3: Bulb;
    b1: Bulb;
    b2: Bulb;
    b3: Bulb;
    b4: Bulb;
}

export class BinaryClockCore {
    private inputDate: Date;

    constructor(inputDate: Date) {
        this.inputDate = inputDate;
    }

    public getHours(): TimeUnit {
        const decimalHours = this.inputDate.getHours();
        const binHours = this.decimalToBinary(decimalHours);
        return this.binaryToTimeUnit(binHours);
    }

    public getMinutes(): TimeUnit {
        const decimalMinutes = this.inputDate.getMinutes();
        const binMinutes = this.decimalToBinary(decimalMinutes);
        return this.binaryToTimeUnit(binMinutes);
    }

    public getSeconds(): TimeUnit {
        const decimalSeconds = this.inputDate.getSeconds();
        const binSeconds = this.decimalToBinary(decimalSeconds);
        return this.binaryToTimeUnit(binSeconds);
    }

    private decimalToBinary(decimalNumber: number): number[] {
        const remainders = [];
        const base = 2;
        const currNumber = decimalNumber;

        while (decimalNumber > 0) {
            remainders.push(currNumber % base);
            currNumber = Math.floor(currNumber / base);
        }

        return remainders.reverse();
    }

    private binaryToTimeUnit(binNumber: number[]): TimeUnit {
        return {
            a1: Bulb.Off,
            a2: Bulb.Off,
            a3: Bulb.Off,
            b1: Bulb.Off,
            b2: Bulb.Off,
            b3: Bulb.Off,
            b4: Bulb.Off,
        };
    }
}
