import React from 'react'
import { useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect';

const Faq = () => {

  return (
    <div className="flex items-center justify-center bg-slate-800 flex-col md:flex-row p-6">
      <div className="flex-1 justify-center items-center m-10">
        <div className="h-[500px] w-[500px] bg-red-500 rounded-full">
          <img />
        </div>
      </div>
      <div className=" text-blue-50 text-3xl flex-1">
        <div classNAme="flex gap-40">
          <div>Why Us?</div>
          <div>
            <Typewriter
              options={{
                strings: ["End-to-End Support", "Experienced Investment Team", "Transparency", "Flexibility", "Customized Investment Plan", "Active Monitoring"],
                autoStart: true,
                delay: 75,
                loop: true,
                className: "text-white"
              }}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Faq;