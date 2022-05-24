import { Injectable } from '@nestjs/common';
import { BoletoTitulo } from './entities/boleto-titulo.entity';
import NumCodeTitulo from './value-objects/num-code-titulo.vo';

@Injectable()
export class BoletosService {
  findOne(code: string) {
    const numCodeTitulo = new NumCodeTitulo(code);
    const boletoTitulo = new BoletoTitulo(numCodeTitulo);
    return boletoTitulo;
  }
}
