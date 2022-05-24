import { isNotEmpty, isNumberString, length } from 'class-validator';
import InvalidNumCodeError from '../errors/invalid-num-code.error';

export abstract class NumCode {
  readonly code?: string;

  constructor(code?: string) {
    this.code = code;
    this.validate();
  }

  validate() {
    const codeIsNotEmpty = isNotEmpty(this.code);
    const codeIsNumberString = isNumberString(this.code);
    const codeIsOfValidLength = length(this.code, 47, 47);
    const isValid = [
      codeIsNotEmpty,
      codeIsNumberString,
      codeIsOfValidLength,
    ].every((i) => i);
    if (!isValid) {
      throw new InvalidNumCodeError();
    }
  }
}

export default NumCode;
