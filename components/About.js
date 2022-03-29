import React from "react";
import GetStarted from "./GetStarted";

export default function About() {
  return (
    <div
      className="visionBox bg-none pb-16 md:pb-18 bg-cover bg-no-repeat relative  w-5/6 mx-auto pt-48"
      id="About"
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
                To demonstrate the principles of the ecosystem, we’ve created an
                analogy that highlights the elements of BOM’s mechanism: we
                provide the rails for the roller coaster (blockchain
                technology), which synergizes with companies' already existing
                power sources, represented by the plane, and tank. The more
                powerful a company that partners with BOM is, the more profits
                it will get from the overall transaction revenue, because it can
                tow more users on the rails, resulting in increased profits.
              </p>
              <GetStarted />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
