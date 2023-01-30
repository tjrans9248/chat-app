import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { auth, db } from '../../firebase';

const Input = () => {
  const [input, setInput] = useState('');

  const sendMessage = async e => {
    if (input === '') {
      alert('내용을 입력하세요.');
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="input">
      <input
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
        type="text"
        placeholder="입력하세요"
      />
      <div className="send">
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Input;
