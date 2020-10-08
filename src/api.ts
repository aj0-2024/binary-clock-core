import { BinaryClockCore } from './core';
export { TimeUnit } from './time';
export { Bulb } from './bulb';

export const createBinaryClock = (dateTime: Date): BinaryClockCore => {
    return new BinaryClockCore(dateTime);
};
