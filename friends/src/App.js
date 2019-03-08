import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import PrivateRoute from './containers/PrivateRoute';

import Home from './components/Home';
import Login from './components/Login';
import FriendsList from './containers/FriendsList';

const App = () => (
  <div>
    <header>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/friends">Friends</NavLink>
      </nav>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/friends" component={FriendsList} />
    </main>
  </div>
);

export default App;
