export enum Bulb {
  On,
  Off,
}

export interface TimeUnit {
  a1: Bulb;
  a2: Bulb;
  a3: Bulb;
  b1: Bulb;
  b2: Bulb;
  b3: Bulb;
  b4: Bulb;
}

export class BinaryClockCore {
  private inputDate: Date;

  constructor(inputDate: Date) {
    this.inputDate = inputDate;
  }

  public getHours(): TimeUnit {}

  public getMinutes(): TimeUnit {}

  public getSeconds(): TimeUnit {}

  private decimalToBinary(inputNumber: number): number[] {}
}
