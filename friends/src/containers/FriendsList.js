import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import Friend from '../components/Friend';

const FriendsList = ({ friends, fetchFriends }) => {
  useEffect(fetchFriends, []);
  return (
    <ul>
      {friends.map(friend => (
        <Friend key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsList);
