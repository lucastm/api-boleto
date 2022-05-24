import InvalidNumCodeError from '../errors/invalid-num-code.error';
import NumCodeConvenio from './num-code-convenio.vo';

describe('NumCodeConvenio Unit Tests', () => {
  it('should throw error when NumCode is invalid', () => {
    expect(() => new NumCodeConvenio('')).toThrow(new InvalidNumCodeError());
    expect(() => new NumCodeConvenio(null)).toThrow(new InvalidNumCodeError());
    expect(() => new NumCodeConvenio(undefined)).toThrow(
      new InvalidNumCodeError(),
    );
    expect(() => new NumCodeConvenio('17236186424hhh22831')).toThrow(
      new InvalidNumCodeError(),
    );
    expect(() => new NumCodeConvenio('1'.repeat(46))).toThrow(
      new InvalidNumCodeError(),
    );
    expect(() => new NumCodeConvenio('1'.repeat(48))).toThrow(
      new InvalidNumCodeError(),
    );
    expect(() => new NumCodeConvenio('1t'.repeat(25))).toThrow(
      new InvalidNumCodeError(),
    );
  });

  it('should be valid when NumCode is valid', () => {
    expect(() => new NumCodeConvenio('1'.repeat(47))).not.toThrow(
      new InvalidNumCodeError(),
    );
    expect(() => new NumCodeConvenio('1234'.repeat(11) + '123')).not.toThrow(
      new InvalidNumCodeError(),
    );
    expect(
      () =>
        new NumCodeConvenio('21290001192110001210904475617405975870000002000'),
    ).not.toThrow(new InvalidNumCodeError());
  });
});
