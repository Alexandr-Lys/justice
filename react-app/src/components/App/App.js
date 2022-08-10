import React from 'react';
import {
  ThemeProvider, createTheme,
} from '@mui/material';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'typeface-inter';

import { Theme } from './theme';
import StartPage from '../Pages/StartPage';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import { routing } from './routing';
import MainPage from '../Pages/MainPage';
import './App.css';

const App = () => {
  const theme = createTheme(Theme);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
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
      </ThemeProvider>
    </div>
  );
};

export default App;
