import React, { useState, useEffect } from 'react';
import Message from './Message';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      let messages = [];
      querySnapshot.forEach(doc => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="messages">
      <div className="message">
        {/* <div className="messageInfo">sean</div> */}
        <div className="messageContent">
          {messages &&
            messages.map(message => (
              <Message key={message.id} message={message} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
