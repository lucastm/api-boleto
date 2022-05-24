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
import BarCodeTitulo from '../value-objects/bar-code-titulo.vo';
import NumCodeTitulo from '../value-objects/num-code-titulo.vo';
import { Boleto } from './boleto.entity';

export class BoletoTitulo extends Boleto {
  @ValidateNested()
  numCode: NumCodeTitulo;

  @ValidateNested()
  barCode: BarCodeTitulo;

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

  constructor(numCode: NumCodeTitulo) {
    super(numCode);
    this.barCode = new BarCodeTitulo(this.calculaCodigoBarra());
    this.amount = this.calculaValor();
    this.expirationDate = this.calculaDataExpiracao();
  }

  private calculaCodigoBarra() {
    const codigoIF = this.code.substring(0, 3);
    const codigoMoeda = this.code.substring(3, 4);
    const dv = this.code.substring(32, 33);
    const fatorVencimento = this.code.substring(33, 37);
    const valor = this.code.substring(37, 47);
    const campolivre1 = this.code.substring(4, 9);
    const campolivre2 = this.code.substring(10, 20);
    const campolivre3 = this.code.substring(21, 31);
    const campolivre = campolivre1 + campolivre2 + campolivre3;
    const barCode =
      codigoIF + codigoMoeda + dv + fatorVencimento + valor + campolivre;
    return barCode;
  }

  private calculaValor() {
    const valor = this.code.substring(37, 47);
    let valorNumerico = parseInt(valor);
    valorNumerico = valorNumerico / 100;
    return valorNumerico;
  }

  private calculaDataExpiracao() {
    const fatorVencimento = this.code.substring(33, 37);
    const fatorVencimentoNumerico = parseInt(fatorVencimento);
    if (fatorVencimentoNumerico < 1000) {
      return undefined;
    }
    const fatorMenosMil = fatorVencimentoNumerico - 1000;
    const dataBase = new Date('2000-07-03');
    const dataExpiracao = new Date(
      dataBase.setDate(dataBase.getDate() + fatorMenosMil),
    );
    return dataExpiracao;
  }
}
