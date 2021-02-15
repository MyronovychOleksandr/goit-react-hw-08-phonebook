import axios from "axios";
import phonebookActions from "./phonebookActions";

// axios.defaults.baseURL = "http://localhost:2000";

const addContacts = (user) => (dispatch) => {
  dispatch(phonebookActions.addContactsRequest());

  axios
    .post("/contacts", { ...user })
    .then((response) => {
      dispatch(phonebookActions.addContactsSuccess(response.data));
    })
    .catch((error) => dispatch(phonebookActions.addContactsError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(phonebookActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(phonebookActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(phonebookActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(phonebookActions.removeContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(phonebookActions.removeContactsSuccess(id)))
    .catch((error) => dispatch(phonebookActions.removeContactsError(error)));
};

export default {
  addContacts,
  fetchContacts,
  removeContact,
};
