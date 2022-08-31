import React, { useEffect, useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import InputComponent from '../Inputs/InputComponent';
import ButtonComponent from '../Buttons/ButtonComponent';
import CheckboxComponent from '../Checkbox/CheckboxComponent';
import { loginPageStyles, mainStyles } from './MuiStyles';
import { schemaValidationLogin } from '../../form/formValidation';
import { loginUser } from '../../api/auth';

import { ReactComponent as GoogleIcon } from '../../assets/icons/GoogleIcon.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icons/GitHubIcon.svg';
import { ReactComponent as IllustrationLogin } from '../../assets/svg/IllustrationLogin.svg';

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      navigate('/admin/markets');
    }
  }, []);

  const { handleSubmit, control } = useForm({
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schemaValidationLogin),
  });
  const { errors } = useFormState({ control });
  const [loginError, setLoginError] = useState({});

  const onSubmit = async (data) => {
    const userToken = await loginUser(data);
    if (userToken.email || userToken.password) {
      setLoginError({
        ...userToken,
      });
    } else {
      window.localStorage.setItem('token', userToken);
      navigate('/admin/markets');
    }
  };
  return (
    <Box sx={{ ...mainStyles, ...loginPageStyles }}>
      <Box>
        <Typography
          variant="h2"
          component="h1"
        >
          Вход
        </Typography>
        <Box>
          <Box>
            <GoogleIcon />
            <Typography>Sing up with Google</Typography>
          </Box>
          <Box>
            <GitHubIcon />
            <Typography>Sing up with GitHub</Typography>
          </Box>
        </Box>

        <Box>
          <hr />
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <InputComponent
              label="E-mail"
              name="email"
              control={control}
              errorText={errors?.email?.message || loginError?.email}
            />
            <InputComponent
              type="password"
              label="Пароль"
              name="password"
              control={control}
              errorText={errors?.password?.message || loginError?.password}
            />
            <CheckboxComponent label="Запомнить меня" name="remember" control={control} />
            <ButtonComponent label="Войти" color="secondary" type="submit" />
            <Box>
              <Typography variant="body2">
                Нет аккаунта?
                <Link to="/register">  Создать аккаунт</Link>
              </Typography>
            </Box>
          </Box>
        </form>

      </Box>

      <Box>
        <IllustrationLogin />
      </Box>
    </Box>
  );
};

export default LoginPage;

