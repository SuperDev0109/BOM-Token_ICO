import React from "react";
import GetStarted from "./GetStarted";

export default function Vision() {
  return (
    <div
      id="Vision"
      className="visionBox bg-visionBg bg-100% bg-no-repeat  w-5/6 mx-auto"
    >
      <div className="mx-auto">
        <div className="mx-0 md:-mx-4 flex flex-wrap items-end text-white">
          <div className="flex items-center justify-center lg:hidden w-full mb-4">
            <img src={"/images/visionIcon.png"} alt="" />
            <h2 className="ml-2 font-sansation text-40 leading-42 font-bold">
              BOM’s
              <br /> Grand Vision
            </h2>
          </div>
          <div className="md:w-6/12 w-full">
            <div className="px-4">
              <img src={"/images/vision.png"} />
            </div>
          </div>
          <div className="md:w-6/12 w-full">
            <div className="max-w-595 text-center lg:text-left px-4 mx-auto">
              <div className="hidden lg:flex items-center">
                <img src={"/images/visionIcon.png"} alt="" />
                <h2 className="ml-2 font-sansation text-40 leading-42 font-bold">
                  BOM’s
                  <br /> Grand Vision
                </h2>
              </div>
              <p className="text-20 leading-30 my-7">
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
