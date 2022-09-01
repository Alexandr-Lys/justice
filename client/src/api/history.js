import axios from 'axios';

export const addPayHistory = async (give, get, giveCurrency, getCurrency, time, userId) => {
  console.log({
    give, get, giveCurrency, getCurrency, time, userId,
  });
  await axios.post(
    `http://${process.env.REACT_APP_HOST}/api/history/create`,
    {
      give, get, giveCurrency, getCurrency, time, userId,
    },
  )
    .then((response) => response.data);
};
