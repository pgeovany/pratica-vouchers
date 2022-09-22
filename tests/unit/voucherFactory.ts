import { faker } from '@faker-js/faker';

function voucherFactory() {
  return {
    code: faker.random.alphaNumeric(32),
    discount: Number(faker.finance.amount(1, 100, 0)),
  };
}

export default voucherFactory;
