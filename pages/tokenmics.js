import React from "react";
import { useEffect, useState } from "react";

const targetTime = new Date("2022-04-01").getTime();

export default function TokenSale() {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      id="Tokenmics"
      className="token_sale pt-0 md:pt-16 pb-10 md:pb-24  px-4"
    >
      <div className="container px-6 md:px-16 md:py-16 py-8  flex flex-wrap mx-auto max-w-1400 items-center bg-tokenBg border-4 border-tokenBorder rounded-xl">
        <div className="sale-image w-full md:w-2/5">
          <img
            className="w-full mb-6 md:mb-0 md:pr-10 max-w-90% mx-auto block md:max-w-full"
            src={"/images/wallet.png"}
          />
        </div>
        <div className="sale-metar w-full md:w-2/4 flex flex-wrap justify-center">
          <h3 className="text-26 md:text-40 font-bold font-sansation m-0 pb-1 pt-0">
            Token Sale Starts In
          </h3>
          <div className="timer w-full grid grid-cols-4 gap-5">
            <div className="hours text-center py-6">
              <div className="hours-box bg-blMenu text-white text-32 font-bold font text-center flex items-center justify-center max-w-140 h-70 md:h-110px">
                <span>{days}</span>
              </div>
              <h5 className="text-14 md:text-16 pt-4 uppercase">days</h5>
            </div>
            <div className="hours text-center py-6">
              <div className="hours-box bg-blMenu text-white text-32 font-bold font text-center flex items-center justify-center max-w-140 h-70 md:h-110px">
                <span>{hours}</span>
              </div>
              <h5 className="text-14 md:text-16 pt-4 uppercase">hours</h5>
            </div>
            <div className="hours text-center py-6">
              <div className="hours-box bg-blMenu text-white text-32 font-bold font text-center flex items-center justify-center max-w-140 h-70 md:h-110px">
                <span>{minutes}</span>
              </div>
              <h5 className="text-14 md:text-16 pt-4 uppercase">minutes</h5>
            </div>
            <div className="hours text-center py-6">
              <div className="hours-box bg-blMenu text-white text-32 font-bold font text-center flex items-center justify-center max-w-140 h-70 md:h-110px">
                <span>{seconds}</span>
              </div>
              <h5 className="text-14 md:text-16 pt-4 uppercase">seconds</h5>
            </div>
          </div>
          <div className="range-box w-full mt-7 mb-10">
            <div className="labels flex flex-wrap justify-between">
              <span className="text-16 text-white font-Roboto">0</span>{" "}
              <span className="text-16 text-white font-Roboto">1.4M</span>
            </div>
            <div className="range bg-white h-4 rounded-xl w-full flex"></div>
            <div>
              {" "}
              <input
                className="slider hidden bg-white h-4 rounded-xl w-full flex"
                type="range"
                min="1"
                max="100"
                value="50"
              />
            </div>
            <h5 className="text-16 font-bold capitalize mt-4 font-Roboto">
              Token Hardcap
            </h5>
          </div>
          <a href="" className="btn-primary">
            Buy More Tokens
          </a>
        </div>
      </div>
    </div>
  );
}
