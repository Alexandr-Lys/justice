import axios from 'axios';

export const createWalletData = async (amount, currencyName, userId, operation) => {
  let currency = currencyName;
  if (currencyName === 'USD') currency = 'USDT';

  await axios.patch(
    `${process.env.REACT_APP_HOST}/wallet/${userId}`,
    {
      amount,
      operation,
      userId,
      currencyName: currency,
    },
  )
    .then((response) => response.data);
};

export const updateWalletPay = async (give, get, giveCurrency, getCurrency, userId) => {
  await createWalletData(give, giveCurrency, userId, 0);
  await createWalletData(get, getCurrency, userId, 1);
};
