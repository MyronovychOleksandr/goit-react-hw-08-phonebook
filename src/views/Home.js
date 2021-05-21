import React from "react";

const styles = {
  container: {
    padding: 10,
  },
};

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <div style={styles.container}>
        <p>You can use such data for sign in:</p>
        <p>email: aringarosa@gmail.com</p>
        <p>password: daVinci</p>
        Or you can create your account.
      </div>
    </>
  );
};

export default Home;
