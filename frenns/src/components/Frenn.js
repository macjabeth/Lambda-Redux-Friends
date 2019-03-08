import React from 'react';

const Frenn = ({ name, age, email, onFrennEdit, onFrennDelete }) => (
  <li>
    {name} is {age} years old; you can email them at {email}
    <button onClick={onFrennEdit}>edit</button>
    <button onClick={onFrennDelete}>delete</button>
  </li>
);

export default Frenn;
