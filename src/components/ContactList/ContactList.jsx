import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useGetAllContactsQuery } from 'redux/contactsAPI';
import styled from 'styled-components';

export function ContactList() {
  const { data: contacts, isFetching, isLoading } = useGetAllContactsQuery();

  const searchQuery = useSelector(state => state.filter);
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
      {contacts
        ? contactsToRender(contacts, searchQuery).map(contact => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            ></ContactItem>
          ))
        : 'Add contacts to phonebook and they will appear here!'}
    </List>
  );
}

const List = styled.ul`
  flex-grow: 1;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  /* font-size: 20px; */
  padding: 0;
`;
