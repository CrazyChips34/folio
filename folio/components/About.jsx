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
          Hi there! My name is Tiffany Pietersen, and I am a Full Stack Developer, with a passion for technology and finding innovative solutions to complex problems. 
          I got my diploma in Software Development at IIE Rosebank College. 
          It is my dad that helped spark my interest in going into the technology field, where he was very passionate about building and fixing machines particularly computers, and it ultimately led me to pursue it as a career.
          <br/>
          <br/>
          In addition to my interest in being a Full Stack Developer, I have a variety of hobbies that keep me busy and help me approach problem-solving from a fresh perspective. 
          I love spending time outdoors and exploring nature through hiking and playing soccer with friends. 
          When I&apos;m not outside, I enjoy indulging in my love for e-sports, reading, and baking.
          <br/>
          <br/>
          My curiosity and interest in technology go beyond my work as a developer. 
          I am always seeking new ways to expand my knowledge and skills, whether it&apos;s through reading blogs, or participating in online tutorials.
          <br/>
          <br/>
          Currently, I am doing a learnership at CapaCiTi, which is providing me with valuable real-world experience and allowing me to apply my technical skills in a professional setting. 
          I am excited to continue learning and growing as a Full Stack Developer, and I am committed to using my skills to make a positive impact on people&apos;s lives through software development.
          
          </p>
        
      </div>
      <div className="w-auto h-auto p-5 pt-5 m-auto rounded-lg px-7">
        <Image className="ease-in-out rounded-lg hover:animate-pulse"src={PortfolioImg} alt="ME" width={800} height={800} />{/*Image needs to stay the same size when screen gets smaller*/}
      </div>
    </div>
  </div>
  );
};

