import * as yup from 'yup';

export const schemaValidation = yup.object({
  name: yup.string().required('Имя не указано'),
  email: yup.string().email('Email не валиден').required('Email не указан'),
  password: yup.string().required('Пароль не указан')
    .min(6, 'Минимальная длина пароля 6 символов')
    .matches(/[A-Z]+/, 'Пароль должен содержать минимум одну заглавную букву'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

