import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { MetaMaskProvider } from 'metamask-react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const MainPage = () => (
  <MetaMaskProvider>
    <Navbar />
    <Box sx={{
      display: 'flex',
    }}
    >
      <Sidebar />
      <Box sx={{
        width: '1201px',
      }}
      >
        <Outlet />
      </Box>
    </Box>
  </MetaMaskProvider>
);

export default MainPage;

