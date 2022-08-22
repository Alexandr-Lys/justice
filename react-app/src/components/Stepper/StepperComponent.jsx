import React from 'react';
import {
  Box, Step, StepLabel, Stepper, Typography,
} from '@mui/material';

const StepperComponent = (props) => {
  const steps = [
    {
      label: 'Выбор валюты',
      description: 'Выберите подходящую вам валюту',
    },
    {
      label: 'Проверка',
      description:
        'Пройдите проверку персональных данных',
    },
    {
      label: 'Пополнение',
      description:
        'После заполнения всех полей деньги поступят на счет',
    },
  ];
  return (
    <Stepper {...props} orientation="vertical">
      {steps.map((step) => (
        <Step key={step.label}>
          <StepLabel>
            <Box>
              <Typography variant="title">{step.label}</Typography>
              <Typography variant="subtitle">{step.description}</Typography>
            </Box>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
