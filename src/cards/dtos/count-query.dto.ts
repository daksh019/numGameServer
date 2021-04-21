import { IsDefined, IsNumber, Max, Min } from 'class-validator';

export class CountQueryDto {
  @IsDefined({
    message: 'count must be given',
  })
  @IsNumber(
    {},
    {
      message: 'count must be a number',
    },
  )
  @Max(12, {
    message: 'count can be a maximum of 12',
  })
  @Min(4, {
    message: 'count can be a minimum of 4',
  })
  count: number;
}
