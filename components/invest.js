import { Button } from '@mui/material'
import React from 'react'
import DataTrends from "../public/DataTrends.svg"

const Invest = () => {
  return (
    <div className='top-[100px] relative h-[700px] flex justify-around rounded-tr-full rounded-bl-full bg-blue-300'>
      <div className='absolute w-[70vw] right-0 lg:right-20 lg:bottom-18 bottom-40 sm:bottom-10 md:bottom-0 md:right-10'>
        <DataTrends className="" />
      </div>
      <div className="ml-20 md:ml-24 mt-40 font-semibold text-lg md:font-bold md:text-3xl w-[100vw] text-white z-10 align-middle">
        <p className='md:mt-7 w-2/3 z-10 my-3'>Explore the life you want to live.</p>
        <p className='md:w-1/2 z-10'>Put your money to work.</p>
        <Button className="hover:opacity-80 lg:ml-0 sm:m-0 whitespace-normal flex-wrap left-8 lg:left-20 bg-gradient-to-r from-blue-500 to-blue-400 text-white mt-3 md:mt-9 md:ml-5">
          Get in Touch
        </Button>
      </div>
    </div>
  )
}

export default Invest