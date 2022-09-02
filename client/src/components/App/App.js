import React from 'react';
import { useDispatch } from 'react-redux';
import { MetaMaskProvider } from 'metamask-react';
import {
  ThemeProvider, createTheme,
} from '@mui/material';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'typeface-inter';

import { Theme } from '../../theme/theme';
import StartPage from '../Pages/StartPage';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import Refill from '../Refill/Refill';
import Output from '../Output/Output';
import { routing } from './routing';
import MainPage from '../Pages/MainPage';
import { getApiDataCurrency } from '../../store/asyncActions/data';
import './App.css';

const App = () => {
  const theme = createTheme(Theme);
  const dispatch = useDispatch();
  getApiDataCurrency(dispatch);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MetaMaskProvider>
          <Router>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/refill" element={<Refill />} />
              <Route path="/output" element={<Output />} />
              <Route
                path="/admin"
                element={(
                  <MainPage />
            )}
              >
                { routing.map((route) => (
                  route.path
                    ? <Route key={route.path} path={route.path} element={route.component} />
                    : <Route key={route.path} index element={route.component} />
                )) }
              </Route>
            </Routes>
          </Router>
        </MetaMaskProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
