import './App.css';
import React from 'react';
import {
  ThemeProvider, createTheme,
} from '@mui/material';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import StartPage from '../Pages/StartPage';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import { routing } from './routing';
import MainPage from '../Pages/MainPage';

import 'typeface-inter';

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
    typography: {
      h1: {
        color: '#FFFFFF',
        fontFamily: 'TT Firs Neue, sans-serif',
        fontSize: '56px',
        lineHeight: '64px',
        fontWeight: 500,
      },
      h2: {
        color: '#FFFFFF',
        fontFamily: 'TT Firs Neue, sans-serif',
        fontSize: '36px',
        lineHeight: '48px',
        fontWeight: 500,
      },
      body1: {
        color: '#FFFFFF',
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        lineHeight: '24px',
        fontWeight: 500,
      },
      body2: {
        color: '#FFFFFF',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        lineHeight: '24px',
        fontWeight: 500,
      },
    },
  });

  // const [login, setLogin] = useState(false);

  const logIn = () => {
    // setLogin(true);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/login" element={<LoginPage logIn={logIn} />} />
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
// <>
//   <Navbar />
//   <Box sx={{
//     display: 'flex',
//   }}
//   >
//     <Sidebar />
//     <Box>
//       <Route
//         path="admin/markets"
//         element={
//           <InputComponent type="error" text="good" error="error" />
//         }
//       />
//       <Route path="/profile" element={<ButtonComponent color="primary" name="trfdg" size="large" />} />
//       <Route
//         path="/convert"
//         element={<CheckboxComponent label="Запомнить меня" type="error" size="small" />}
//       />
//       <Route path="/wallet" element={(<UserCard userName="Алексей Иванов" />)} />
//       <Route path="/activity" element={(<PaginationComponent quantity={32} />)} />
//       <SearchInput currencyList={[
//         { shortName: 'BTC', fullName: 'Bitcoin', img: BTC },
//         { shortName: 'ETH', fullName: 'Etherium', img: ETH },
//       ]}
//       />
//       <Status text="Успешно" />
//       <Select currencyList={[{ label: 'BTC', img: BTC }, { label: 'ETH', img: ETH }]} />
//       <RadioButton text="Банковская карта (Mastercard)" />
//       <Modal open={false} variant />
//       <Tag tagValue="100%" />
//       <Notification status="success" size="small" />
//     </Box>
//   </Box>
// </>

export default App;
