import React from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import InputComponent from '../Inputs/InputComponent';
import ButtonComponent from '../Buttons/ButtonComponent';
import CheckboxComponent from '../Checkbox/CheckboxComponent';
import { loginPageStyles, mainStyles } from './MuiStyles';

import { ReactComponent as GoogleIcon } from '../../assets/icons/GoogleIcon.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icons/GitHubIcon.svg';
import { ReactComponent as IllustrationLogin } from '../../assets/svg/IllustrationLogin.svg';

const LoginPage = () => {
  const { handleSubmit, control } = useForm();
  const { errors } = useFormState({ control });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/admin/markets');
  };

  const validationEmail = {
    required: 'Обязательно к заполнению',
  };
  const validationPassword = {
    required: 'Обязательно к заполнению',
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
              errorText={errors?.email?.message}
              validation={validationEmail}
            />
            <InputComponent
              type="password"
              label="Пароль"
              name="password"
              control={control}
              errorText={errors?.password?.message}
              validation={validationPassword}
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

