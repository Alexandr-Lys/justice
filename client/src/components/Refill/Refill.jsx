import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFormState } from 'react-hook-form';
import {
  Box, Typography,
} from '@mui/material';

import Navbar from '../Navbar/Navbar';
import { refillPageStepOneStyles, refillPageStepTwoStyles, refillPageStyles } from '../Pages/MuiStyles';
import ButtonComponent from '../Buttons/ButtonComponent';
import Select from '../Select/Select';
import RadioButton from '../Buttons/RadioButton';
import ModalComponent from '../ModalComponent/ModalComponent';
import InputComponent from '../Inputs/InputComponent';
import { schemaValidationRefill } from '../../form/formValidation';
import StepperComponent from '../Stepper/StepperComponent';

import RUB from '../../assets/svg/criptorrency/CurrencyRUB.svg';
import USD from '../../assets/svg/criptorrency/CurrencyUSD.svg';
import { createWalletData } from '../../api/wallet';

const Refill = () => {
  const userId = window.localStorage.getItem('userId');
  const currencyList = [
    {
      name: 'currencyBox',
      total: 0,
      totalOrder: 0,
      available: 0,
      availableOrder: 0,
      output: 'outputButton',
      shortName: 'RUB',
      fullName: 'Russian Ruble',
      img: RUB,
    },
    {
      name: 'currencyBox',
      total: 0,
      totalOrder: 0,
      available: 0,
      availableOrder: 0,
      output: 'outputButton',
      shortName: 'USD',
      fullName: 'American dollar',
      img: USD,
    },
  ];
  const navigate = useNavigate();
  const [controlValue, setControlValue] = useState(currencyList[0]);
  const [controlInput, setControlInput] = useState('RUB');
  const [imageControl, setImageControl] = useState(currencyList[0]?.img);

  const [modalOpen, setModalOpen] = useState(false);
  const { handleSubmit, control } = useForm({
    mode: 'all',
    resolver: yupResolver(schemaValidationRefill),
  });
  const { errors } = useFormState({ control });

  const onSubmit = async (data) => {
    console.log([Number(data.amount), controlInput, userId]);
    await createWalletData(Number(data.amount), controlInput, userId, 1);
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
    navigate('/admin/wallet');
  };
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => (activeStep === 0
    ? navigate('/admin/wallet')
    : setActiveStep(activeStep - 1)
  );
  return (
    <Box sx={refillPageStyles}>
      <Navbar />
      <Box>
        <Box>
          <Typography variant="h2" component="h1">Пополнение</Typography>
          <ButtonComponent
            color="secondary"
            label="Вернуться назад"
            onClick={handleBack}
          />
        </Box>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            { activeStep === 0
              ? (
                <Box sx={refillPageStepOneStyles}>
                  <Typography variant="title" component="h2">Выберите валюту для пополнения</Typography>
                  <Typography variant="subtitle" component="h3">Валюта</Typography>
                  <Select
                    autoFocus
                    name="amount"
                    control={control}
                    errorText={errors?.amount?.message}
                    placeholder="Кол-во"
                    currencyList={currencyList}
                    defaultValue={currencyList[0]}
                    image={imageControl}
                    setAutocompleteValue={setControlValue}
                    setAutocompleteInput={setControlInput}
                    autocompleteValue={controlValue}
                    autocompleteInput={controlInput}
                    setImage={setImageControl}
                    typeSelect="validation"
                  />
                  <RadioButton text="Банковская карта (Mastercard)" />
                  <ButtonComponent
                    disabled={errors?.amount?.message}
                    color="primary"
                    label="Продолжить"
                    onClick={handleNext}
                  />
                </Box>
              )
              : (
                <Box sx={refillPageStepTwoStyles}>
                  <Typography variant="title" component="h2">Введите данные для пополнения</Typography>
                  <InputComponent
                    autoFocus
                    control={control}
                    label="Номер карты"
                    name="cardNumber"
                    errorText={errors?.cardNumber?.message}
                  />
                  <InputComponent
                    control={control}
                    label="Дата"
                    name="date"
                    errorText={errors?.date?.message}
                  />
                  <InputComponent
                    control={control}
                    label="CVC"
                    name="cvc"
                    errorText={errors?.cvc?.message}
                  />
                  <InputComponent
                    control={control}
                    label="Владелец карты"
                    name="cardUser"
                    errorText={errors?.cardUser?.message}
                  />
                  <ButtonComponent
                    type="submit"
                    color="primary"
                    label="Пополнить кошелек"
                  />
                </Box>
              )}
          </form>
          <ModalComponent open={modalOpen} onClose={handleClose} variant />
          <StepperComponent activeStep={activeStep} />
        </Box>
      </Box>
    </Box>
  );
};

export default Refill;
