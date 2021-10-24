import React from "react";
// Styles
import "./Login.css";

function Login() {
  const loginToApp = (e) => {
    e.preventDefault();
  };
  
  const register = () => {
  };

  return (
    <div className="login">
      <img src="http://tny.im/pSr" alt="LinkedIn logo" />
      <form>
        <input
          type="text"
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
        />
        <input
          type="email"
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
