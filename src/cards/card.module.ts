import { Module } from '@nestjs/common';
import { CardController } from './controllers/card/card.controller';
import { CardNumService } from './services/card/card-number.service';

@Module({
  imports: [],
  providers: [CardNumService],
  controllers: [CardController],
  exports: [],
})
export class CardModule {}
