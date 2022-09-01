import axios from 'axios';
import jwtDecode from 'jwt-decode';

const host = process.env.REACT_APP_HOST;

export const loginUser = async (data) => {
  const login = await axios.post(
    `http://${host}/api/auth/login`,
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
        emailError: login.data.message,
      };
    case 401:
      return {
        passwordError: login.data.message,
      };
    default:
      return {
        token: login,
        email: jwtDecode(login).email,
        userId: jwtDecode(login).userId,
      };
  }
};
export const registerUser = async (data) => {
  const register = await axios.post(
    `http://${host}/api/auth/register`,
    {
      email: data.email,
      password: data.password,
      name: data.name,
    },
  )
    .then((response) => response)
    .catch((err) => err.response);
  console.log(register);
  if (register.status === 409) {
    return {
      errorEmail: register.data.message,
    };
  }
  return register;
};
