import { addNewContact, deleteContact, fetchContacts } from "services/fetchAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllContactsThunk = createAsyncThunk('contacts/fetchAll', async () => {
    
    return await fetchContacts();
})

export const addContactThunk = createAsyncThunk('contacts/addContact', async (contact) => {
    return await addNewContact(contact)
})  

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (id) => {
    return await deleteContact(id)
})  