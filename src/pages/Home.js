import React from 'react';
import { auth } from '../firebase';
import Chats from './components/Chats';
import { useAuthState } from 'react-firebase-hooks/auth';
const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="home">
      <div className="container">
        {user ? <Chats /> : null}
        {/* <Chats /> */}
      </div>
    </div>
  );
};

export default Home;
