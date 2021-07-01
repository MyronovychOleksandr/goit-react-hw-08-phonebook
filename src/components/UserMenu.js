import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { authOperations, authSelectors } from "../redux/auth";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ name, onLogout }) => {
  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>
      <Button variant="danger" size="sm" onClick={onLogout}>
        Log out
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
