export enum Bulb {
    Off = 'Off',
    On = 'On',
}

export interface TimeUnit {
    a1: Bulb;
    a2: Bulb;
    a3: Bulb;
    a4: Bulb;
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
        return this.decimalToTimeUnit(this.inputDate.getHours());
    }

    public getMinutes(): TimeUnit {
        return this.decimalToTimeUnit(this.inputDate.getMinutes());
    }

    public getSeconds(): TimeUnit {
        return this.decimalToTimeUnit(this.inputDate.getSeconds());
    }

    private decimalToDigits(decimalNumber: number): number[] {
        return this.padDigits(this.convertToBase(decimalNumber, 10), 2);
    }

    private decimalToBinary(decimalNumber: number): number[] {
        const binNumberDigits = this.convertToBase(decimalNumber, 2);
        return this.padDigits(binNumberDigits, 4);
    }

    private padDigits(digits: number[], padLength: number) {
        const padValue = 0;

        if (digits.length < padLength) {
            const toPadLength = padLength - digits.length;

            for (let i = 0; i < toPadLength; i++) {
                // insert padValue in the MSB
                digits.splice(0, 0, padValue);
            }
        }

        return digits;
    }

    // converts a number into the given base, returns an array of digits
    private convertToBase(inputNumber: number, base: number): number[] {
        const remainders = [];
        let currNumber = inputNumber;

        while (currNumber > 0) {
            remainders.push(currNumber % base);
            currNumber = Math.floor(currNumber / base);
        }

        return remainders.reverse();
    }

    // converts a binary digit number into Bulb
    private binToBulb(binNumber: number): Bulb {
        if (binNumber === 0) {
            return Bulb.Off;
        } else {
            return Bulb.On;
        }
    }

    private decimalToTimeUnit(decimalNumber: number): TimeUnit {
        const digits = this.decimalToDigits(decimalNumber);

        // a represents the most significant digit
        const a = this.decimalToBinary(digits[0]);

        // b represents the least significant digit
        const b = this.decimalToBinary(digits[1]);

        return {
            a4: this.binToBulb(a[0]),
            a3: this.binToBulb(a[1]),
            a2: this.binToBulb(a[2]),
            a1: this.binToBulb(a[3]),
            b4: this.binToBulb(b[0]),
            b3: this.binToBulb(b[1]),
            b2: this.binToBulb(b[2]),
            b1: this.binToBulb(b[3]),
        };
    }
}
