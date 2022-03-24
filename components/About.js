import React from "react";
import GetStarted from "./GetStarted";

export default function About() {
  return (
    <div
      id="About"
      className="visionBox bg-none pt-1 pb-16 md:pb-18 bg-cover bg-no-repeat relative  w-5/6 mx-auto"
    >
      <div className="mx-auto text-white px-4 lg:text-left text-center">
        <div className="flex flex-wrap items-start -mx-4 flex-col-reverse lg:flex-row">
          <div className="cols-2 w-full lg:w-3/5 px-4">
            <img src={"/images/about.png"} />
          </div>
          <div className="cols-2 w-full lg:w-2/5 px-4">
            <div className="max-w-595 -mt-8 mx-auto">
              <img src={"/images/blockchain.png"} />
              <p className="text-20 leading-30 my-4">
                BOM’s world-class team dreamt of an ecosystem that propels
                businesses forward like nothing before, while highly rewarding
                investors and contributors throughout the process. We’ll allow
                countless businesses to benefit from blockchain technology that
                enables leveraging stocks as a payment method, rather than
                opting for third-party services and paying fees. Essentially,
                participants will be co-owners of the ecosystem.
              </p>
              <GetStarted />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
