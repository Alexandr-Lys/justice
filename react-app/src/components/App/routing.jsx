import React from 'react';
import MarketsPage from '../Pages/AdminPages/MarketsPage';
import ProfilePage from '../Pages/AdminPages/ProfilePage';
import ConvertPage from '../Pages/AdminPages/ConvertPage';
import WalletPage from '../Pages/AdminPages/WalletPage';
import ActivityPage from '../Pages/AdminPages/ActivityPage';

export const routing = [
  {
    component: <MarketsPage />,
    path: '',
  },
  {
    component: <MarketsPage />,
    path: 'markets',
  },
  {
    component: <ProfilePage />,
    path: 'profile',
  },
  {
    component: <ConvertPage />,
    path: 'convert',
  },
  {
    component: <WalletPage />,
    path: 'wallet',
  },
  {
    component: <ActivityPage />,
    path: 'activity',
  },
];

