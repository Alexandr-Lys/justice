import axios from 'axios';

export const addPayHistory = async (give, get, giveCurrency, getCurrency, time, userId) => {
  await axios.post(
    `http://${process.env.REACT_APP_HOST}/api/history/`,
    {
      give, get, giveCurrency, getCurrency, time, userId,
    },
  )
    .then((response) => response.data);
};
