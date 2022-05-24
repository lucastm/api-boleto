import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidNumCodeError extends HttpException {
  constructor(message?: string) {
    super(message || 'Code must be a valid NumCode', HttpStatus.BAD_REQUEST);
    this.name = 'InvalidNumCodeError';
  }
}

export default InvalidNumCodeError;
