const BASE_URL = 'https://644667f90431e885f0110f5f.mockapi.io';

export const fetchContacts = async () => {
  const allContacts = await fetch(`${BASE_URL}/contacts`);
  return await allContacts.json();
};

export const addNewContact = async contact => {
  const res = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(contact),
  })
   return await res.json()
};

export const deleteContact = async (id) => {
   const res = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    
  })
    return await res.json()
};