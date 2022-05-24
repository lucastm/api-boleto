export class InvalidBarCodeError extends Error {
  constructor(message?: string) {
    super(message || 'Code must be a valid BarCode');
    this.name = 'InvalidBarCodeError';
  }
}

export default InvalidBarCodeError;
