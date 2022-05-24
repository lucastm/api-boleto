import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Max,
  MaxDate,
  Min,
  MinDate,
  ValidateNested,
} from 'class-validator';
import BarCode from '../value-objects/bar-code.vo';
import NumCode from '../value-objects/num-code.vo';

export abstract class Boleto {
  @ValidateNested()
  numCode: NumCode;

  @ValidateNested()
  barCode: BarCode;

  @Max(100000000)
  @Min(0)
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @MaxDate(new Date(''))
  @MinDate(new Date(''))
  @IsDate()
  @IsOptional()
  expirationDate?: Date;

  constructor(numCode: NumCode) {
    this.numCode = numCode;
  }

  get code(): string {
    return this.numCode.code;
  }
}
