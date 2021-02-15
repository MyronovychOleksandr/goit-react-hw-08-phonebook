import React from "react";
import { connect } from "react-redux";

import { phBookActions, phBookSelectors } from "../../redux/contacts";

import s from "./Filter.module.css";

const Filter = ({ filter, onHandleFilterContact }) => {
  const handleChange = (e) => {
    onHandleFilterContact(e.target.value);
  };
  return (
    <div className={s.container}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: phBookSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onHandleFilterContact: phBookActions.filterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
