import { createBinaryClock } from '../src';
import { BinaryClockCore } from '../src/core';
import { Bulb } from '../src/bulb';

describe('Basic Binary Clock Tests', () => {
    it('Creates clock successfully', () => {
        const clock = createBinaryClock(new Date());
        expect(clock).toBeInstanceOf(BinaryClockCore);
    });
});

describe('Core API tests', () => {
    it('Test the getHours functionality', () => {
        const date = new Date('October 6, 2020 23:10:10');
        const clock = createBinaryClock(date);

        expect(clock.getHours()).toStrictEqual({
            a4: Bulb.Off,
            a3: Bulb.Off,
            a2: Bulb.On,
            a1: Bulb.Off,
            b4: Bulb.Off,
            b3: Bulb.Off,
            b2: Bulb.On,
            b1: Bulb.On,
        });
    });

    it('Test the getMinutes functionality', () => {
        const date = new Date('October 6, 2020 23:57:10');
        const clock = createBinaryClock(date);

        expect(clock.getMinutes()).toStrictEqual({
            a4: Bulb.Off,
            a3: Bulb.On,
            a2: Bulb.Off,
            a1: Bulb.On,
            b4: Bulb.Off,
            b3: Bulb.On,
            b2: Bulb.On,
            b1: Bulb.On,
        });
    });

    it('Test the getSeconds functionality', () => {
        const date = new Date('October 6, 2020 23:57:29');
        const clock = createBinaryClock(date);

        expect(clock.getSeconds()).toStrictEqual({
            a4: Bulb.Off,
            a3: Bulb.Off,
            a2: Bulb.On,
            a1: Bulb.Off,
            b4: Bulb.On,
            b3: Bulb.Off,
            b2: Bulb.Off,
            b1: Bulb.On,
        });
    });
});
