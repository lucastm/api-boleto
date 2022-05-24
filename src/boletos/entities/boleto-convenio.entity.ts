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
import BarCodeConvenio from '../value-objects/bar-code-convenio.vo';
import NumCodeConvenio from '../value-objects/num-code-convenio.vo';
import { Boleto } from './boleto.entity';

export class BoletoConvenio extends Boleto {
  @ValidateNested()
  numCode: NumCodeConvenio;

  @ValidateNested()
  barCode: BarCodeConvenio;

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

  constructor(numCode: NumCodeConvenio) {
    super(numCode);
  }
}
