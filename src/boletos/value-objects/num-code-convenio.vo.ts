import InvalidNumCodeConvenioError from '../errors/invalid-num-code-convenio.error';
import NumCode from './num-code.vo';

export class NumCodeConvenio extends NumCode {
  constructor(code?: string) {
    super(code);
    this.validate();
  }

  validate() {
    super.validate();
    const isValid = this.code;
    if (!isValid) {
      throw new InvalidNumCodeConvenioError();
    }
  }
}

export default NumCodeConvenio;
