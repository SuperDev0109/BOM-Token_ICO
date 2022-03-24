import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetStarted from "./GetStarted";

export default function UniqueNFT() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  return (
    <>
      <div id="Services" className="uniqueNFT py-24 md:py-32">
        <div className="max-w-760 mx-auto text-center mb-16">
          <h2 className="heading-primary">20,000+ Unique NFTs</h2>
          <p className="sub-heading">
            Our Non-Fungible Tokens will function as the licenses to use BOM.
            Each company who intends to participate will have to acquire their
            own NFT.
          </p>
          <GetStarted />
        </div>
        <div className="max-w-1280 mx-auto">
          <Slider className="slickNft" {...settings}>
            <div>
              <div className="card-nft">
                <img src={"/images/nft.png"} />
              </div>
            </div>
            <div>
              <div className="card-nft">
                <img src={"/images/nft2.png"} />
              </div>
            </div>
            <div>
              <div className="card-nft">
                <img src={"/images/nft3.png"} alt="" />
              </div>
            </div>
            <div>
              <div className="card-nft">
                <img src={"/images/nft.png"} />
              </div>
            </div>
            <div>
              <div className="card-nft">
                <img src={"/images/nft2.png"} />
              </div>
            </div>
            <div>
              <div className="card-nft">
                <img src={"/images/nft3.png"} />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
