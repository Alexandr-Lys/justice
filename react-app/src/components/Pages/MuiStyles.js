const BORDER = '1px solid rgba(255, 255, 255, 0.1)';
const flexAlign = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const mainStyles = {
  maxWidth: '1440px',
  height: '100vh',
  margin: '0 auto',
};

export const currencyNameStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  borderRadius: '3px',
  backgroundColor: 'transparent',
  padding: '2px',
  '& h3': {
    color: '#FFFFFF',
    fontSize: '14px',
  },
  '& h4': {
    color: '#FFFFFF',
    opacity: '0.7',
    fontSize: '11px',
  },
};

export const selectStyles = {
  justifyContent: 'center',
  backgroundColor: 'transparent',
  '& input': {
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      appearance: 'none',
      margin: 0,
    },
  },
  '&>div': {
    border: '1px solid rgba(255, 255, 255, 0.2)',
    pl: '10px',
    width: '332px',
    height: '56px',
    '&.Mui-focused': {
      borderColor: '#8391FF',
    },
    '&.Mui-error': {
      border: '1px solid #D24242',
    },
    '&:before, &:after': {
      display: 'none',
    },
    '&>div': {
      width: '93px',
      pr: '13px',
      m: '0',
      '& img': {
        width: '24px',
      },
      '&>div': {
        '& fieldset': {
          display: 'none',
        },
        '& button': {
          color: '#FFFFFF',
        },
      },
    },
  },
};
export const inputStyles = {
  border: '1px solid rgba(255, 255, 255, 0.2)',
  height: '56px',
  backgroundColor: 'transparent',
  '&>label': {
    top: '4px',
  },
  '&>label, &>label.Mui-focused': {
    color: '#8C939D',
  },
  '& input': {
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      appearance: 'none',
      margin: 0,
    },
  },
  '&>div': {
    '&.Mui-focused': {
      borderColor: '#8391FF',
    },
    '&.Mui-error': {
      border: '1px solid #D24242',
    },
    '&:before, &:after': {
      display: 'none',
    },
    '&>div': {
      width: '93px',
      pr: '13px',
      m: '0',
      '& img': {
        width: '24px',
      },
      '&>div': {
        '& fieldset': {
          display: 'none',
        },
        '& button': {
          color: '#FFFFFF',
        },
      },
    },
  },
};

export const selectPopperStyles = {
  '&.Select': {
    width: '109px !important',
    top: '8px !important',
    left: '-12px !important',
    '&>div': {
      backgroundColor: '#191F29',
    },
  },
  '&.Select ul': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: '227px',
    '&::-webkit-scrollbar': {
      width: '4px',
      height: '48px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(255, 255, 255, 0.25)',
      borderRadius: '29px',
    },
    '& .MuiAutocomplete-option[aria-selected="true"]': {
      background: 'transparent',
    },
    '& li': {
      margin: 0,
      width: '77px',
      minHeight: '64px !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: BORDER,
      backgroundColor: 'transparent',
      ml: '16px',
      padding: '0 !important',
      mb: '20px',
      '&.Mui-focused': {
        backgroundColor: 'transparent !important',
      },
      '& img': {
        width: '24px',
      },
      '& p': {
        fontSize: '0.8rem !important',
      },
    },
  },
};

export const loginPageStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'space-between',
  '&>div:first-of-type': {
    marginLeft: '112px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '420px',
    '& h1': {
      margin: '116px 335px 56px 0',
    },
    '&>div:first-of-type': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '32px',
      '&>div': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '7px',
        background: '#282F39',
        width: '194px',
        height: '56px',
      },
    },
    '&>div:last-of-type': {
      position: 'relative',
      marginY: '42px',
      width: '420px',
      '& hr': {
        border: 'none',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        color: '#fff',
        overflow: 'visible',
        textAlign: 'center',
        height: '5px',
      },

      '& hr:after': {
        background: 'black',
        content: '"Or"',
        padding: '0 20px',
        position: 'relative',
        top: '-10px',
      },
    },
    '& form': {
      '&>div': {
        '& .MuiFormControl-root': {
          marginBottom: '40px',
        },
        '& input': {
          width: '394px',
        },
        '& .css-14hvdh5-MuiFormControlLabel-root': {
          marginRight: '250px',
        },
        '& button': {
          width: '420px',
          height: '56px',
          margin: '48px 0 32px',
        },
        '&>div:last-of-type': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          '& a': {
            color: '#8391FF',
          },
        },
      },
    },
  },
  '&>div:last-of-type': {
    width: '720px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
  },
};

export const registerPageStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  '&>div:first-of-type': {
    marginLeft: '112px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '420px',
    '& h1': {
      margin: '116px 200px 56px 0', //!
    },
    '&>div:first-of-type': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '32px',
      '&>div': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '7px',
        background: '#282F39',
        width: '194px',
        height: '56px',
      },
    },
    '&>div:last-of-type': {
      position: 'relative',
      marginY: '42px',
      width: '420px',
      '& hr': {
        border: 'none',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        color: '#fff',
        overflow: 'visible',
        textAlign: 'center',
        height: '5px',
      },

      '& hr:after': {
        background: 'black',
        content: '"Or"',
        padding: '0 20px',
        position: 'relative',
        top: '-10px',
      },
    },
    '& form': {
      '&>div': {
        '& .MuiFormControl-root': {
          marginBottom: '40px',
        },
        '& input': {
          width: '394px',
        },
        '& .css-14hvdh5-MuiFormControlLabel-root': {
          marginRight: '250px',
        },
        '& button': {
          width: '420px',
          height: '56px',
          margin: '48px 0 32px',
        },
        '&>div:nth-of-type(3)': {
          display: 'flex',
          justifyContent: 'space-between',
          '& div': {
            width: '194px',
            '& p': {
              position: 'absolute',
              top: '55px',
            },
          },
        }, // !
        '&>div:last-of-type': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          '& a': {
            color: '#8391FF',
          },
        },
      },
    },
  },
  '&>div:last-of-type': {
    width: '720px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
  },
};

