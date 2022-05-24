import InvalidBarCodeConvenioError from '../errors/invalid-bar-code-convenio.error';
import BarCode from './bar-code.vo';

export class BarCodeConvenio extends BarCode {
  readonly code?: string;

  constructor(code?: string) {
    super(code);
    this.validate();
  }

  validate() {
    super.validate();
    const isValid = this.code;
    if (!isValid) {
      throw new InvalidBarCodeConvenioError();
    }
  }
}

export default BarCodeConvenio;
