import * as yup from 'yup';

export const schemaValidationRegister = yup.object({
  name: yup.string().required('Имя не указано'),
  email: yup.string().email('Email не валиден').required('Email не указан'),
  password: yup.string().required('Пароль не указан')
    .min(6, 'Минимальная длина пароля 6 символов')
    .matches(/[A-Z]+/, 'Пароль должен содержать минимум одну заглавную букву'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});
export const schemaValidationLogin = yup.object({
  email: yup.string().email('Email не валиден').required('Email не указан'),
  password: yup.string().required('Пароль не указан')
    .min(6, 'Минимальная длина пароля 6 символов')
    .matches(/[A-Z]+/, 'Пароль должен содержать минимум одну заглавную букву'),
});
export const schemaValidationProfile = yup.object({
  name: yup.string().required('Имя не указано'),
  email: yup.string().email('Email не валиден').required('Email не указан'),
  location: yup
    .object()
    .default(null)
    .nullable()
    .shape({
      country: yup.string().required(),
      state: yup.string().required(),
      city: yup.string().required(),
    }),
  phoneNumber: yup.string()
    .matches(
      /^((\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Неверный формат',
    ),
});
export const schemaValidationPassword = yup.object({
  oldPass: yup.string().required('Пароль не указан')
    .min(6, 'Минимальная длина пароля 6 символов')
    .matches(/[A-Z]+/, 'Пароль должен содержать минимум одну заглавную букву'),
  newPass: yup.string().required('Пароль не указан')
    .min(6, 'Минимальная длина пароля 6 символов')
    .matches(/[A-Z]+/, 'Пароль должен содержать минимум одну заглавную букву')
    .oneOf([yup.ref('oldPass'), null], 'Новый пароль совпадает со старым'),
  confirmPass: yup.string()
    .oneOf([yup.ref('newPass'), null], 'Пароли не совпадают'),
});

export const schemaValidationRefill = yup.object({
  cardNumber: yup.string().required('Номер карты не указан'),
  date: yup.string().required('Дата не указана'),
  cvc: yup.string().required('Код не указан'),
  cardUser: yup.string().required('Владелец не указан'),
  amount: yup.string().required('Количество не валидно'),
});

