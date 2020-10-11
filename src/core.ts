import { TimeUnit, decimalToTimeUnit } from './time';

// convert a given date object into a hours binary TimeUnit object
export function getHours(inputDate: Date): TimeUnit {
    return decimalToTimeUnit(inputDate.getHours());
}

// convert a given date object into a minutes binary TimeUnit object
export function getMinutes(inputDate: Date): TimeUnit {
    return decimalToTimeUnit(inputDate.getMinutes());
}

// convert a given date object into a seconds binary TimeUnit object
export function getSeconds(inputDate: Date): TimeUnit {
    return decimalToTimeUnit(inputDate.getSeconds());
}

// convert a given date object into a time binary TimeUnit objects
// indicating hours, minutes and seconds
export function getTime(
    inputDate: Date
): {
    hours: TimeUnit;
    minutes: TimeUnit;
    seconds: TimeUnit;
} {
    return {
        hours: getHours(inputDate),
        minutes: getMinutes(inputDate),
        seconds: getSeconds(inputDate),
    };
}
