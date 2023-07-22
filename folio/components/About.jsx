import React from "react"
import Image from 'next/image';

export const About = () => {
  return (
    <div id="about" className="flex flex-wrap items-center justify-center">
      <div className="w-full md:w-1/2">
        <h2 className="py-10 text-4xl font-medium text-blue-500 md:text-5xl">About Me</h2>
        <p className="max-w-2xl py-5 mx-auto leading-8 text-gray-400 text-md md:text-lg">
          Hi there! My name is Tiffany Pietersen and I am a FullStack Developer. I am passionate about learning new technologies and
          finding new ways to solve problems. I enjoy working on projects that have a positive impact on people's lives.
        </p>
      </div>
      <div className="w-full md:w-1/2 padding-left">
        <Image src="/../public/assets/me.jpg" alt="ME" width={300} height={300} />
      </div>
    </div>
  );
};

