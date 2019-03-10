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
      const { id, name, age, email } = location.state;
      setName(name);
      setAge(age);
      setEmail(email);
      setId(id);
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

  const cta = id ? 'Update' : 'Submit';

  return (
    <form onSubmit={onFrennSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={updateName}
      />
      <input type="number" placeholder="Age" value={age} onChange={updateAge} />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={updateEmail}
      />
      <input type="submit" value={cta} />
    </form>
  );
};

export default connect(
  null,
  { addFrenn, editFrenn }
)(FrennsForm);
