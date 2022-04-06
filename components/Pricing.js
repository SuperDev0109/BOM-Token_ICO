import React from "react";
import BuyNow from "./BuyNow";

export default function Pricing() {
  return (
    <>
      <div className="pricing-section bg-pricing pt-16 md:pt-20 pb-16 md:pb-28 px-4 lg:px-0">
        <div className="max-w-800 mx-auto text-center mb-16">
          <h2 className="heading-primary">
            BUY BOM Token & 20,000+ Unique NFTs
          </h2>
          <p className="sub-heading">
            Our Non-Fungible Tokens will function as the licenses to use BOM.
            Each company who intends to participate will have to acquire their
            own NFT.
          </p>
        </div>
        <div className="container max-w-1400 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-white">
          <div className="cols-2 w-full bg-white/10 rounded-lg py-6 lg:py-12 px-6 lg:px-10">
            <div className="flex gap-6 md:gap-16 text-white">
              <div className="left-pricing w-2/4 text-center">
                <img className="mx-auto mb-6" src={"/images/token1.png"} />
                <h4 className="font-rubik text-16 md:text-28 uppercase">
                  Bomcoin
                </h4>
                <h5 className="font-rubik text-14 md:text-24 uppercase text-white/40 mb-6">
                  BOM
                </h5>
                <div className="price-box bg-white/30 rounded-lg p-2 md:p-5 inline-block">
                  <span className="font-rubik text-13 md:text-17">
                    1 BOM Token equals:
                  </span>
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="font-rubik uppercase line-through">$0.3</h3>
                    <h3 className="font-rubik text-20 md:text-35 uppercase font-bold">
                      $0.1
                    </h3>
                  </div>
                </div>
              </div>
              <div className="right-pricing w-2/4 text-center">
                <ul>
                  <li className="p-1 md:p-2 border-b border-white/10 ">
                    <h6 className="font-rubik text-13 md:text-17 text-white/40 md:leading-28 leading:18">
                      Total Supply:
                    </h6>
                    <p className="font-rubik text-13 md:text-17 leading-28">
                      100,000,000 BOM
                    </p>
                  </li>
                  <li className="p-1 md:p-2 border-b border-white/10">
                    <h6 className="font-rubik text-13 md:text-17 text-white/40 md:leading-28 leading:18">
                      Market Cap:
                    </h6>
                    <p className="font-rubik text-13 md:text-17 leading-28">
                      -
                    </p>
                  </li>
                  <li className="p-1 md:p-2 border-b border-white/10 ">
                    <h6 className="font-rubik text-13 md:text-17 text-white/40 md:leading-28 leading:18">
                      Volume (24h):
                    </h6>
                    <p className="font-rubik text-13 md:text-17 leading-28">
                      -
                    </p>
                  </li>
                </ul>
                <BuyNow kind="token" />
              </div>
            </div>
          </div>
          <div className="cols-2 w-full bg-white/10 rounded-lg py-6 lg:py-12 px-6 lg:px-10">
            <div className="flex gap-6 md:gap-16 text-white">
              <div className="left-pricing w-2/4 text-center">
                <img className="mx-auto mb-6" src={"/images/token2.png"} />
                <h4 className="font-rubik text-16 md:text-28 uppercase  ">
                  BOM NFT
                </h4>
                <h5 className="font-rubik text-14 md:text-24 uppercase text-white/40 mb-6">
                  BOM NFT
                </h5>
                <div className="price-box bg-white/30 rounded-lg inline-block p-2 md:p-5">
                  <span className="font-rubik text-13 md:text-17">
                    1 BOM NFT equals:
                  </span>
                  <h3 className="font-rubik text-20 md:text-35 uppercase font-bold">
                    $300
                  </h3>
                </div>
              </div>
              <div className="right-pricing w-2/4 text-center">
                <ul>
                  <li className="p-1 md:p-2 border-b border-white/10 ">
                    <h6 className="font-rubik text-13 md:text-17 text-white/40 md:leading-28 leading:18">
                      Total Supply:
                    </h6>
                    <p className="font-rubik text-13 md:text-17 leading-28">
                      20,000 BOM NFT
                    </p>
                  </li>
                  <li className="p-1 md:p-2 border-b border-white/10">
                    <h6 className="font-rubik text-13 md:text-17 text-white/40 md:leading-28 leading:18">
                      Market Cap:
                    </h6>
                    <p className="font-rubik text-13 md:text-17 leading-28">
                      -
                    </p>
                  </li>
                  <li className="p-1 md:p-2 border-b border-white/10 ">
                    <h6 className="font-rubik text-13 md:text-17 text-white/40 md:leading-28 leading:18">
                      Volume (24h):
                    </h6>
                    <p className="font-rubik text-13 md:text-17 leading-28">
                      -
                    </p>
                  </li>
                </ul>
                <BuyNow kind="nft" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
