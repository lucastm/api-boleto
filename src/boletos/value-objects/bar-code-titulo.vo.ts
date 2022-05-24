import InvalidBarCodeTituloError from '../errors/invalid-bar-code-titulo.error';
import { multiplicarPorPosicao } from '../utils/multiplicacar-por-posicao';
import BarCode from './bar-code.vo';

export class BarCodeTitulo extends BarCode {
  readonly code?: string;

  constructor(code?: string) {
    super(code);
    this.validate();
  }

  validate() {
    super.validate();
    const digitoVerificadorExtraido = parseInt(this.code.substring(4, 5));
    const digitoVerificadorCalculado = this.calculaDigitoVerificador();
    const isValid = digitoVerificadorExtraido === digitoVerificadorCalculado;
    if (!isValid) {
      throw new InvalidBarCodeTituloError();
    }
  }

  private calculaDigitoVerificador(): number {
    const codeArray = this.code.split('');
    codeArray.splice(4, 1);
    const codeWithoutDV = codeArray.join('');
    const multiplicador = '4329876543298765432987654329876543298765432';
    const resultadosMultiplicacao = multiplicarPorPosicao(
      codeWithoutDV,
      multiplicador,
    );
    let total = 0;
    resultadosMultiplicacao.forEach((num) => {
      total = total + num;
    });
    let dv = 11 - (total % 11);
    if (dv === 0 || dv === 10 || dv === 11) {
      dv = 1;
    }
    return dv;
  }
}

export default BarCodeTitulo;
