"use client";
import React from "react"
import Image from 'next/image';
import PortfolioImg from "../public/assets/me.png"

export const About = () => {
  return (
    <div id="about" className='w-full py-24'>
      <div className="max-w-[1240px] m-auto grid md:grid-cols-3 gap-10 items-start">
        <div className="col-span-2">
          <p className="font-mono text-sm text-sage uppercase tracking-widest mb-2">About</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-6">
            A bit about me
          </h2>
          <div className="space-y-4 text-ink/75 leading-relaxed max-w-2xl">
            <p>
              Hi there! My name is <span className="font-semibold text-ink">Tiffany Pietersen</span>, and
              I&apos;m a developer with a passion for technology and creating solutions that make a real
              difference. I earned my diploma in Software Development at IIE Rosebank College. My love for
              tech started at home — my dad was always building and fixing computers, and his passion for
              problem-solving inspired me to pursue this path.
            </p>
            <p>
              Outside of coding, I enjoy activities that keep me creative and balanced — whether it&apos;s
              <span className="font-semibold text-ink"> e-sports, reading, baking, music, or writing</span>.
              These hobbies give me new perspectives that often carry over into how I approach challenges as
              a developer. My faith also plays an important role in shaping who I am, reminding me to stay
              grounded and purposeful in everything I do.
            </p>
            <p>
              I&apos;m currently working at <span className="font-semibold text-ink">Appmaniazar</span> as a
              software developer, where I build and maintain applications that bring ideas to life. My goal is
              to keep expanding my knowledge and use technology to make a positive impact on people&apos;s
              lives.
            </p>
          </div>
        </div>
        <div className="w-full relative">
          <div className="absolute -inset-3 -z-10 bg-rose/40 rounded-3xl -rotate-2"></div>
          <div className="rounded-3xl overflow-hidden border-4 border-ink rotate-1">
            <Image
              className="w-full h-auto object-cover"
              src={PortfolioImg}
              alt="Tiffany Pietersen"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
