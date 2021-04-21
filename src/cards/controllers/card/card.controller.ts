import {
  Controller,
  Get,
  Query,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CountQueryDto } from '../../dtos/count-query.dto';
import { CardNumService } from '../../services/card/card-number.service';

@Controller('card')
export class CardController {
  constructor(private cardNumSvc: CardNumService) {}

  @Get('numbers')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  )
  public getRandomCards(@Query() countQuery: CountQueryDto): number[] {
    console.log(countQuery.count);
    return this.cardNumSvc.generateRandomNumbers(countQuery.count);
  }
}
