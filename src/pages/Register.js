import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import app from '../firebase';

const Register = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert('회원가입 되셨습니다!');

        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  };

  const onSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert('로그인 하셨습니다!');
        navigate('/');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
      });
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Sean's chat</span>
        <span className="title">회원가입 및 로그인</span>
        <div className="form">
          <input
            type="email"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={onSignUp}>회원가입</button>
          <button onClick={onSignIn}>로그인</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
