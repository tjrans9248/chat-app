import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Sean's chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign up</button>
        </form>

        <p>
          회원이 아니신가요? <Link to="/register">회원가입</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
