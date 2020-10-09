export enum Bulb {
    Off = 'Off',
    On = 'On',
}

// converts a binary digit number into Bulb
export const binToBulb = (binNumber: number): Bulb => {
    if (binNumber === 0) {
        return Bulb.Off;
    } else {
        return Bulb.On;
    }
};
