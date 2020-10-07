import { createBinaryClock } from '../src';

describe('Core Binary Clock Tests', () => {
    it('Creates successfully', () => {
        const clock = createBinaryClock(new Date());
        console.log(clock.getHours);
    });
});
