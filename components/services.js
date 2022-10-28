import React from 'react'
import MoneyIncome from ".//svg/moneyIncome.svg"
import Portfolio from ".//svg/portfolio.svg"
import Training from ".//svg/training.svg"

const Services = () => {
  return (
    <div className='top-[120px] min-h-[640px] relative p-12 bg-blue-400'>
      <style jsx>{`
        .linearGradient{
          background: linear-gradient(-180deg, #60A5FA 20%, rgba(255, 255, 255, 100) 10%));
        }
      `}</style>
      <header className="font-semibold text-2xl text-white">OUR SERVICES</header>
      <div className='md:m-8 pt-5 flex flex-wrap justify-center items-center gap-7'>
        <div className="max-w-sm h-96 rounded-lg overflow-hidden hover:shadow-md bg-white shadow-gray-700 hover:-translate-y-1 linearGradient">      
          <div className="px-1 md:px-6 pb-4 flex flex-col justify-center">
            <div className='flex justify-center'>
              <MoneyIncome className="h-44"/></div>
            <div className="font-bold text-xl mb-2">Mutual Funds</div>
            <p className="text-gray-700 text-base ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Hashtags if any</span>            
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden hover:shadow-md bg-white shadow-gray-700 hover:-translate-y-1 linearGradient">      
          <div className="px-1 md:px-6 pb-4 flex flex-col justify-center">
            <div className='flex justify-center'>
              <Portfolio className= "h-44" /></div>
            <div className="font-bold text-xl mb-2">Portfolio Management</div>
            <p className="text-gray-700 text-base ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Hashtags if any</span>            
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden hover:shadow-md bg-white shadow-gray-700 hover:-translate-y-1 linearGradient">      
          <div className="px-1 md:px-6 pb-4 flex flex-col justify-center">
            <div className='flex justify-center'>
              <Training className= "h-44" /></div>
            <div className="font-bold text-xl mb-2">Training Programs</div>
            <p className="text-gray-700 text-base ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Hashtags if any</span>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services