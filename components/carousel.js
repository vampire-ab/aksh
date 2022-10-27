import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
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
    {
      id: "3",
      title: "Investment",
      icon: "#",
      img: "https://www.wealthandfinance-news.com/wp-content/uploads/2020/10/stocks.jpg",
    },
  ];

  return (
    <div className="h-[500px] flex items-center justify-center bg-sitebg">
      <div className="h-full flex-col md:flex-row md:h-[350px] flex ease-out duration-1000 rounded-3xl">

        <ArrowBackIosIcon className="h-full cursor-pointer text-black" onClick={() => setCurrentSlide((currentSlide + 1) % data.length)} />

        <div className="w-[85%] m-3 h-[150px] my-[15px] md:my-0 md:w-[700px] md:h-full bg-white rounded-3xl flex justify-center items-center">          
          <img className="w-full h-full rounded-3xl" src={data[currentSlide].img} alt="Project Here!" />
        </div>

        <ArrowForwardIosIcon className="h-full cursor-pointer text-black ml-[5px]" onClick={() => setCurrentSlide((currentSlide + 1) % data.length)} />
      </div>
    </div>
  );
}