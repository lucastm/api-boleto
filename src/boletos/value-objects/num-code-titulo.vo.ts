import { isDeepStrictEqual } from 'util';
import InvalidNumCodeTituloError from '../errors/invalid-num-code-titulo.error';
import { multiplicarPorPosicao } from '../utils/multiplicacar-por-posicao';
import { quebrarPorAlgarismos } from '../utils/quebrar-por-algarismos';
import NumCode from './num-code.vo';

export class NumCodeTitulo extends NumCode {
  constructor(code?: string) {
    super(code);
    this.validate();
  }

  validate() {
    super.validate();
    const digitosVerificadoresExtraidos =
      this.extrairDigitosVerificadoresCampos();
    const digitosVerificadoresCalculados =
      this.calculaDigitosVerificadoresCampos();
    const isValid = isDeepStrictEqual(
      digitosVerificadoresExtraidos,
      digitosVerificadoresCalculados,
    );
    if (!isValid) {
      throw new InvalidNumCodeTituloError();
    }
  }

  private extrairDigitosVerificadoresCampos() {
    return {
      1: parseInt(this.code.substring(9, 10)),
      2: parseInt(this.code.substring(20, 21)),
      3: parseInt(this.code.substring(31, 32)),
    };
  }

  private calculaDigitosVerificadoresCampos() {
    return {
      1: this.calculaDigitoVerificadorCampo(
        this.code.substring(0, 9),
        '212121212',
      ),
      2: this.calculaDigitoVerificadorCampo(
        this.code.substring(10, 20),
        '1212121212',
      ),
      3: this.calculaDigitoVerificadorCampo(
        this.code.substring(21, 31),
        '1212121212',
      ),
    };
  }

  private calculaDigitoVerificadorCampo(
    campo: string,
    multiplicadores: string,
  ) {
    const resultadosMultiplicacao = multiplicarPorPosicao(
      campo,
      multiplicadores,
    );
    const resultadosQuebraAlgarismo = quebrarPorAlgarismos(
      resultadosMultiplicacao,
    );
    let total = 0;
    resultadosQuebraAlgarismo.forEach((num) => {
      total = total + num;
    });
    let dv = 10 - (total % 10);
    if (dv === 10) {
      dv = 0;
    }
    return dv;
  }
}

export default NumCodeTitulo;

// 21299758700000020000001121100012100447561740

// 21290001192110001210904475617405975870000002000
// 21290.0011 9 21100.01210 9 04475.61740 5 9 75870000002000

// 00193373700000001000500940144816060680935031
