import { binToBulb } from './bulb';
import { TimeUnit } from './time';

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

    private decimalToTimeUnit(decimalNumber: number): TimeUnit {
        const digits = this.decimalToDigits(decimalNumber);

        // a represents the most significant digit
        const a = this.decimalToBinary(digits[0]);

        // b represents the least significant digit
        const b = this.decimalToBinary(digits[1]);

        return {
            a4: binToBulb(a[0]),
            a3: binToBulb(a[1]),
            a2: binToBulb(a[2]),
            a1: binToBulb(a[3]),
            b4: binToBulb(b[0]),
            b3: binToBulb(b[1]),
            b2: binToBulb(b[2]),
            b1: binToBulb(b[3]),
        };
    }
}
