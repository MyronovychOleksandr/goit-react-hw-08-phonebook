import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import PhonebookForm from "../components/phonebookForm/PhonebookForm";
import Filter from "../components/filter/Filter";
import PhonebookList from "../components/phonebookList/PhonebookList";

import { phBookOperations, phBookSelectors } from "../redux/contacts";

import s from "../components/Phonebook.module.css";
import "../components/animation/fadeApp.css";

class Phonebook extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div className={s.container}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="header"
          unmountOnExit
        >
          <h2 className={s.phonebookHeader}>Phonebook</h2>
        </CSSTransition>
        <PhonebookForm />
        <CSSTransition
          in={this.props.contacts.length > 1}
          timeout={250}
          classNames="filter"
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <PhonebookList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: phBookSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onFetchContacts: phBookOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
