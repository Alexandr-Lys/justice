import React from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import InputComponent from '../Inputs/InputComponent';
import ButtonComponent from '../Buttons/ButtonComponent';
import { mainStyles, registerPageStyles } from './MuiStyles';
import { ReactComponent as GoogleIcon } from '../../assets/icons/GoogleIcon.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icons/GitHubIcon.svg';
import { ReactComponent as IllustrationLogin } from '../../assets/svg/IllustrationLogin.svg';

const RegisterPage = () => {
  const {
    handleSubmit,
    control,
    watch,
    getValues,
  } = useForm();
  const navigate = useNavigate();
  const { errors } = useFormState({ control });
  const onSubmit = (data) => {
    console.log(data);
    navigate('/login');
  };
  const REQUIRED_FIELD = 'Обязательно к заполнению';
  const emailValidation = {
    required: REQUIRED_FIELD,
  };
  const passwordValidation = {
    required: REQUIRED_FIELD,
  };
  const confirmPasswordValidation = {
    required: REQUIRED_FIELD,
    validate: (value) => value === getValues('password') || 'Пароли не совпадают',
  };
  const nameValidation = {
    required: REQUIRED_FIELD,
  };

  return (
    <Box sx={{ ...mainStyles, ...registerPageStyles }}>
      <Box>
        <Typography
          variant="h2"
          component="h1"
        >
          Регистрация
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
              label="Имя"
              name="name"
              control={control}
              errorText={errors?.name?.message}
              validation={nameValidation}
            />
            <InputComponent
              label="E-mail"
              name="email"
              control={control}
              errorText={errors?.email?.message}
              validation={emailValidation}
            />
            <Box>
              <InputComponent
                label="Пароль"
                name="password"
                control={control}
                watcher={watch}
                errorText={errors?.password?.message}
                validation={passwordValidation}
              />
              <InputComponent
                label="Подтвердите пароль"
                name="confirmPassword"
                control={control}
                errorText={errors?.confirmPassword?.message}
                validation={confirmPasswordValidation}
              />
            </Box>
            <ButtonComponent label="Зарегистрироваться" color="secondary" type="submit" />
            <Box>
              <Typography variant="body2">
                У вас уже есть учетная запись?
                <Link to="/register"> Авторизоваться</Link>
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

export default RegisterPage;
