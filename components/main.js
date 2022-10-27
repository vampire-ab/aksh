import React from 'react'
import Image from 'next/image'
import Statistics from './/svg/statistics-bro.svg'
// import BullBear from "/BullBear1.png";
const Main = () => {
  return (
    <div className='relative top-[100px] h-[600px] justify-center flex items-center flex-wrap'>
      <Statistics className="text-black h-full" />
      <div className="">
        {/* <h1>What do we do?</h1> */}
        <h2>TECHNICAL ANALYSIS</h2>
        
      </div>
    </div>
  )
}

export default Main;