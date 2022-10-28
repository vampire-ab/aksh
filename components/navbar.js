import React from 'react'

const Navbar = () => {
  return (
    <div className="items-center justify-between flex fixed w-full flex-col md:flex-row bg-white shadow-gray-400 shadow-md h-[100px] z-[1000]">
      <nav className=" rounded-xl m-2 bg-white">
        <header className="bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 text-2xl md:text-4xl text-center font-bold text-transparent md:m-3 m-2">AKSH INVESTMENT</header>
        <h2 className='md:m-2 md:font-semibold text-right m-2'>DISCOVER THE NEW STYLE OF INVESTING</h2>
      </nav>
      <nav className="rounded-xl m-2 bg-white flex flex-wrap justify-center items-center">        
        <h2 className='md:m-2 m-1 md:font-semibold text-right md:p-7 p-3 bg-blue-400 rounded-lg text-white'>HOME</h2>
        <h2 className='md:m-2 m-1 md:font-semibold text-right md:p-7 p-3'>BLOGS</h2>
        <h2 className='md:m-2 m-1 md:font-semibold text-right md:p-7 p-3'>CONTACT</h2>
      </nav>
    </div>
  )
}

export default Navbar