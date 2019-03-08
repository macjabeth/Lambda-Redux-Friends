import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFrenns, editFrenn, deleteFrenn } from '../actions';
import Frenn from './Frenn';

const FrennsList = ({
  frenns,
  fetchFrenns,
  editFrenn,
  deleteFrenn,
  location,
  history
}) => {
  useEffect(fetchFrenns, []);
  return (
    <ul>
      {location.pathname === '/frenns' ? (
        <Link to={`${location.pathname}/new`}>Add Frenn</Link>
      ) : null}
      {frenns.map(frenn => (
        <Frenn
          key={frenn.id}
          {...frenn}
          onFrennEdit={() => {
            history.replace({
              pathname: `${location.pathname}/new`,
              state: { frenn }
            });
          }}
          onFrennDelete={() => deleteFrenn(frenn.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  frenns: state.frenns
});

export default connect(
  mapStateToProps,
  { fetchFrenns, editFrenn, deleteFrenn }
)(FrennsList);
