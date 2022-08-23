export const Theme = {
  action: {
    focus: 'transparent',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(17, 23, 33, 0.84)',
          backdropFilter: 'blur(4px)',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          background: 'transparent',
          backdropFilter: 'none',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        noOptions: {
          color: '#FFFFFF',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          fontSize: '14px',
          fontWeight: 500,
        },
        placeholder: {
          color: '#FFFFFF',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        body: {
          fontWeight: 400,
          color: 'white',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
        head: {
          fontWeight: 400,
          fontSize: '12px',
          color: 'white',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: {

        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        color: '#FFFFFF',
      },
    },
    MuiStepper: {
      action: 'none',
    },
  },
  palette: {
    action: {
      disabledBackground: '#282B30',
      disabled: '#8C8C8C',
    },
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
    text: {
      primary: '#FFFFFF',
      main: '#FFFFFF',
      grey: '#8C939D',
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
    h3: {
      color: '#FFFFFF',
      fontFamily: 'Inter, sans-serif',
      fontSize: '24px',
      lineHeight: '24px',
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
    title: {
      color: '#FFFFFF',
      fontFamily: 'Inter, sans-serif',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    subtitle: {
      color: '#8C939D',
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    subtitleLight: {
      color: '#FFFFFF',
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: 400,
    },
  },
};
