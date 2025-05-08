import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Contact = {
  id: number;
  name: string;
  number: string;
};

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },

    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },

    editContact: (
      state,
      action: PayloadAction<{ id: number; name: string; number: string }>
    ) => {
      const { id, name, number } = action.payload;
      const existingContact = state.contacts.find(
        (contact) => contact.id === id
      );
      if (existingContact) {
        existingContact.name = name;
        existingContact.number = number;
      }
    },
  },
});

export const { addContact, deleteContact, editContact } = contactSlice.actions;
export default contactSlice.reducer;
