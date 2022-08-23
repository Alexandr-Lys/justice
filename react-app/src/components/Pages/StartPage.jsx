import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import ButtonComponent from '../Buttons/ButtonComponent';

import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { ReactComponent as Currency } from '../../assets/svg/Currency.svg';
import BG from '../../assets/svg/startPage/BG.svg';
import CircleBig from '../../assets/svg/startPage/EllipseBig.svg';
import CircleSmall from '../../assets/svg/startPage/EllipseSmall.svg';

const StartPage = () => (
  <Box sx={{
    background: `url(${BG})`,
    width: '1440px',
    height: '900px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflowY: 'hidden',
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
      variant="h1"
      component="h1"
      sx={{
        width: '1008px',
        textAlign: 'center',
        m: '148px 0 48px',
      }}
    >
      Присоединяйтесь к лучшей криптовалютной бирже
    </Typography>
    <Link to="/login">
      <ButtonComponent label="Начать торговать" color="primary" size="large" />
    </Link>
    <Box sx={{
      borderRadius: '8px',
      '&::before': {
        content: `url(${CircleBig})`,
        position: 'relative',
        top: '85px',
        right: '55px',
      },
      '&::after': {
        content: `url(${CircleSmall})`,
        position: 'relative',
        bottom: '240px',
        left: '985px',
        zIndex: 2,
      },
    }}
    >
      <Box sx={{
        backdropFilter: 'blur(37px)',
        borderTop: '10px solid #ffffff17',
        borderLeft: '10px solid #ffffff17',
        borderRight: '10px solid #ffffff17',
        borderRadius: '17px',
        position: 'relative',
        zIndex: '2',
      }}
      >
        <Currency />
      </Box>
    </Box>
  </Box>
);

export default StartPage;
