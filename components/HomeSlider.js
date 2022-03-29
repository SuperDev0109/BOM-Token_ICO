import React from "react";
import MainSliderSlides from "./MainSliderSlides";
import Slider2 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vision from "./Vision";

export default function HomeSlider() {
  var settings = {
    autoplay: false,
    autoplaySpeed: 6000,
    speed: 2000,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const mainslide = [
    {
      subTitle: "The Digital Agency",
      title: "Revolutionizing Business Transaction",
      description:
        "BOM is a groundbreaking token system developed to completely enhance the way companies transact with clients",
    },
  ];
  return (
    <>
      <div
        id="Home"
        className="pt-10 md:pt-36 pb-10 md:pb-20 bg-none lg:bg-headerBg bg-[length:100%_100%]"
      >
        <div className="mx-auto px-5 xl:px-0">
          <Slider2 className="main-slider-wrapper" {...settings}>
            {mainslide.map((m, i) => (
              <MainSliderSlides
                key={i}
                subhead={m.subTitle}
                slideTitle={m.title}
                slideDescription={m.description}
              />
            ))}
            <Vision visionId="vision" />
          </Slider2>
        </div>
      </div>
    </>
  );
}
