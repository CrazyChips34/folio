import React from "react"
import Image from 'next/image';

export const About = () => {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center pt-8 pb-16 min-h-screen'>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className='col-span-2'>
         <h2 className="py-5 text-4xl font-medium text-blue-500 md:text-5xl">
          About Me
          </h2>
          <p className="max-w-2xl py-1 px-5 mx-auto text-gray-400 text-sm md:text-md">
          Hi there! My name is Tiffany Pietersen and I am a Full Stack Developer with a passion for technology and finding innovative solutions to complex problems. 
          I got my diploma in Software Development at IIE Rosebank College. 
          It is through my dad that helped spark my interest in going into the technology field at he was very passionate about building and fixing machines especially computers, and it ultimately led me to pursue it as a career.
          </p>
          <p className="max-w-2xl py-1 px-5 mx-auto text-gray-400 text-sm md:text-md">
          In addition to my interest in being a Full Stack Developer, I have a variety of hobbies that keep me busy and help me approach problem-solving from a fresh perspective. 
          I love spending time outdoors and exploring nature through hiking and playing soccer with friends. 
          When I'm not outside, I enjoy indulging in my love for e-games, reading, and baking.
          </p>
          <p className="max-w-2xl py-1 px-5 mx-auto text-gray-400 text-sm md:text-md">
          My curiosity and interest in technology go beyond my work as a developer. 
          I am always seeking new ways to expand my knowledge and skills, whether it's through reading blogs, or participating in online tutorials.
          </p>
          <p className="max-w-2xl py-1 px-5 mx-auto text-gray-400 text-sm md:text-md">
          Currently, I am doing a learnership at CapaCiTi, which is providing me with valuable real-world experience and allowing me to apply my technical skills in a professional setting. 
          I am excited to continue learning and growing as a Full Stack Developer, and I am committed to using my skills to make a positive impact on people's lives through software development.
          </p>
        
      </div>
      <div className="px-7 m-auto rounded-lg p-5 h-auto w-auto">
        <Image className="rounded-lg hover:animate-pulse ease-in-out"src="/../public/assets/me.jpg" alt="ME" width={400} height={500} />
      </div>
    </div>
  </div>
  );
};

