import axios from 'axios';

export const loginUser = async (data) => {
  const login = await axios.post(
    'http://localhost:8080/api/auth/login',
    {
      email: data.email,
      password: data.password,
    },
  )
    .then((response) => response.data.token)
    .catch((err) => err.response);
  switch (login.status) {
    case 404:
      return {
        email: login.data.message,
      };
    case 401:
      return {
        password: login.data.message,
      };
    default:
      return login;
  }
};
export const registerUser = async (data) => {
  const register = await axios.post(
    'http://localhost:8080/api/auth/register',
    {
      email: data.email,
      password: data.password,
      name: data.name,
    },
  )
    .then((response) => response.data)
    .catch((err) => err.response);
  if (register.status) {
    return register.data.message;
  }
  return register;
};
