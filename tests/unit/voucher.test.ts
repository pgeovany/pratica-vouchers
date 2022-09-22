import voucherRepository from '../../src/repositories/voucherRepository';
import voucherService from '../../src/services/voucherService';
import voucherFactory from './voucherFactory';

describe('Test createVoucher function', () => {
  it('Should successfully create a voucher given valid params', async () => {
    const voucher = voucherFactory();
    jest
      .spyOn(voucherRepository, 'getVoucherByCode')
      .mockImplementationOnce(null);

    jest.spyOn(voucherService, 'createVoucher').mockImplementationOnce(null);
  });

  it('Should failt to create a voucher with a repeated voucher code', async () => {
    const voucher = voucherFactory();

    jest.spyOn(voucherRepository, 'createVoucher').mockResolvedValueOnce({
      id: 1,
      code: voucher.code,
      discount: voucher.discount,
      used: false,
    });
  });
});
