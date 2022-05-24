import InvalidNumCodeError from './invalid-num-code.error';

export class InvalidNumCodeTituloError extends InvalidNumCodeError {
  constructor(message?: string) {
    super(message || 'Code must be a valid NumCodeTitulo');
    this.name = 'InvalidNumCodeTituloError';
  }
}

export default InvalidNumCodeTituloError;
