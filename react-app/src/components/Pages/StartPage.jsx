import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import ButtonComponent from '../Buttons/ButtonComponent';

import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { ReactComponent as Currency } from '../../assets/svg/Currency.svg';

const StartPage = () => (
  <Box sx={{
    backgroundImage: 'url(img/BG.svg)',
    width: '1440px',
    height: '900px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& a': {
      textDecoration: 'none !important',
    },
  }}
  >
    <Container sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      p: '16px 112px !important',
      maxWidth: '1440px !important',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }}
    >
      <Logo />
      <Link to="/login">
        <ButtonComponent label="Войти" color="secondary" size="small" />
      </Link>
    </Container>
    <Typography
      variant="h3"
      component="h1"
      color="secondary.contrastText"
      sx={{
        width: '1008px',
        textAlign: 'center',
      }}
    >
      Присоединяйтесь к лучшей криптовалютной бирже
    </Typography>
    <Link to="/login">
      <ButtonComponent label="Начать торговать" color="primary" size="large" />
    </Link>
    <Currency style={{ backdropFilter: 'blur(37px)', borderRadius: '8px' }} />
  </Box>
);

export default StartPage;
