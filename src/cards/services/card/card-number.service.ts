import { Injectable } from '@nestjs/common';

@Injectable()
export class CardNumService {
  private readonly max = 100;
  private readonly min = 1;

  private randomNum(): number {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

  public generateRandomNumbers(count: number): number[] {
    const numArray = [];
    for (let i = 0; i < count; i++) {
      numArray.push(this.randomNum());
    }
    return numArray;
  }
}
