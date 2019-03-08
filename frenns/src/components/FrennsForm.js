import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useInput } from '../hooks';
import { addFrenn, editFrenn } from '../actions';

const FrennsForm = ({ addFrenn, editFrenn, location, history }) => {
  const [name, setName, updateName] = useInput();
  const [age, setAge, updateAge] = useInput();
  const [email, setEmail, updateEmail] = useInput();
  const [id, setId] = useInput();

  useEffect(() => {
    if (location.state) {
      const { frenn } = location.state;
      setId(frenn.id);
      setName(frenn.name);
      setAge(frenn.age);
      setEmail(frenn.email);
    }
  }, [location]);

  const onFrennSubmit = e => {
    e.preventDefault();
    if (id) {
      editFrenn(id, { name, age, email }).then(() => {
        history.push('/frenns');
      });
    } else {
      addFrenn({ name, age, email });
    }
    setName('');
    setAge('');
    setEmail('');
  };

  return (
    <form onSubmit={onFrennSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={updateName}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={updateAge}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={updateEmail}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default connect(
  null,
  { addFrenn, editFrenn }
)(FrennsForm);
