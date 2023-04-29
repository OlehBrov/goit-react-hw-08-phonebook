import { useGetAllContactsQuery } from 'redux/contactsAPI';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import styled from 'styled-components';

export const MainPage = () => {
  const { data: contacts, isFetching, isLoading } = useGetAllContactsQuery();

  return (
    <MainView>
      <FormWrap>
        <h1>Phonebook</h1>
        <ContactForm />
        {contacts && <h2>Total contacts: {contacts.length}</h2>}
        <Filter />
      </FormWrap>
      <ContactList />
    </MainView>
  );
};

const MainView = styled.div`
  display: flex;
  width: 100%;
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  margin-right: 15px;
`;
