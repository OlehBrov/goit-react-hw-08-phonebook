import { Box, Button, Card, Typography } from '@mui/material';
import { EditItem } from 'components/EditingComponent/EditItem';
import { useNavigate } from 'react-router-dom';
import { useDeleteContactsMutation } from 'redux/contactsAPI';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import { Delete } from '@mui/icons-material';

export const ContactItem = props => {
  const [onDelete] = useDeleteContactsMutation();
  const navigate = useNavigate();
  return (
    <ListItem key={props.id}>
      <CardStyled sx={{}}>
        <Typography> Name: {props.name}</Typography>{' '}
        <Typography>Phone: {props.number}</Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '25px'
          
          
        }}>
        <Button variant="outlined" startIcon={<EditIcon />}
          type="button"
          onClick={() => navigate('/editContact', { state: { ...props } })}
        >
          Edit
        </Button>
        <Button variant='contained'startIcon={<Delete />} type="button" onClick={() => onDelete(props.id)}>
          Delete
          </Button>
          </Box>
      </CardStyled>
    </ListItem>
  );
};

const DeleteButton = styled.button`
  display: block;
  margin-right: 0;
  margin-left: auto;
  font-size: 20px;
`;
const ListItem = styled.li`
  display: flex;
  width: calc((100% - 45px) / 4);
  /* /* align-items: center; */
  /* padding: 10px 15px; */

  /* height: 50px;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff; */
`;

const CardStyled = styled(Card)`
  width: 100%;
  padding: 8px;
`;
