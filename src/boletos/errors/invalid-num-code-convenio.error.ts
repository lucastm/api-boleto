import InvalidNumCodeError from './invalid-num-code.error';

export class InvalidNumCodeConvenioError extends InvalidNumCodeError {
  constructor(message?: string) {
    super(message || 'Code must be a valid NumCodeConvenio');
    this.name = 'InvalidNumCodeConvenioError';
  }
}

export default InvalidNumCodeConvenioError;
