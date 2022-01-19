import React from "react";
import Navbar from "../layouts/Navbar";
import ImageOne from "../assets/images/image1.png";


const Hire = () => {
  return (
    <div>
      <Navbar />
      <main className="hire__container">
        <section>
          <div className="hire__container__content">
            <div className="hire__container__img">
              <img src={ImageOne} alt="" />
            </div>

            <div className="hire__container__details">
              <h4>Akodu Yunus</h4>
              <p className="hire__container__job-title">
                <b>Carpentry</b>
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="card__star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              <button>Contact me</button>
            </div>
          </div>

          <div className="hire__container__description">
            <div>
              <p>from: Isreal</p>
              <p>Members since: Aug 2000</p>
              <p>Last delivery: 1 month ago</p>
            </div>

            <div className="hire__container__description--extra-info">
              <p>
                Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hire;
