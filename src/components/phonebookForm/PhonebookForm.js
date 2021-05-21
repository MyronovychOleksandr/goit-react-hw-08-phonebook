import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import Alert from "./alert/Alert";

import { phBookSelectors, phBookOperations } from "../../redux/contacts";

import s from "./PhonebookForm.module.css";
import "../animation/animationAlert.css";

const initialState = {
  name: "",
  number: "",
  valideteForm: false,
};

class PhonebookForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const isExistContact = this.props.contacts.some((contact) => {
      return contact.name === this.state.name;
    });
    if (isExistContact) {
      this.setState({ ...initialState, valideteForm: true });
      setTimeout(this.onChangeValideteForm, 2000);
      return;
    }
    const user = { ...this.state };
    this.props.onAddContact(user);
    this.setState({ ...initialState });
  };

  onChangeValideteForm = () => {
    this.setState({ valideteForm: !this.state.valideteForm });
  };

  render() {
    const { valideteForm } = this.state;
    return (
      <>
        <CSSTransition
          in={valideteForm}
          classNames="alert"
          timeout={500}
          unmountOnExit
        >
          <Alert text={"This contact name already use"} />
        </CSSTransition>
        <form className={s.form} onSubmit={this.onHandleSubmit}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              required
              onChange={this.onHandleChange}
            />
          </label>
          <label className={s.label}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              value={this.state.number}
              required
              onChange={this.onHandleChange}
            />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: phBookSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onAddContact: phBookOperations.addContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookForm);
