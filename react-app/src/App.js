import './App.css';
import React from 'react';
import {
  ThemeProvider, createTheme, Box,
} from '@mui/material';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import ButtonComponent from './components/Buttons/ButtonComponent';
import CheckboxComponent from './components/Checkbox/CheckboxComponent';
import InputComponent from './components/Inputs/InputComponent';
import Status from './components/Status/Status';
import Select from './components/Select/Select';
import RadioButton from './components/Buttons/RadioButton';
import PaginationComponent from './components/PaginationComponent';
import UserCard from './components/UserCard/UserCard';
import SearchInput from './components/Inputs/SearchInput';
import Modal from './components/ModalComponent/ModalComponent';
import Tag from './components/Tags/Tag';
import Notification from './components/Notification/Notification';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import BTC from './assets/icons/Bitcoin.png';
import ETH from './assets/icons/Etherium.png';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#f50057',
        main: '#6D76F7',
        dark: '#682DFE',
      },
      secondary: {
        main: '#282F39',
        contrastText: '#FFFFFF',
      },
      success: {
        main: '#0ECB81',
      },
      error: {
        light: '#D24242',
        main: '#D24242',

      },
      disabled: {
        main: '#282B30',
        contrastText: '#8C8C8C',
      },
    },
  });

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Box sx={{
            display: 'flex',
          }}
          >
            <Sidebar />
            <Box>
              <Routes>
                <Route path="/" element={<InputComponent type="error" text="good" error="error" />} />
                <Route path="/profile" element={<ButtonComponent color="primary" name="trfdg" size="large" />} />
                <Route
                  path="/convert"
                  element={
                    <CheckboxComponent label="Запомнить меня" type="error" size="small" />
}
                />
                <Route path="/wallet" element={(<UserCard userName="Алексей Иванов" />)} />
                <Route path="/activity" element={(<PaginationComponent quantity={32} />)} />
              </Routes>
              <SearchInput currencyList={[
                { shortName: 'BTC', fullName: 'Bitcoin', img: BTC },
                { shortName: 'ETH', fullName: 'Etherium', img: ETH },
              ]}
              />
              <Status text="Успешно" />
              <Select currencyList={[{ label: 'BTC', img: BTC }, { label: 'ETH', img: ETH }]} />
              <RadioButton />
              <Modal open={false} variant />
              <Tag tagValue="100%" />
              <Notification status="success" size="small" />
            </Box>
          </Box>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
