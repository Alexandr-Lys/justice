import axios from 'axios';

const getTime = () => {
  const date = new Date();
  const dateString = date.toLocaleDateString().split('.').reverse().join('.');
  const timeString = date.toLocaleTimeString().slice(0, -3);
  return `${dateString} / ${timeString}`;
};
export const createPayHistory = async (give, get, giveCurrency, getCurrency, userId) => {
  const time = getTime();
  await axios.post(
    `${process.env.REACT_APP_API}/history/`,
    {
      give, get, giveCurrency, getCurrency, time, userId,
    },
  )
    .then((response) => response.data);
};
