import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import { phBookOperations, phBookSelectors } from "../../../redux/contacts";

import s from "./PhonebookListItem.module.css";

const PhonebookListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={s.item}>
      <span className={s.name}>{name} </span>
      <div className={s.box}>
        <span>{number} </span>

        <Button size="sm" id={id} onClick={onRemove}>
          Delete
        </Button>
      </div>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = phBookSelectors.getContactById(state, ownProps.id);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(phBookOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookListItem);
