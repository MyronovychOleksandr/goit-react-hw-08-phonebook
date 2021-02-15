import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phActions from "./phonebookActions";

const addContact = (state, action) => {
  return [...state, action.payload];
};

const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const contacts = createReducer([], {
  [phActions.fetchContactsSuccess]: (state, action) => action.payload,
  [phActions.addContactsSuccess]: addContact,
  [phActions.removeContactsSuccess]: removeContact,
});

const filter = createReducer("", {
  [phActions.filterContact]: (state, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
