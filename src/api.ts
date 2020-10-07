import { BinaryClockCore } from './core';

export const createBinaryClock = (dateTime: Date): BinaryClockCore => {
    return new BinaryClockCore(dateTime);
};
