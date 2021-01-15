import React from 'react';
import '../style/UserBox.scss';

const UserBox = ({ user }) => {
  return (
    <div className='user_box'>
      <div className='name'>{user.username}</div>
      <div
        className='avatar'
        style={{ backgroundImage: `url(${user.avatar})` }}
      >
        {/* <img src={user.avatar} alt={user.name} /> */}
      </div>
    </div>
  );
};

export default UserBox;
