import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    //Same as data.js
    {
      id: "1",
      title: "Mutual Funds",
      icon: "#",
      img: "https://images.ctfassets.net/usf1vwtuqyxm/3QQaEkThAnIAiXveGhJYD9/f79a571dbe9fd456d65e783040601fdc/hogwarts-castle-.jpg",
    },
    {
      id: "2",
      title: "Investment",
      icon: "#",
      img: "https://www.wealthandfinance-news.com/wp-content/uploads/2020/10/stocks.jpg",
    },
  ];

  const handleClick = (way) => {
    if (way === "left")
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length-1);
    else {
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
  };
  return (
    <div className="h-[500px] flex items-center justify-center">
      <div
        className="h-full flex-col md:flex-row md:h-[350px] flex absolute ease-out duration-1000 left-0 rounded-3xl"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          
          <div className="w-[100vw] flex items-center justify-center">
            
            <div className="w-[85%] h-[150px] my-[15px] md:my-0 md:w-[700px] md:h-full bg-white rounded-3xl flex justify-center items-center">
              {/* <div className="flex basis-1/3 items-center justify-center h-[80%]">
                <div className="h-full w-full md:w-[90%] md:h-[70%] flex flex-col justify-between"> */}
                  {/* <div className="w-20 h-20 md:w-40 md:h-40 rounded-2xl flex items-center justify-center">
                    <img src={d.icon} alt="Mobile.png" className="w-[25px] md:w-16"/>
                  </div> */}
                  {/*  */}
                  {/* <p className="hidden md:text-sm">{d.desc}</p> */}
                  {/* <span className="cursor-pointer underline font-semibold text-[12px]">Projects</span> */}
                {/* </div>
              </div> */}
              {/* <div className="basis-2/3 h-[80%] flex items-center justify-center overflow-hidden"> */}
                <img className = "w-full h-full rounded-3xl" src={d.img} alt="Project Here!" />
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
      {/* <img
        src="#"
        alt="Left Arrow"
        className= "absolute h-52 cursor-pointer left-96 rotate-180 hidden md:block"
        
      /> */}      
      <ArrowBackIosIcon className= "absolute h-52 cursor-pointer left-96 hidden md:block z-10" onClick={() => handleClick("left")} />
      <ArrowForwardIosIcon className="absolute h-52 cursor-pointer right-96 z-10" onClick={() => handleClick("right")} />
      {/* <img
        src="#"
        alt="Right Arrow"
        className="absolute h-52 cursor-pointer right-96 rotate-180"
        
      /> */}
    </div>
  );
}