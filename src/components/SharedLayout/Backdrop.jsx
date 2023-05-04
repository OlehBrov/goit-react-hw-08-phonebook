import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

export const BackdropView = ({ children }) => {
  const navigate = useNavigate();
  return (
    <>
     
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
            backgroundColor: '#fff',
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

