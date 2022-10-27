import React from 'react'


const Services = () => {
  return (
    <div className='top-[120px] relative p-12 bg-blue-400 '>
      <header className="font-semibold text-2xl text-white">OUR SERVICES</header>
      <div className='m-8'>
        <div className="max-w-sm rounded-md overflow-hidden shadow-md bg-white shadow-white hover:-translate-y-1 ease-in-out">
          {/* <img className="w-full object-cover" src = "/MutualFunds.jpeg" alt="Mutual Funds" /> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mutual Funds</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Hashtags if any</span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services