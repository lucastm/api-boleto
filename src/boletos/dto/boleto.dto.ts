import { Boleto } from '../entities/boleto.entity';

export class BoletoDto {
  barCode: string;
  amount: string;
  expirationDate?: string;

  static fromBoleto(boleto: Boleto): BoletoDto {
    const boletoDto = new BoletoDto();
    boletoDto.barCode = boleto.barCode.code;
    boletoDto.amount = boleto.amount.toFixed(2);
    boletoDto.expirationDate = boleto.expirationDate
      .toISOString()
      .substring(0, 10);
    return boletoDto;
  }
}
