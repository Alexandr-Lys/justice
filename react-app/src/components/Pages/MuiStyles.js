export const mainStyles = {
  maxWidth: '1440px',
  height: '100vh',
  margin: '0 auto',
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
