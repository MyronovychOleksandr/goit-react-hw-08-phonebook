import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import PhonebookListItem from "./phonebookListItem/PhonebookListItem";

import { phBookSelectors } from "../../redux/contacts";

import s from "./PhonebookList.module.css";

const PhonebookList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className={s.list}>
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={250} classNames={s}>
          <PhonebookListItem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => ({
  contacts: phBookSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(PhonebookList);
