import React from "react";
import Image from "next/image";
import Statistics from ".//svg/statistics-bro.svg";
import Money from ".//svg/money.svg";
// import BullBear from "/BullBear1.png";
const Main = () => {
  return (
    <div className="relative min-h-[640px] top-[120px] justify-center flex flex-wrap gap-10 p-7">
      <style jsx>{`
        .linearGradient{
          background: linear-gradient(-50deg, #60A5FA 30%, rgba(255, 255, 255, 100) 70%, #60AFFF 100%);
        }
      `}</style>
      <div className="h-full flex flex-col items-center justify-center">
        <h2 className="bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 text-transparent font-bold text-4xl">
          THE ART
        </h2>
        <Money
          preserveAspectRatio="none"
          className="text-black w-[700px] -my-16"
        />
      </div>
      <div className="max-w-md h-full items-center justify-center">
        <h2 className="bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 text-transparent font-bold text-4xl text-center">
          THE ARTIST
        </h2>
        <div className="linearGradient p-5 rounded-lg mt-7">
          <h3 className="font-semibold text-3xl text-center p-6">
            TECHNICAL ANALYSIS
          </h3>
          <div className="h-full">
            <p className="my-5">
              Technical analysis is a tool, or method, used to predict the
              probable future price movement of a security - such as a stock or
              currency pair - based on market data.
            </p>

            <p className="my-5">
              The theory behind the validity of technical analysis is the notion
              that the collective actions - buying and selling - of all the
              participants in the market accurately reflect all relevant
              information pertaining to a traded security, and therefore,
              continually assign a fair market value to the security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
