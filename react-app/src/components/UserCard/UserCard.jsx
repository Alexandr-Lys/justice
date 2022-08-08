import React, { useRef } from 'react';
import {
  Box, Card, CardContent, Typography,
} from '@mui/material';
import Button from '@mui/material/Button';

import { ReactComponent as Ellipse } from '../../assets/svg/Ellipse.svg';
import { ReactComponent as PersonFilled } from '../../assets/svg/PersonFilled.svg';

const UserCard = ({ userName }) => {
  const userPhotoRef = useRef(null);
  const addingPhoto = () => {
    userPhotoRef.current.click();
  };
  return (
    <Card sx={{
      width: '224px',
      height: '208px',
      backgroundColor: '#191F29',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <input ref={userPhotoRef} type="file" style={{ display: 'none' }} />
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
      }}
      >
        <Box sx={{
          width: '96px',
          height: '96px',
          m: '0',
        }}
        >
          <Ellipse />
          <Box sx={{
            width: '84px',
            height: '84px',
            position: 'relative',
            bottom: '93px',
            left: '6px',
            backgroundColor: '#282F39',
            borderRadius: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <PersonFilled />
          </Box>
          <Button
            onClick={addingPhoto}
            sx={{
              backgroundColor: '#682DFE',
              width: '24px',
              height: '24px',
              borderRadius: '100%',
              minWidth: '0',
              color: '#FFFFFF',
              position: 'relative',
              bottom: '175px',
              left: '30px',
              '&:hover': {
                backgroundColor: '#682DFE',
              },
            }}
          >
            <Typography>
              +
            </Typography>
          </Button>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: '#FFFFFF',
          }}
        >
          {userName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
