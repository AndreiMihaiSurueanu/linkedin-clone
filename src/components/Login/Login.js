import React, { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
// Firebase
import * as fb from "../../firebase";
// Styles
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
  };
  
  const register = () => {
    if (!name) {
      return alert("Please enter your full name!");
    }
    fb.createUserWithEmailAndPassword(fb.auth, email, password)
      .then((userAuth) => {
        fb.updateProfile(userAuth.user, {
          displayName: name,
          photoUrl: profilePic,
        })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          })
          .catch((error) => alert(error));
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src="http://tny.im/pSr" alt="LinkedIn logo" />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
