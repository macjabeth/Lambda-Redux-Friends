import React from 'react

const Friend = ({name, age, email}) => (
  <li>
    {name} is {age} years old; email them at {email}
  </li>
);

export default Friend;
