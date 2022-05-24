import InvalidBarCodeError from './invalid-bar-code.error';

export class InvalidBarCodeTituloError extends InvalidBarCodeError {
  constructor(message?: string) {
    super(message || 'Code must be a valid BarCodeTitulo');
    this.name = 'InvalidBarCodeTituloError';
  }
}

export default InvalidBarCodeTituloError;
