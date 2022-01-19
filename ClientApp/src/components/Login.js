import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import LoginImage from "../assets/images/login.png";

const Login = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="login__container">
          <div className="login__container__sideImg">
            <img src={LoginImage} alt="img" />
          </div>
          <div className="login__container__formInput">
            <form className="login__container__form">
              <h4>Login</h4>
              <div className="login__form-group">
                <label for="email">Email</label>
                <br />
                <input type="email" className="form-control" placeholder="" />
              </div>
              <div className="login__form-group">
                <label for="email">Password</label>
                <br />
                <input type="pwd" className="form-control" placeholder="" />
              </div>
              <div className="login__form-btn">
                <button type="submit" className="login__form-btn--colored">
                  Log In
                </button>
                <p>
                  Not a member?{" "}
                  <span>
                    <Link to="/registration">Register</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
