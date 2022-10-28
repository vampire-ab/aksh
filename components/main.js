import React from "react";
import Money from ".//svg/money.svg";

const Main = () => {
  return (
    <div className="relative min-h-[640px] top-[120px] justify-center flex flex-wrap gap-10 p-7">
      <style jsx>{`
        .linearGradient {
          background: linear-gradient(
            to left top,
            #60afff,
            #91bbff,
            #b4c9ff,
            #d0d8fe,
            #e7e8fe,
            #e7e8fe,
            #e7e8fe,
            #e7e8fe,
            #d0d8fe,
            #b4c9ff,
            #91bbff,
            #60afff
          );
        }
      `}</style>
      <div className="h-full flex flex-col items-center justify-center">
        <h2 className="bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 text-transparent font-bold text-4xl">
          THE ART
        </h2>
        <Money          
          className="overflow-x-hidden text-black w-[400px] md:w-[700px] md:-my-16"
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
            <div className="text-right text-blue-50 ">
              <p className="hover:text-blue-500 cursor-pointer">
                Read More <span>&#62;&#62;&#62;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
