import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from './Login';
import FrennsList from './FrennsList';
import FrennsForm from './FrennsForm';

const App = () => (
  <div>
    <header>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/frenns">Frenns</NavLink>
      </nav>
    </header>
    <main>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/frenns" component={FrennsList} />
      <PrivateRoute path="/frenns/new" component={FrennsForm} />
    </main>
  </div>
);

export default App;
