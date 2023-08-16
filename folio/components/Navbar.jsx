import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill, BsFillHouseFill, BsFillPersonFill, BsFillGearFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

export const Navbar = () => {
  // Initialize darkMode with a default value of true so default is light mode
  const [darkMode, setDarkMode] = useState(true); 


  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode); 
  };

  const buttonClassName = darkMode ? 'dark-mode' : 'light-mode';

  return (
    <div>
      {/*-----Top NavBar-----*/}
      <nav id='home' className='flex justify-between py-10 mb-12 dark:bg-gray-600' >
        <h1 className='text-xl uppercase font-Montserrat dark:text-white'>codedbytiffos</h1>
        <ul className='flex items-center'>
          <div className='flex items-center space-x-4'>
               
               
            {/** 
             * <li>
               <button onClick={handleDarkModeToggle} className={`text-2xl cursor-pointer ${buttonClassName}`}>
                     {darkMode ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
               </button>
               </li>
             * */} 
            <li>
              <a
                className="px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r from-blue-300 to-blue-500"
                href='/Curriculum_Vitae _Of_Tiffany_Pietersen.pdf'
                target="_blank"
                rel="noreferrer"
                download
              >
               CV
              </a>
            </li>
          </div>
        </ul>
      </nav>

      {/*-----Floating Nav Bar-----*/}
      <div className='fixed bottom-0 left-0 z-10 w-full bg-transparent'>
        <nav className='flex items-center justify-center py-2 mx-auto bg-opacity-50 md:py-4 lg:py-6 max-w-7xl'>
          <ul className='flex items-center justify-center w-1/2 space-x-4 text-sm text-gray-500 md:space-x-6 lg:space-x-8 md:text-base'>
            <li className='p-2 border border-gray-200 rounded-full hover:bg-gray-300'>
              <Link to='home' smooth={true} duration={500}>
                <BsFillHouseFill className='text-2xl' />
              </Link>
            </li>
            <li className='p-2 border border-gray-200 rounded-full hover:bg-gray-300'>
              <Link to='about' smooth={true} duration={500}>
                <BsFillPersonFill className='text-2xl' />
              </Link>
            </li>
            <li className='p-2 border border-gray-200 rounded-full hover:bg-gray-300'>
              <Link to='skills' smooth={true} duration={500}>
                <BsFillGearFill className='text-2xl' />
              </Link>
            </li>
            <li className='p-2 border border-gray-200 rounded-full hover:bg-gray-300'>
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

