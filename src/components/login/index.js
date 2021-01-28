import React from "react";
import "./styles.scss";

export const Logincomp = ({ username, password }) => {
  return (
      <div className="body">
        <form className="form">
          <h1 className="login-title">Login</h1>
          <input className="input" placeholder="Username" onChange={(e) => handleUsernameChange(e)} required></input>
          <input type="password" className="input" onChange={(e) => handlePasswordChange(e)} placeholder="Password" required></input>
          <button className="button" onClick={(e) => submit(e)}>Sign in</button>
          <p className="p">Lost your password?</p>
        </form>
        <div className="register">Don't have an account? <u>Sign up here!</u></div>
      </div>
  );

  function handleUsernameChange(e) {
    username = e.target.value
  }

  function handlePasswordChange(e) {
    password = e.target.value
  }

  function submit(e) {
    alert(username)
    alert(password)
  }
};