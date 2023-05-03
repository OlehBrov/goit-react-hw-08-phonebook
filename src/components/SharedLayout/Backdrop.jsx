import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import { Box, Button, Typography } from '@mui/material';
import { positions } from '@mui/system';

export const BackdropView = ({ children }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={true}
        onClose={() => navigate('/')}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
            backgroundColor: '#d8d6d6',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '30px',
            borderRadius: '8px',
          }}
        >
          
          {children}
        </Box>
      </Modal>
    </>
  );
};

// const Backdrop = styled.div`
//   position: fixed;
//   display: flex;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(18, 17, 17, 0.3);
//   backdrop-filter: blur(5px);
//   justify-content: center;
//   align-items: center;
//   top: 0vh;
//   left: 0vw;
//   /* bottom: 0;
//   right: 0; */
//   margin: 0 auto;
//   z-index: 999;
//   /* opacity: 0; */
//   /* pointer-events: none; */
//   transition: all 0.3s;
// `;
