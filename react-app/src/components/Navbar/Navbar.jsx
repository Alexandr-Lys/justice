import React, { useState } from 'react';
import { Box, Container } from '@mui/material';

import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { ReactComponent as User } from '../../assets/svg/User.svg';
import MetaMask from '../MetaMask/MetaMask';

const Navbar = () => {
  const [openMeta, setOpenMeta] = useState(null);
  const handleClick = (event) => {
    setOpenMeta(event.currentTarget);
  };
  return (
    <Box sx={{
      backgroundColor: 'transparent',
      maxWidth: 1440,
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }}
    >
      <Container sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: '16px 48px 16px 32px',
        maxWidth: '1440px !important',
      }}
      >
        <Logo />
        <MetaMask openMeta={openMeta} setOpenMeta={setOpenMeta} />
        <User onClick={handleClick} />
      </Container>
    </Box>

  );
};

export default Navbar;
