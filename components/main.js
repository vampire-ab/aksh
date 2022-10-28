import React from 'react'
import Image from 'next/image'
import Statistics from './/svg/statistics-bro.svg'
import Money from ".//svg/money.svg"
// import BullBear from "/BullBear1.png";
const Main = () => {
  return (
    <div className='relative min-h-[640px] top-[100px] justify-center flex flex-wrap gap-10 p-7'>
      <div className='h-full flex flex-col items-center justify-center'>
        <h2 className='font-bold text-4xl'>THE ART</h2>
        <Money className="text-black h-[630px]" />
      </div>
      <div className="h-full items-center justify-center">
        <h2 className='font-bold text-4xl text-center'>THE ARTIST</h2>
        <h3 className='font-semibold text-3xl'>TECHNICAL ANALYSIS</h3>
        <div>
          <p>

          </p>
        </div>
      </div>
    </div>
  )
}

export default Main;