import { Test, TestingModule } from '@nestjs/testing';
import { CardNumService } from './card-number.service';

describe('CardNumService', () => {
  let service: CardNumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardNumService],
    }).compile();

    service = module.get<CardNumService>(CardNumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateRandomNumbers', () => {
    it('will return empty array if zero count is provided', () => {
      const arr = service.generateRandomNumbers(0);
      expect(arr).toBeDefined();
      expect(arr.length).toBeDefined();
      expect(arr.length).toEqual(0);
    });

    it('will return empty array if negative is provided', () => {
      const arr = service.generateRandomNumbers(-1);
      expect(arr).toBeDefined();
      expect(arr.length).toBeDefined();
      expect(arr.length).toEqual(0);
    });

    it('will return array of numbers whose length is equal to count provided', () => {
      const arr = service.generateRandomNumbers(2);
      expect(arr).toBeDefined();
      expect(arr.length).toBeDefined();
      expect(arr.length).toEqual(2);

      expect(arr[0]).toBeGreaterThanOrEqual(1);
      expect(arr[1]).toBeGreaterThanOrEqual(1);
      expect(arr[0]).toBeLessThanOrEqual(100);
      expect(arr[1]).toBeLessThanOrEqual(100);
    });
  });
});
