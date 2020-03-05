import React from "react";
import "./foodpageintro.css";
import { Animated } from "react-animated-css";

const FoodPageIntro = () => {
  return (
    <Animated animationIn="fadeIn" animationInDuration={2000} isVisible={true}>
      <div>
        <div className="foods-main">
          <div className="overlay"></div>
          <div className="food-main__title">
            <Animated
              animationIn="flipInX"
              animationInDuration={2000}
              isVisible={true}>
              <div className="food-main__big-title">Food articles</div>
            </Animated>

            <div className="food-main__sub-title">
              <span>Home ></span>
              <span>Foods ></span>
            </div>
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default FoodPageIntro;
