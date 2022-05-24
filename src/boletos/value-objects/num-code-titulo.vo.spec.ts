import InvalidNumCodeTituloError from '../errors/invalid-num-code-titulo.error';
import InvalidNumCodeError from '../errors/invalid-num-code.error';
import NumCodeTitulo from './num-code-titulo.vo';

describe('NumCodeTitulo Unit Tests', () => {
  it('should throw error when NumCode is invalid', () => {
    expect(() => new NumCodeTitulo('')).toThrow(new InvalidNumCodeError());
    expect(() => new NumCodeTitulo(null)).toThrow(new InvalidNumCodeError());
    expect(() => new NumCodeTitulo(undefined)).toThrow(
      new InvalidNumCodeError(),
    );
    expect(() => new NumCodeTitulo('17236186424hhh22831')).toThrow(
      new InvalidNumCodeError(),
    );
    expect(() => new NumCodeTitulo('1'.repeat(46))).toThrow(
      new InvalidNumCodeError(),
    );
    expect(() => new NumCodeTitulo('1'.repeat(48))).toThrow(
      new InvalidNumCodeError(),
    );
    expect(() => new NumCodeTitulo('1t'.repeat(25))).toThrow(
      new InvalidNumCodeError(),
    );
  });

  it('should throw error when NumCodeTitulo is invalid', () => {
    expect(() => new NumCodeTitulo('2'.repeat(47))).toThrow(
      new InvalidNumCodeTituloError(),
    );
    expect(() => new NumCodeTitulo('5678'.repeat(11) + '123')).toThrow(
      new InvalidNumCodeTituloError(),
    );
  });

  it('should be valid when NumCode is valid', () => {
    const t1 = () =>
      new NumCodeTitulo('21290001192110001210904475617405975870000002000');
    expect(t1).not.toThrow(new InvalidNumCodeError());
    expect(t1).not.toThrow(new InvalidNumCodeTituloError());
    const t2 = () =>
      new NumCodeTitulo('00190500954014481606906809350314337370000000100');
    expect(t2).not.toThrow(new InvalidNumCodeError());
    expect(t2).not.toThrow(new InvalidNumCodeTituloError());
  });
});
