import React from "react";
import GetStarted from "./GetStarted";

export default function PrivateSales() {
  return (
    <>
      <div
        id="Roadmap"
        className="visionBox py-16 md:py-36 bg-cover bg-no-repeat"
      >
        <div className="max-w-760 mx-auto text-center mb-16">
          <h2 className="heading-primary">Private Sales</h2>
          <p className="sub-heading">
            Our Non-Fungible Tokens will function as the licenses to use BOM.
            Each company who intends to participate will have to acquire their
            own NFT.
          </p>
        </div>
        <div className="container max-w-1400 grid md:grid-cols-2 grid-cols-1 justify-center md:gap-10 gap-20 mx-auto flex-wrap items-end text-white px-4">
          <div className="cols-2 md:text-left text-center">
            <div className="md:-mt-2 mt-0">
              <img src={"/images/nftsale.png"} />
              <h3 className="md:text-40 text-32 font-bold font-sansation m-0 pb-1 pt-4">
                NFT Sale
              </h3>
              <p className="md:text-20 text-16 md:leading-30 leading-6 mt-1 mb-6">
                With cryptocurrencies becoming more acceptable, BOM NFTs are the
                next big evolution in the digital space. With our NFTs,
                businesses can purchase BOM licenses and reserve the rights to
                sell to others for profit.
              </p>
              <GetStarted />
            </div>
          </div>
          <div className="cols-2 md:text-left text-center">
            <div className="md:-mt-2 mt-0">
              <img src={"/images/tokensale.png"} />
              <h3 className="md:text-40 text-32 font-bold font-sansation m-0 pb-1 pt-4">
                Token Sale
              </h3>
              <p className="md:text-20 text-16 md:leading-30 leading-6 mt-1 mb-6">
                BOM tokens are based on the ERC20 standard which allows
                exchanges with other digital assets. Users can buy and sell
                these tokens even as the value is expected to rise steadily.
              </p>
              <GetStarted />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
