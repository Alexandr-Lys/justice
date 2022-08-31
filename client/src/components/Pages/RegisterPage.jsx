import React, { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import InputComponent from '../Inputs/InputComponent';
import ButtonComponent from '../Buttons/ButtonComponent';
import { mainStyles, registerPageStyles } from './MuiStyles';
import { schemaValidationRegister } from '../../form/formValidation';

import { ReactComponent as GoogleIcon } from '../../assets/icons/GoogleIcon.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icons/GitHubIcon.svg';
import { ReactComponent as IllustrationLogin } from '../../assets/svg/IllustrationLogin.svg';
import { registerUser } from '../../api/auth';

const RegisterPage = () => {
  const {
    handleSubmit,
    control,
    watch,
  } = useForm({ reValidateMode: 'onSubmit', resolver: yupResolver(schemaValidationRegister) });
  const navigate = useNavigate();
  const { errors } = useFormState({ control });
  const [registerError, setRegisterError] = useState('');
  const onSubmit = async (data) => {
    const userData = await registerUser(data);
    if (typeof userData === 'string') {
      setRegisterError(`${userData}`);
    } else {
      navigate('/login');
    }
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
              validation
            />
            <InputComponent
              label="E-mail"
              name="email"
              control={control}
              errorText={errors?.email?.message || registerError}
              validation
            />
            <Box>
              <InputComponent
                type="password"
                label="Пароль"
                name="password"
                control={control}
                watcher={watch}
                errorText={errors?.password?.message}
                validation
              />
              <InputComponent
                type="password"
                label="Подтвердите пароль"
                name="confirmPassword"
                control={control}
                errorText={errors?.confirmPassword?.message}
                validation
              />
            </Box>
            <ButtonComponent label="Зарегистрироваться" color="secondary" type="submit" />
            <Box>
              <Typography variant="body2">
                У вас уже есть учетная запись?
                <Link to="/login"> Авторизоваться</Link>
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
