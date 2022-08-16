import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';

import InputComponent from '../../Inputs/InputComponent';
import ButtonComponent from '../../Buttons/ButtonComponent';
import UserCard from '../../UserCard/UserCard';
import { schemaValidationPassword, schemaValidationProfile } from '../../../form/formValidation';
import { profilePageStyles } from '../MuiStyles';

const ProfilePage = () => {
  const profileForm = useForm({ reValidateMode: 'onSubmit', resolver: yupResolver(schemaValidationProfile) });
  const passwordForm = useForm({ reValidateMode: 'onSubmit', resolver: yupResolver(schemaValidationPassword) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box sx={profilePageStyles}>
      <Box>
        <Box>
          <Typography variant="h2" component="h1">Мой профиль</Typography>
          <form onSubmit={profileForm.handleSubmit(onSubmit)}>
            <InputComponent
              label="Имя"
              name="name"
              control={profileForm.control}
              errorText={profileForm.formState.errors?.name?.message}
              validation
            />
            <InputComponent
              label="E-mail"
              name="email"
              control={profileForm.control}
              errorText={profileForm.formState.errors?.email?.message}
              validation
            />
            <InputComponent
              label="Город"
              name="location"
              control={profileForm.control}
              errorText={profileForm.formState.errors?.location?.message}
              validation
            />
            <InputComponent
              label="Дата рождения"
              name="dob"
              control={profileForm.control}
              errorText={profileForm.formState.errors?.dob?.message}
              validation
            />
            <InputComponent
              type="tel"
              label="Номер телефона"
              name="phoneNumber"
              control={profileForm.control}
              errorText={profileForm.formState.errors?.phoneNumber?.message}
              validation
            />
            <ButtonComponent label="Сохранить изменения" color="primary" type="submit" />
          </form>
          <Typography variant="title" component="h2">Пароль</Typography>
          <form onSubmit={passwordForm.handleSubmit(onSubmit)}>
            <InputComponent
              type="password"
              label="Введите старый пароль"
              name="oldPass"
              control={passwordForm.control}
              errorText={passwordForm.formState.errors?.oldPass?.message}
              validation
            />
            <InputComponent
              type="password"
              label="Введите новый пароль"
              name="newPass"
              control={passwordForm.control}
              errorText={passwordForm.formState.errors?.newPass?.message}
              validation
            />
            <InputComponent
              type="password"
              label="Повторите новый пароль"
              name="confirmPass"
              control={passwordForm.control}
              errorText={passwordForm.formState.errors?.confirmPass?.message}
              validation
            />
            <ButtonComponent label="Изменить пароль" color="primary" type="submit" />
          </form>
        </Box>
      </Box>
      <UserCard userName="Алексей Новиков" />
    </Box>
  );
};
export default ProfilePage;
