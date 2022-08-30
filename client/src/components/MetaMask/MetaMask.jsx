import React from 'react';
import { useMetaMask } from 'metamask-react';
import {
  Box, CircularProgress,
  Popover, Typography,
} from '@mui/material';

import ButtonComponent from '../Buttons/ButtonComponent';

import { ReactComponent as Meta } from '../../assets/svg/metamask.svg';
import { metaMaskStyles } from '../Pages/MuiStyles';

const MetaMask = ({ openMeta, setOpenMeta }) => {
  const {
    status, connect, account, chainId,
  } = useMetaMask();
  const options = () => {
    switch (status) {
      case 'initializing':
        return (<CircularProgress color="inherit" />);
      case 'unavailable':
        return (<div>Metamask не установлен(</div>);
      case 'notConnected':
        return (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            mt: '50px',
          }}
          >
            <Typography variant="title" component="p">Не подключено</Typography>
            <ButtonComponent label="Подключиться" onClick={connect} />
          </Box>
        );
      case 'connected':
        return (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            '&>div:first-of-type': {
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              pb: '20px',
              '&>p': {
                mb: '10px',
              },
            },
            '&>div:last-of-type>p': {
              mb: '10px',
            },
          }}
          >
            <Box>
              <Typography variant="title" component="p" color="text.grey">Аккаунт</Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  width: '200px',
                  wordWrap: 'break-word',
                }}
              >
                {account}
              </Typography>
            </Box>
            <Box>
              <Typography variant="title" component="p" color="text.grey">ID сети</Typography>
              <Typography variant="title" component="div">{chainId}</Typography>
            </Box>
          </Box>
        );
      case 'connecting':
        return (<CircularProgress color="inherit" />);
      default:
        return (<div>Not work</div>);
    }
  };

  const handleClose = () => {
    setOpenMeta(null);
  };

  const open = Boolean(openMeta);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={openMeta}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={metaMaskStyles}
      >
        <Box>
          <Box>
            <Meta />
          </Box>
          {options()}
        </Box>
      </Popover>
    </div>
  );
};

export default MetaMask;
