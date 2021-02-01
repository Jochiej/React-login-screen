import React from "react";
import "./styles.scss";


export const Login = ({ userinfo, setUserInfo }) => {
  const inputChange = (e) => {
    if (e.target.name === "username") {
      setUserInfo({ ...userinfo, username: e.target.value });
    }
    if (e.target.name === "password") {
      setUserInfo({ ...userinfo, password: e.target.value });
    }
  };
  const submit = (e) => {
    //for showing purposes
    e.preventDefault();
    console.log(userinfo);
  };

  return (
    <div className="body">
      <form className="form">
        <h1 className="login-title">Login</h1>
        <input
          name="username"
          type="text"
          className="input"
          placeholder="Username"
          onChange={(e) => inputChange(e)}
        ></input>
        <input
          type="password"
          className="input"
          name="password"
          onChange={(e) => inputChange(e)}
          placeholder="Password"
        ></input>
        <button className="button" onClick={(e) => submit(e)}>
          Sign in
        </button>
        <p className="p">Lost your password?</p>
      </form>
      <div className="register">
        Don't have an account? <u>Sign up here!</u>
      </div>
    </div>
  );
};