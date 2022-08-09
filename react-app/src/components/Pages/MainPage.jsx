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
      <Box>
        <Outlet />
      </Box>
    </Box>
  </>
);

export default MainPage;

