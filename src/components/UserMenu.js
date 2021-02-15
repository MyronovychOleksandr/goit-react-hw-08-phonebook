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
      <img
        src="https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg"
        width="32"
        style={styles.avatar}
      />
      <span style={styles.name}>Welcome, {name}</span>
      {/* <button onClick={onLogout}>Log out</button> */}
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
