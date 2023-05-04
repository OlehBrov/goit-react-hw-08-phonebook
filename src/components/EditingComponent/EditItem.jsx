import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { BackdropView } from 'components/SharedLayout/Backdrop';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEditContactsMutation } from 'redux/contactsAPI';
import styled from 'styled-components';

export const EditItem = props => {
  const location = useLocation();
  const navigate = useNavigate();
  const [patchName, setPatchName] = useState(location.state.name);
  const [patchNumber, setPatchNumber] = useState(location.state.number);
  const [toEditContact] = useEditContactsMutation();

  const handleSubmit = e => {
    e.preventDefault();
    //   console.log('location', location)
    const patch = {
      id: location.state.id,
      name: patchName,
      number: patchNumber,
    };
    toEditContact(patch).then(() => navigate('/'));
  };
  const handleChange = e => {
    console.log('event', e.target.name);
    const { name, value } = e.target;
    if (name === 'patchName') setPatchName(value);
    if (name === 'patchNumber') setPatchNumber(value);
  };
  return (
    <BackdropView>
      {/* <Modal> */}
      <Box
        sx={{
          marginBottom: '15px',
        }}
      >
        <Typography id="modal-modal-title-edit" variant="h6" component="h2">
          Here you can edit Name and Phone number
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
        }}
      >
        {/* <FormControl sx={{ width: '25ch' }}  > */}
        <TextField
          required
          id="standard-helperText"
          label="Name"
          name="patchName"
          placeholder="Please enter name"
          onChange={handleChange}
          value={patchName}
          // helperText="Name"
        />
        <TextField
          required
          id="standard-helperText2"
          label="Phone number"
          name="patchNumber"
          placeholder="Please enter number"
          onChange={handleChange}
          value={patchNumber}
        />
        <Button variant='contained' type="submit" onClick={e => handleSubmit(e)}>
          Save changes
        </Button>
        <Button type="button" onClick={() => navigate('/')}>
          Close
        </Button>
        {/* </FormControl> */}
      </Box>
      {/* <form
          method="post"
          name="contact_form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>
            Name
            <input
              type="text"
              name="patchName"
              onChange={handleChange}
              value={patchName}
            />
          </label>

          <label>
            Phone number
            <input
              type="text"
              name="patchNumber"
              onChange={handleChange}
              value={patchNumber}
            />
          </label>

          <button type="submit">Save</button>
        </form> */}
      {/* </Modal> */}
    </BackdropView>
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

// const Modal = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   background-color: white;
//   width: 400px;
//   background-color: beige;
//   border: 1px solid black;
// `;
