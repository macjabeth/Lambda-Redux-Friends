import React from 'react';
import { connect } from 'react-redux';
import { onLoginSubmit } from '../actions';
import { useInput } from '../hooks';

const Login = ({ onLoginSubmit, history: { push }, location: { state } }) => {
  const [username, , updateUsername] = useInput();
  const [password, , updatePassword] = useInput();

  const onSubmit = e => {
    e.preventDefault();
    onLoginSubmit({ username, password }).then(() => {
      push((state && state.referrer) || '/');
    });
  };

  return (
    <div>
      <h3>Secret Stuff</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={updateUsername}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={updatePassword}
          required
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default connect(
  null,
  { onLoginSubmit }
)(Login);
