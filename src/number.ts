// take a decimal number and split it into its constituent digits
export function decimalToDigits(
    decimalNumber: number,
    padLength: number
): number[] {
    const decimalBase = 10;
    return padDigits(convertToBase(decimalNumber, decimalBase), padLength);
}

// padding will prevent errors where a certain index is not available
// this is used in higher level api
export function padDigits(digits: number[], padLength: number) {
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
export function convertToBase(inputNumber: number, base: number): number[] {
    const remainders = [];
    let currNumber = inputNumber;

    while (currNumber > 0) {
        remainders.push(currNumber % base);
        currNumber = Math.floor(currNumber / base);
    }

    return remainders.reverse();
}

export function decimalToBinary(
    decimalNumber: number,
    padLength: number
): number[] {
    const binaryBase = 2;
    const binNumberDigits = convertToBase(decimalNumber, binaryBase);
    return padDigits(binNumberDigits, padLength);
}
