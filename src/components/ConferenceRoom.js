import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import '../style/Whiteboard.scss';
import Iframe from 'react-iframe';

const ConferenceRoom = ({ setShowWhiteboard }) => {
  return (
    <section className='whiteboard-wrapper'>
      <div className='icon'>
        <CloseIcon onClick={() => setShowWhiteboard(false)} />
      </div>
      <div>
        <Iframe
          url='https://awwapp.com/b/uzuwqzvzoz0kq/'
          width='450px'
          height='670px'
          id='myId'
          className='myClassname'
          display='initial'
          position='relative'
        />
      </div>
    </section>
  );
};

export default ConferenceRoom;
