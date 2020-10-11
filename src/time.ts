import { Bulb, binToBulb } from './bulb';
import { decimalToDigits, decimalToBinary } from './number';

export interface TimeUnit {
    // msd
    a3: Bulb;
    a2: Bulb;
    a1: Bulb;
    // lsd
    b4: Bulb;
    b3: Bulb;
    b2: Bulb;
    b1: Bulb;
}

// Convert a given decimal number into a TimeUnit object
export function decimalToTimeUnit(decimalNumber: number): TimeUnit {
    const decimalPadLength = 2;
    const digits = decimalToDigits(decimalNumber, decimalPadLength);

    const binaryPadLength = 4;

    // a represents the most significant digit
    const a = decimalToBinary(digits[0], binaryPadLength);

    // b represents the least significant digit
    const b = decimalToBinary(digits[1], binaryPadLength);

    return {
        a3: binToBulb(a[1]),
        a2: binToBulb(a[2]),
        a1: binToBulb(a[3]),
        b4: binToBulb(b[0]),
        b3: binToBulb(b[1]),
        b2: binToBulb(b[2]),
        b1: binToBulb(b[3]),
    };
}
