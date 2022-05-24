import { isNotEmpty, isNumberString, length } from 'class-validator';
import InvalidBarCodeError from '../errors/invalid-bar-code.error';

export abstract class BarCode {
  readonly code?: string;

  constructor(code?: string) {
    this.code = code;
    this.validate();
  }

  validate() {
    const codeIsNotEmpty = isNotEmpty(this.code);
    const codeIsNumberString = isNumberString(this.code);
    const codeIsOfValidLength = length(this.code, 44, 44);
    const isValid = [
      codeIsNotEmpty,
      codeIsNumberString,
      codeIsOfValidLength,
    ].every((i) => i);
    if (!isValid) {
      throw new InvalidBarCodeError();
    }
  }
}

export default BarCode;
