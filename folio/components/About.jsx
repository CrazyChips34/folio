import React from "react"
import Image from 'next/image';
import PortfolioImg from "../public/assets/me.png"

export const About = () => {
  return (
    <div id="about" className='flex items-center w-full min-h-screen p-2 pt-8 pb-16 md:h-screen'>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className='col-span-2'>
         <h2 className="py-5 text-4xl font-medium text-blue-500 md:text-5xl">
          About Me
          </h2>
          
        
      </div>
      <div className="w-auto h-auto p-5 m-auto rounded-lg px-7">
        <Image className="ease-in-out rounded-lg hover:animate-pulse"src={PortfolioImg} alt="ME" width={800} height={800} />
      </div>
    </div>
  </div>
  );
};

