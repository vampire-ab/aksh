import React from 'react'
import { useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect';
import GroupsIcon from '@mui/icons-material/Groups';

const WhyUs = () => {

  return (
    <div className="flex items-center justify-center bg-sitebg flex-col md:flex-row p-6 relative top-[120px]">
      <div className="flex-1 justify-center items-center m-10">
        <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] bg-red-500 rounded-full items-center justify-center flex ml-10">
          <GroupsIcon className='h-[200px] w-[200px] md:h-[300px] md:w-[300px] text-white rotateX-180 duration-1000' />
        </div>
      </div>
      <div className= "text-3xl flex-1">
        <div className="flex flex-col justify-center">
          <div className = "p-3 text-center md:text-left">Why Us?</div>
          <div className='p-2'>
            <Typewriter
              options={{
                strings: ["End-to-End Support", "Experienced Investment Team", "Transparency", "Flexibility", "Customized Investment Plan", "Active Monitoring"],
                autoStart: true,
                delay: 75,
                loop: true,                
              }}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default WhyUs;