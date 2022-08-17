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

export const selectInputStyles = {
  pl: '10px',
  width: '332px',
  backgroundColor: 'transparent',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '&:before, &:after': {
    display: 'none',
  },
  '& input': {
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      appearance: 'none',
      margin: 0,
    },
  },
  '&.Mui-focused': {
    borderColor: '#8391FF',
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
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
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
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
