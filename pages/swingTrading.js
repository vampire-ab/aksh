import React from "react";
import SwingTrading from "../public/SwingTrading.svg";
import Image from "next/image";
const swingTrading = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="fixed z-[1] flex justify-center w-screen top-10">
        <Image src={require("../public/Swing.gif")} className="relative " />
      </div>
      <div className="z-[3] relative grid grid-cols-1 space-y-16">
        <div className="bg-white rounded shadow-md md:w-10/12 grid grid-cols-1 items-center justify-center mx-auto p-4">
          <div className=" font-bold tracking-[10px] text-2xl m-3">
            WHAT IS SWING TRADING ?
          </div>
          <div className="tracking-wider text-xl flex justify-center items-center mx-3">
            Swing trading is a type of trading strategy used by traders to
            profit from short-term price movements in financial markets. Swing
            traders typically hold a position for a few days to a few weeks,
            with the goal of capturing gains from short-term price swings.
          </div>
          <div className="w-2/5 flex justify-center items-center mx-auto">
            <SwingTrading className="w-full m-auto" />
          </div>
        </div>
        <div className="bg-white rounded shadow-md md:w-10/12 grid grid-cols-1 items-center justify-center mx-auto p-4">
          <div className=" font-bold tracking-[10px] text-2xl m-3">
            Implementation
          </div>
          <div className="tracking-wider text-xl flex justify-center items-center mx-3">
            To implement a swing trading strategy, traders typically use
            technical analysis tools to identify potential trading
            opportunities. They may look for patterns in charts, use technical
            indicators, or examine market trends and sentiment to identify
            potential entry and exit points for trades. It's important to note
            that swing trading may not be suitable for everyone, and traders
            should carefully consider their financial goals, risk tolerance, and
            level of experience before using this strategy.
          </div>
          <div className="w-2/5 flex justify-center items-center mx-auto">
            <Image src={require("../public/swingExample.jpg")} className="w-full m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default swingTrading;
