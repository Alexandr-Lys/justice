import React from 'react';
import {
  Box, List, ListItemButton, ListItemText,
} from '@mui/material';

import { Link } from 'react-router-dom';

import { ReactComponent as Chart } from '../../assets/svg/chart.svg';
import { ReactComponent as PersonalCard } from '../../assets/svg/personalcard.svg';
import { ReactComponent as BitcoinConvert } from '../../assets/svg/bitcoin-convert.svg';
import { ReactComponent as EmptyWallet } from '../../assets/svg/empty-wallet.svg';
import { ReactComponent as TaskSquare } from '../../assets/svg/task-square.svg';
import { ReactComponent as Exit } from '../../assets/svg/login.svg';

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{
      width: '240px',
      bgcolor: 'transparent',
      color: '#FFFFFF',
      '& .Mui-selected': {
        background: 'linear-gradient(270deg, #7164FF 0%, #682DFE 100%) !important',
      },
    }}
    >
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          pt: '112px',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          '& div': {
            width: '192px',
            gap: '8px',
          },
          '& a, & a:hover, & a:active': {
            textDecoration: 'none',
            color: '#FFFFFF',
          },
          '& a:last-of-type>div': {
            mt: '340px',
          },
          '& span': {
            fontFamily: 'Inter, sans-serif',
            fontWeight: '500',
            fontSize: '14px',
          },
        }}
      >
        <Link to="/admin/markets">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <Chart />
            <ListItemText primary="Рынки" />
          </ListItemButton>
        </Link>
        <Link to="/admin/profile">
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <PersonalCard />
            <ListItemText primary="Мой профиль" />
          </ListItemButton>
        </Link>
        <Link to="/admin/convert">
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <BitcoinConvert />
            <ListItemText primary="Конвертер" />
          </ListItemButton>
        </Link>
        <Link to="/admin/wallet">
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <EmptyWallet />
            <ListItemText primary="Кошелек" />
          </ListItemButton>
        </Link>
        <Link to="/admin/activity">
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <TaskSquare />
            <ListItemText primary="Транзакции" />
          </ListItemButton>
        </Link>
        <Link to="/">
          <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <Exit />
            <ListItemText primary="Выход" />
          </ListItemButton>
        </Link>
      </List>

    </Box>
  );
};

export default Sidebar;