export const marketsPageStyles = {
  height: '100vh',
  paddingX: '48px',
  '&>div:first-of-type': {
    margin: '48px 0 32px',
    height: '48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '& tr>td:first-of-type>div': {
    ...currencyNameStyles,
  },
};

export const profilePageStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  '&>div:first-of-type': {
    maxWidth: '913px',
    borderRight: BORDER,
    '&>div': {
      paddingX: '48px',
      '& h1': {
        marginY: '48px',
      },
      '& h2': {
        margin: '56px 0 40px',
      },
      '& form': {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        '&:first-of-type': {
          paddingBottom: '80px',
          borderBottom: BORDER,
        },
        '&>div': {
          width: '365px',
          height: '56px',
        },
        '& button': {
          height: '56px',
        },
      },
    },
  },
  '&>div:last-of-type': {
    margin: '32px 32px 0',
  },
};

export const convertPageStyles = {
  width: '1088px',
  margin: '0 64px 0 48px',
  '& h1': {
    paddingY: '48px',
  },
  '&>div': {
    backgroundColor: '#191F29',
    borderRadius: '3px',
    padding: '48px',
    '&>div:first-of-type': {
      display: 'flex',
      borderBottom: BORDER,
      justifyContent: 'space-between',
      paddingBottom: '48px',
      alignItems: 'flex-end',
      '&>div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        '&>div': {
          height: '56px',
        },
      },
      '&>button': {
        height: '56px',
      },
      '&>svg': {
        paddingBottom: '4px',
      },
    },
    '&>div:last-of-type': {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '48px',
      alignItems: 'flex-end',
      '&>div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        '&>div': {
          height: '56px',
        },
      },
    },
  },
};

export const walletPageStyles = {
  maxWidth: '1104px',
  paddingX: '48px',
  '& table': {
    width: '1104px',
    '& tbody tr>td:first-of-type>div': {
      ...currencyNameStyles,
    },
  },
  '& thead': {
    background: '#191F29',
  },
  '&>div:first-of-type': {
    ...flexAlign,
    borderBottom: BORDER,
    '& h1': {
      m: '48px 0 32px',
    },
    '&>div': {
      display: 'flex',
      gap: '24px',
      '& button': {
        height: '40px',
        '&:first-of-type': {
          width: '88px',
        },
        '&:last-of-type': {
          width: '114px',
        },
      },
    },
  },
  '&>div:nth-of-type(2)': {
    ...flexAlign,
    paddingY: '32px',
    borderBottom: BORDER,
    '&>div:first-of-type': {
      '&>div': {
        display: 'flex',
        gap: '6px',
        mt: '12px',
      },
    },
  },
  '&>div:nth-of-type(3)': {
    '&>p': {
      margin: '56px 0 24px',
    },
  },
  '&>div': {
    '&>p': {
      margin: '96px 0 24px',
    },
  },

};

export const refillPageStyles = {
  '&>div:last-of-type': {
    paddingX: '288px',
    '&>div:first-of-type': {
      padding: '48px 0 32px',
      borderBottom: BORDER,
      ...flexAlign,
    },
    '&>div:last-of-type': {
      display: 'flex',
      '&>div.MuiStepper-root': {
        pl: '48px',
        pt: '56px',
        gap: '56px',
        '& .MuiStepConnector-root': {
          display: 'none',
        },
        '& .MuiStep-root': {
          borderBottom: BORDER,
          '& .MuiStepLabel-root': {
            p: 0,
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '24px',
            '&>span:last-of-type': {
              paddingBottom: '56px',
              '&>span>div': {
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              },
            },
          },
        },
      },
    },
  },
};

export const refillPageStepOneStyles = {
  display: 'flex',
  flexDirection: 'column',
  borderRight: BORDER,
  pr: '283px',
  '& h2': {
    margin: '48px 0 40px',
  },
  '&>div': {
    margin: '8px 0 40px',
  },
  '&>button': {
    width: '138px',
    height: '56px',
    mt: '48px',
  },
};

export const refillPageStepTwoStyles = {
  width: '350px',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  borderRight: BORDER,
  pr: '265px',
  '&>h2': {
    m: '48px 0 42px',
  },
  '& h3': {
    mb: '5px',
  },
  '&>button': {
    width: '189px',
    height: '56px',
  },
};

export const activityPage = {
  maxWidth: '1104px',
  paddingX: '48px',
  '& table': {
    width: '1104px',
    '& tbody tr>td:first-of-type>div, & tbody tr>td:nth-of-type(3)>div': {
      ...currencyNameStyles,
    },
  },
  '& thead': {
    background: '#191F29',
  },
  '& tbody': {
    '& tr': {
      '& td:nth-of-type(2)': {
        p: 0,
        '&>div': {
          ...flexAlign,
          '&>img': {
            width: '16px',
            height: '16px',
          },
        },
      },
    },
  },
  '& h1': {
    m: '48px 0 32px',
  },

};
