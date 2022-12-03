import React from "react";
import { BsCheckCircleFill, BsFillPlayFill } from "react-icons/bs";
import "../Home/Home.css";
const Choose = () => {
  return (
    <div className="choose__section">
      <div className="choose__parant">
        <div>
          <img
            className="choose__main__img mb-2"
            src="https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2022/01/blog10.jpg"
            alt="Girl in a jacket"
          />
        </div>
        <div className="choose__body__parant">
          <div className="choose__body">
            <h5>WHY CHOOSE US</h5>
            <h3>For Excellent Performance We Focus on Critical.</h3>
            <p>
              Our agency can only be as strong as our peopleagenhave their
              businesses Duis aute irure dolorreprehDuis auteirur olor in
              reprehenderit in voluptate.
            </p>
            <div className="choose__list_item">
              <div>
                <li>
                  <BsCheckCircleFill className="color__orange" /> Business is
                  the best plan
                </li>
                <li>
                  <BsCheckCircleFill className="color__orange" /> How to improve
                  business
                </li>
                <li>
                  <BsCheckCircleFill className="color__orange" /> Services we
                  provide
                </li>
              </div>
              <div>
              <li>
                  <BsCheckCircleFill className="color__orange" /> Business is
                  the best plan
                </li>
                <li>
                  <BsCheckCircleFill className="color__orange" /> How to improve
                  business
                </li>
                <li>
                  <BsCheckCircleFill className="color__orange" /> Services we
                  provide
                </li>
              </div>
            </div>
          </div>
          <div className="choose__bottom__content pt-4">

            <div className="choose__bottom__main">
                <div>
                <img
            className="choose__bottom__img mb-2"
            src="https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/uploads/2022/01/blog11.jpg"
            alt="Girl in a jacket"
          />
                </div>
                <div>
                    <span className="play__btn pos"><BsFillPlayFill/></span>
                </div>
            </div>
            <div className="choose__bottom__right__content">
                <p>12/7 Support Team</p>
                <h4>+123-55-05800</h4>
            </div>






          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
