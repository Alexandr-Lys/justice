import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const MainPage = () => (
  <>
    <Navbar />
    <Box sx={{
      display: 'flex',
    }}
    >
      <Sidebar />
      <Box sx={{
        width: '100%',
        // marginX: '48px',
        height: '100vh',
      }}
      >
        <Outlet />
      </Box>
    </Box>
  </>
);

export default MainPage;

