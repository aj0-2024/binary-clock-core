import * as clock from '../src/core';
import { Bulb } from '../src/bulb';

describe('Core API tests', () => {
    it('Test the getHours functionality', () => {
        const date = new Date('October 6, 2020 23:10:10');
        expect(clock.getHours(date)).toStrictEqual({
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
        expect(clock.getMinutes(date)).toStrictEqual({
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
        expect(clock.getSeconds(date)).toStrictEqual({
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
