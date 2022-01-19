import React from "react";
import Navbar from "../layouts/Navbar";

const Registration = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="register__container">
          <div className="register__container__content">
            <h4>Register Here</h4>
            <p>Provide the Following details</p>
            <form>
              <div className="register__form-group">
                <div>
                  <label for="email">First Name</label>
                  <br />
                  <input type="email" className="form-control" placeholder="" />
                </div>

                <div>
                  <label for="email">Last Name</label>
                  <br />
                  <input type="pwd" className="form-control" placeholder="" />
                </div>
              </div>

              <div className="register__form-group">
                <div>
                  <label for="email">Username</label>
                  <br />
                  <input type="email" className="form-control" placeholder="" />
                </div>
              </div>

              <div className="register__form-group">
                <div>
                  <label for="email">Password</label>
                  <br />
                  <input type="pwd" className="form-control" placeholder="" />
                </div>
              </div>

              <div className="register__form-group">
                <div>
                  <label for="email">Email</label>
                  <br />
                  <input type="email" className="form-control" placeholder="" />
                </div>
              </div>

              <div className="register__form-group">
                <div>
                  <label for="email">Location</label>
                  <br />
                  <input type="pwd" className="form-control" placeholder="" />
                </div>
              </div>

              <div className="register__form-group register__form-group--btn">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Registration;
