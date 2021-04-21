import { Test, TestingModule } from '@nestjs/testing';
import { CardNumService } from './card-number.service';

describe('CardService', () => {
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
});
