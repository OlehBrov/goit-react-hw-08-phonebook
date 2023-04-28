import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteContactThunk } from 'redux/contactsAPI';

export function ContactList() {
  const searchQuery = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.contactList.items);
  const dispatch = useDispatch();
console.log('contacts', contacts)
  const contactsToRender = (contacts, searchQuery) => {
    if (searchQuery === '') {
      return contacts;
    } else {
      return contacts.filter(person => {
        return person.name.toLowerCase().includes(searchQuery);
      });
    }
  };

  return (
    <List>
      {contacts.length
        ? contactsToRender(contacts, searchQuery).map(contact => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              number={contact.phone}
              onDeleteContact={() => dispatch(deleteContactThunk(contact.id))}
              id={contact.id}
            ></ContactItem>
          ))
        : 'Add contacts to phonebook and they will appear here!'}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  padding: 0;
`;
