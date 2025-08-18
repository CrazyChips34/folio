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
           <p className="max-w-2xl px-2 py-1 mx-auto text-sm text-gray-700 md:text-md">
            Hi there! My name is <span className="font-semibold">Tiffany Pietersen</span>, and I am a 
            <span className="font-semibold"> Full Stack Developer</span> with a passion for technology and 
            creating solutions that make a real difference. I earned my diploma in Software Development at 
            IIE Rosebank College. My love for tech started at home—my dad was always building and fixing 
            computers, and his passion for problem-solving inspired me to pursue this path.
            <br/>
            <br/>
            Outside of coding, I enjoy activities that keep me creative and balanced. Whether it&apos;s 
            <span className="font-semibold"> e-sports, reading, baking, music, or writing</span>, I find these 
            hobbies give me new perspectives that often carry over into how I approach challenges as a developer. 
            My faith also plays an important role in shaping who I am, reminding me to stay grounded and purposeful 
            in everything I do.
            <br/>
            <br/>
            I am currently working at <span className="font-semibold">Appmaniazar as a Software Developer</span>, 
            where I build and maintain applications and websites that bring ideas to life. This role allows me to 
            apply my technical skills in real-world projects while continuing to grow as a professional. My ultimate 
            goal is to keep expanding my knowledge and use technology to make a positive impact on people&apos;s lives.
          </p>
      </div>
      <div className="w-auto h-auto p-5 pt-5 m-auto rounded-lg px-7">
        <Image className="ease-in-out rounded-lg hover:animate-pulse"src={PortfolioImg} alt="ME" width={800} height={800} />{/*Image needs to stay the same size when screen gets smaller*/}
      </div>
    </div>
  </div>
  );
};

