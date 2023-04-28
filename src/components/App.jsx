import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookStyled } from './App.styled';
// import { useDispatch, useSelector } from 'react-redux';
import { useGetAllContactsQuery } from 'redux/contactsAPI';
// import { useEffect } from 'react';

export const App = () => {
  const { data: contacts, isFetching, isLoading } = useGetAllContactsQuery();

  return (
    <PhonebookStyled>
      <h1>Phonebook</h1>
      {/* <button type='button' onClick={()=>dispatch(getAllContacts())}>getAllContacts</button> */}
      <ContactForm />

      {contacts && <h2>Total contacts: {contacts.length}</h2>}
      <Filter />
      <ContactList
      // contactList={contacts}
      ></ContactList>
    </PhonebookStyled>
  );
};
