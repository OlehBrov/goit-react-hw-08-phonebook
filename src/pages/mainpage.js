import { useGetAllContactsQuery } from 'redux/contactsAPI';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import styled from 'styled-components';
import { Box } from '@mui/material';

export const MainPage = () => {
  const { data: contacts, isFetching, isLoading } = useGetAllContactsQuery();
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      <FormWrap>
        <h1>Phonebook</h1>
        <ContactForm />
      </FormWrap>

      <Box sx={{
        flexGrow: '2',
        paddingTop: '43px'
      }}>
        {contacts && <h2>Total contacts: {contacts.length}</h2>}
        <Filter />
      </Box>
      <Box sx={{
        width: '100%'
      }}>
        <ContactList />
      </Box>
    </Box>
  );
};

const MainView = styled.div``;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  margin-right: 15px;
`;
