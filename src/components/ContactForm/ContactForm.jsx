import { Formik, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { useState } from 'react';
import { Input } from 'components/Filter/Filter';
import styled from 'styled-components';
import {
  useAddContactsMutation,
  useGetAllContactsQuery,
} from 'redux/contactsAPI';
import { Box, Button, TextField, Typography } from '@mui/material';

// const AddContactSchema = Yup.object().shape({
//   name: Yup.string().required(),
//   number: Yup.number().required(),
// });

export const ContactForm = () => {
  const { data: contacts, isFetching, isLoading } = useGetAllContactsQuery();
  const [toAddContact, result] = useAddContactsMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };
  //   const advancedSchema = Yup.object().shape({
  //   name: Yup
  //     .string()
  //     .min(3, "Username must be at least 3 characters long")
  //     .required("Name is Required"),
  //   number: Yup
  //     .string()
  //     .required("Number is Required"),
  // });

  const checkEqualContact = contact => {
    return contacts.some(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const addContactCheck = contact => {
    if (!checkEqualContact(contact)) {
      toAddContact(contact);
    } else alert('Such contact already exists');
  };
  const handleSubmit = (values, { resetForm }) => {
    addContactCheck({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      // validationSchema={advancedSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Box
          sx={{
            marginBottom: '15px',
          }}
        >
          <Typography htmlFor="name" variant="h6">
            Name
          </Typography>
          <TextField
            required
            id="name"
            label="Enter name"
            name="name"
            placeholder="Please enter name"
            onChange={handleChange}
            value={name}
            fullWidth
          />

          <ErrorMessage component="div" name="name" />
        </Box>
        <Box
          sx={{
            marginBottom: '15px',
          }}
        >
          <Typography htmlFor="number" variant="h6">
            Phone Number
          </Typography>

          <TextField
            required
            id="number"
            label="Enter number"
            name="number"
            placeholder="Please enter name"
            onChange={handleChange}
            value={number}
            fullWidth
          />

          <ErrorMessage component="div" name="number" />
        </Box>
        <Button type="submit" fullWidth size="lg" variant="outlined">
          Add to contacts
        </Button>
      </Form>
    </Formik>
  );
};

const LabelStyled = styled.label`
  font-size: 25px;
`;
// const AddButton = styled(Button)`
//   display: block;
//   font-weight: 700;
//   width: 100%;
//   font-size: 20px;
//   cursor: pointer;
// `;
