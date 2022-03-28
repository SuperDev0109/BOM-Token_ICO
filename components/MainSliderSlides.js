import React from "react";

import Button from "./Button";
import GetStarted from "./GetStarted";
import SocialIcons from "./SocialIcons";

function MainSliderSlides(props) {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start itmes-center lg:items-end w-5/6 mx-auto">
      <div className="w-full md:w-7/12">
        <div className="w-full text-center md:text-left max-w-full md:max-w-2xl mb-4 md:pb-20">
          <h3 className="flex text-16 sm:text-20 items-center justify-center md:justify-start mb-2 tracking-3 text-primary">
            {props.subhead}
            <img
              src={"/images/slider-logo-icon.png"}
              className="w-6 h-6 object-contain"
            />
          </h3>
          <h2 className="font-sansation text-27 md:text-60 leading-tight sm:leading-70 font-bold text-center md:text-left mx-auto md:mx-0 max-w-xl mb-2">
            {props.slideTitle}
          </h2>
          <p className="text:16 sm:text-20">{props.slideDescription}</p>
          <div className="slide_buttons_Wrapper flex items-center justify-center md:justify-start mt-8 md:mt-16">
            <GetStarted />
            <Button title="Whitepaper" />
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className="w-full md:w-5/12">
        <img src={"/images/mainsSlider.png"} className="mx-auto" />
      </div>
    </div>
  );
}

export default MainSliderSlides;
