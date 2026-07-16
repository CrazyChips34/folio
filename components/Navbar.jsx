"use client";

import React, { use } from 'react';
import { BsFillHouseFill, BsFillPersonFill, BsGrid1X2Fill, BsFillGearFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <div>
      {/*-----Top Bar-----*/}
      <nav id='home' className='flex items-center justify-between py-8'>
        <h1 className='font-display text-lg tracking-tight text-ink'>
          tiffany<span className='text-coral'>.</span>dev
        </h1>
        <a
          className='px-5 py-2.5 text-sm font-semibold text-paper bg-ink rounded-full hover:bg-coral transition-colors'
          href='/Curriculum_Vitae _Of_Tiffany_Pietersen.pdf'
          target='_blank'
          rel='noreferrer'
          download
        >
          Download CV
        </a>
      </nav>

      {/*-----Floating Bottom Nav-----*/}
      <div className='fixed bottom-4 left-0 z-20 w-full flex justify-center px-4'>
        <nav className='flex items-center gap-1 px-2 py-2 bg-ink/95 backdrop-blur rounded-full shadow-lg'>
          <Link to='home' smooth={true} duration={500} className='cursor-pointer'>
            <div className='p-2.5 sm:p-3 rounded-full text-paper hover:bg-coral hover:text-ink transition-colors'>
              <BsFillHouseFill className='text-lg sm:text-xl' />
            </div>
          </Link>
          <Link to='about' smooth={true} duration={500} className='cursor-pointer'>
            <div className='p-2.5 sm:p-3 rounded-full text-paper hover:bg-coral hover:text-ink transition-colors'>
              <BsFillPersonFill className='text-lg sm:text-xl' />
            </div>
          </Link>
          <Link to='projects' smooth={true} duration={500} className='cursor-pointer'>
            <div className='p-2.5 sm:p-3 rounded-full text-paper hover:bg-coral hover:text-ink transition-colors'>
              <BsGrid1X2Fill className='text-lg sm:text-xl' />
            </div>
          </Link>
          <Link to='skills' smooth={true} duration={500} className='cursor-pointer'>
            <div className='p-2.5 sm:p-3 rounded-full text-paper hover:bg-coral hover:text-ink transition-colors'>
              <BsFillGearFill className='text-lg sm:text-xl' />
            </div>
          </Link>
          <Link to='contact' smooth={true} duration={500} className='cursor-pointer'>
            <div className='p-2.5 sm:p-3 rounded-full text-paper hover:bg-coral hover:text-ink transition-colors'>
              <BsFillEnvelopeFill className='text-lg sm:text-xl' />
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};
