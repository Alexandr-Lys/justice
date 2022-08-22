import React from 'react';
import {
  Box, Container, Modal, Typography,
} from '@mui/material';

import { ReactComponent as Refill } from '../../assets/svg/Refill.svg';
import { ReactComponent as Operation } from '../../assets/svg/Operation.svg';

const style = {
  width: 284,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  backgroundColor: '#191F29',
  '& svg': {
    padding: '32px 0 0 32px',
  },
};

const ModalComponent = ({ open, variant, ...props }) => {
  if (variant) {
    return (
      <Modal
        {...props}
        open={open}
        keepMounted
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Refill />
          <Container sx={{ padding: '24px 32px 32px' }}>
            <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
              Пополнение прошло успешно
            </Typography>
            <Typography variant="body2" sx={{ color: '#8C939D' }}>
              Вы успешно пополнили свой кошелек.
            </Typography>
          </Container>
        </Box>
      </Modal>
    );
  }
  return (
    <Modal
      {...props}
      open={open}
      keepMounted
    >
      <Box sx={style}>
        <Operation />
        <Container sx={{ padding: '24px 32px 32px' }}>
          <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
            Операция прошла успешно
          </Typography>
          <Typography variant="body2" sx={{ color: '#8C939D' }}>
            В ближайшее время средства поступят на ваш счет.
          </Typography>
        </Container>
      </Box>
    </Modal>
  );
};
export default ModalComponent;
