import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { schemaValidationRefill } from '../../form/formValidation';
import { refillPageStepOneStyles, refillPageStepTwoStyles, refillPageStyles } from '../Pages/MuiStyles';
import Navbar from '../Navbar/Navbar';
import ButtonComponent from '../Buttons/ButtonComponent';
import Select from '../Select/Select';
import RadioButton from '../Buttons/RadioButton';
import InputComponent from '../Inputs/InputComponent';
import ModalComponent from '../ModalComponent/ModalComponent';
import StepperComponent from '../Stepper/StepperComponent';

import USD from '../../assets/svg/criptorrency/CurrencyUSD.svg';
import RUB from '../../assets/svg/criptorrency/CurrencyRUB.svg';

const Output = () => {
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
  const cryptoCurrencyList = useSelector((state) => state.currency);

  const navigate = useNavigate();

  const [amount, setAmount] = useState(0);
  const [cryptoCurrencyValue, setCryptoCurrencyValue] = useState(cryptoCurrencyList[0]);
  const [cryptoCurrencyInput, setCryptoCurrencyInput] = useState('BTC');
  const [imageCryptoCurrency, setImageCryptoCurrency] = useState(cryptoCurrencyList[0]?.img);

  const [currencyValue, setCurrencyValue] = useState(currencyList[0]);
  const [currencyInput, setCurrencyInput] = useState('RUB');
  const [imageCurrency, setImageCurrency] = useState(currencyList[0]?.img);

  const transfer = useMemo(() => {
    const currencyData = cryptoCurrencyList.find((currency) => cryptoCurrencyInput === currency.shortName);
    return currencyData.price.replace(/\D/gi, '') * amount;
  }, [amount]);

  const [modalOpen, setModalOpen] = useState(false);

  const { handleSubmit, control, watch } = useForm({
    mode: 'all',
    resolver: yupResolver(schemaValidationRefill),
  });
  const { errors } = useFormState({ control });
  const watchForm = watch(['cardNumber', 'cardUser']);

  const onSubmit = () => {
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
          <Typography variant="h2" component="h1">Вывод криптовалюты</Typography>
          <ButtonComponent
            color="secondary"
            label="Вернуться назад"
            onClick={handleBack}
          />
        </Box>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            {activeStep === 0
              ? (
                <Box sx={refillPageStepOneStyles}>
                  <Typography variant="title" component="h2">Выберите монету которую хотите вывести</Typography>
                  <Typography variant="subtitle" component="h3">Монета</Typography>
                  <Select
                    autoFocus
                    name="amount"
                    control={control}
                    errorText={errors?.amount?.message}
                    placeholder="Кол-во"
                    currencyList={cryptoCurrencyList}
                    defaultValue={cryptoCurrencyList[1]}
                    image={imageCryptoCurrency}
                    setAutocompleteValue={setCryptoCurrencyValue}
                    setAutocompleteInput={setCryptoCurrencyInput}
                    autocompleteValue={cryptoCurrencyValue}
                    autocompleteInput={cryptoCurrencyInput}
                    setImage={setImageCryptoCurrency}
                    setAmount={setAmount}
                    typeSelect="validation"
                  />
                  <Typography variant="subtitle" component="h3">Валюта</Typography>
                  <Select
                    typeSelect="disabledInput"
                    currencyList={currencyList}
                    defaultValue={currencyList[0]}
                    setAutocompleteValue={setCurrencyValue}
                    setAutocompleteInput={setCurrencyInput}
                    autocompleteValue={currencyValue}
                    autocompleteInput={currencyInput}
                    setImage={setImageCurrency}
                    image={imageCurrency}
                    value={transfer}
                    placeholderStyle={{
                      '& input.Mui-disabled': {
                        textFillColor: '#FFFFFF',
                      },
                    }}
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
              : activeStep === 1
                ? (
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
                      color="primary"
                      label="Пополнить кошелек"
                      onClick={handleNext}
                    />
                  </Box>
                )
                : (
                  <Box sx={refillPageStepTwoStyles}>
                    <Typography variant="title" component="h2">Подтверждение перевода</Typography>
                    <InputComponent
                      disabled
                      label="Номер карты"
                      value={watchForm[0]}
                    />
                    <InputComponent
                      disabled
                      label="Владелец карты"
                      value={watchForm[1]}
                    />
                    <Box>
                      <Typography variant="subtitle" component="h3">Валюта</Typography>
                      <Select
                        disabled
                        typeSelect="disabled"
                        autocompleteInput={currencyList[0].shortName}
                        image={currencyList[0].img}
                        value={transfer}
                      />
                    </Box>
                    <ButtonComponent
                      onClick={() => setModalOpen(true)}
                      type="submit"
                      color="primary"
                      label="Подтвердить"
                    />
                  </Box>
                )}
          </form>
          <ModalComponent open={modalOpen} onClose={handleClose} />
          <StepperComponent activeStep={activeStep} />
        </Box>
      </Box>
    </Box>
  );
};

export default Output;
