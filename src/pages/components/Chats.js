/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Messages from './Messages';
import Input from './Input';
import Edit from '../../images/edit.png';
import More from '../../images/more.png';

const chats = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Sean</span>
        <div className="chatIcons">
          <img src={Edit} alt="edit" />
          <img src={More} alt="more" />
        </div>
      </div>

      <Messages />

      <Input />
    </div>
  );
};

export default chats;
