import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsFillHouseFill, BsFillPersonFill, BsFillGearFill, BsFillChatFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      {/*-----Top NavBar-----*/}
      <nav className='flex justify-between py-10 mb-12' >
        <h1 id='home' className='text-xl uppercase font-Montserrat'>codedbytiffos</h1>
        <ul className='flex items-center'>
          <div className='flex items-center space-x-4'>
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='text-2xl cursor-pointer' />
            </li>
            <li>
              <Link
                className="px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r from-blue-300 to-blue-500"
                href="/../public/docs/Tiffany Pietersen CV.pdf"
                target="_blank"
                rel="noreferrer"
                download
              >
               CV
              </Link>
            </li>
          </div>
        </ul>
      </nav>

      {/*-----Floating Nav Bar-----*/}
      <div className='fixed bottom-0 left-0 z-10 w-full bg-transparent'>
        <nav className='flex items-center justify-center py-2 mx-auto bg-opacity-50 md:py-4 lg:py-6 max-w-7xl'>
          <ul className='flex items-center justify-center w-1/2 space-x-4 text-sm text-gray-500 md:space-x-6 lg:space-x-8 md:text-base'>
            <li className='p-2 border border-gray-200 rounded-full hover:bg-gray-200'>
              <Link to='home' smooth={true} duration={500}>
                <BsFillHouseFill className='text-2xl' />
              </Link>
            </li>
            <li className='p-2 border border-gray-200 rounded-full hover:bg-gray-200'>
              <Link to='about' smooth={true} duration={500}>
                <BsFillPersonFill className='text-2xl' />
              </Link>
            </li>
            <li className='p-2 border border-gray-200 rounded-full hover:bg-gray-200'>
              <Link to='skills' smooth={true} duration={500}>
                <BsFillGearFill className='text-2xl' />
              </Link>
            </li>
            <li className='p-2 border border-gray-200 rounded-full hover:bg-gray-200'>
              <Link to='contact' smooth={true} duration={500}>
                <BsFillEnvelopeFill className='text-2xl' />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

