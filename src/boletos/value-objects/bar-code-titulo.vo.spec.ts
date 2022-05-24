import InvalidBarCodeTituloError from '../errors/invalid-bar-code-titulo.error';
import InvalidBarCodeError from '../errors/invalid-bar-code.error';
import BarCodeTitulo from './bar-code-titulo.vo';

describe('BarCodeTitulo Unit Tests', () => {
  it('should throw error when BarCode is invalid', () => {
    expect(() => new BarCodeTitulo('')).toThrow(new InvalidBarCodeError());
    expect(() => new BarCodeTitulo(null)).toThrow(new InvalidBarCodeError());
    expect(() => new BarCodeTitulo(undefined)).toThrow(
      new InvalidBarCodeError(),
    );
    expect(() => new BarCodeTitulo('17236186424hhh22831')).toThrow(
      new InvalidBarCodeError(),
    );
    expect(() => new BarCodeTitulo('1'.repeat(43))).toThrow(
      new InvalidBarCodeError(),
    );
    expect(() => new BarCodeTitulo('1'.repeat(45))).toThrow(
      new InvalidBarCodeError(),
    );
    expect(() => new BarCodeTitulo('1t'.repeat(23))).toThrow(
      new InvalidBarCodeError(),
    );
  });

  it('should throw error when BarCodeTitulo is invalid', () => {
    expect(() => new BarCodeTitulo('2'.repeat(44))).toThrow(
      new InvalidBarCodeTituloError(),
    );
    expect(() => new BarCodeTitulo('5678'.repeat(11))).toThrow(
      new InvalidBarCodeTituloError(),
    );
  });

  it('should be valid when BarCode is valid', () => {
    expect(
      () => new BarCodeTitulo('21299758700000020000001121100012100447561740'),
    ).not.toThrow(new InvalidBarCodeError());
    expect(
      () => new BarCodeTitulo('00193373700000001000500940144816060680935031'),
    ).not.toThrow(new InvalidBarCodeError());
  });
});
