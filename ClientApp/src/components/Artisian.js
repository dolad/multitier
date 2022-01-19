import React from "react";
import Navbar from "../layouts/Navbar";

const Artisian = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="register__container">
          <div className="register__container__content">
            <h4>Artisan Documentation Page</h4>
            <p>Provide the Following details</p>
            <form>
              <div className="register__form-group">
                <div>
                  <label for="number">Licensed Number</label>
                  <br />
                  <input type="email" className="form-control" placeholder="" />
                </div>
              </div>

              <div className="register__form-group">
                <div>
                  <label for="organization">Licensed Organisation</label>
                  <br />
                  <input type="email" className="form-control" placeholder="" />
                </div>
              </div>

              <div className="register__form-group">
                <div>
                  <label for="skill">Skill</label>
                  <br />
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>

              <div className="register__form-group">
                <div>
                  <label for="location">Location</label>
                  <br />
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>

              <div className="register__form-group">
                <div>
                  <label for="description">Description</label>
                  <br />
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>

              <div className="register__form-group register__form-group--btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Artisian;
