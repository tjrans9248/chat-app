import React from 'react';
import { auth } from '../../firebase';

const Message = ({ message }) => {
  // const messageClass = message.uid === auth.currentUser.uid ?
  return (
    <div className="message">
      <div className="messageInfo">{message.name}</div>
      <div className="messageContent">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
