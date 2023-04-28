import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookStyled } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk, getAllContactsThunk } from 'redux/contactsAPI';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contactList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  const checkEqualContact = contact => {
    return contacts.items.some(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const addContactCheck = contact => {
    if (!checkEqualContact(contact)) {
      dispatch(addContactThunk(contact))
     
    } else alert('Such contact already exists');
  };

  return (
    <PhonebookStyled>
      <h1>Phonebook</h1>
      {/* <button type='button' onClick={()=>dispatch(getAllContacts())}>getAllContacts</button> */}
      <ContactForm addContact={addContactCheck} />

      <h2>Total contacts: {contacts.items.length}</h2>
      <Filter />
      <ContactList
      // contactList={contacts}
      ></ContactList>
    </PhonebookStyled>
  );
};
