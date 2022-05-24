import InvalidBarCodeError from './invalid-bar-code.error';

export class InvalidBarCodeConvenioError extends InvalidBarCodeError {
  constructor(message?: string) {
    super(message || 'Code must be a valid BarCodeConvenio');
    this.name = 'InvalidBarCodeConvenioError';
  }
}

export default InvalidBarCodeConvenioError;
