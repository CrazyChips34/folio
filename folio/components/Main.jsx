import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import Link from 'next/link';


export const Main =() => {
    const [showName, setShowName] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // This function will be called after the component is mounted
    // and will set showName to true after a delay of 1 second
    const showNameAfterDelay = () => {
      setTimeout(() => {
        setShowName(true);
      }, 1000);
    };
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
    return (
        <div className={darkMode ? 'dark' : ''}>
        <div className='px-10 bg-white md:px-20 lg:px-40 dark:bg-gray-800'></div>
            <div className='p-10 text-center' >
            <p className='py-2 text-2xl md:text-3xl'>Hi, I'm </p>
            <h2 className='py-2 text-5xl font-medium text-blue-500 md:text-6xl'>Tiffany</h2>
            <h3 className='py-2 text-2xl md:text-3xl'>A FullStack Developer</h3>
            <p className='max-w-2xl py-5 mx-auto leading-8 text-gray-400 text-md md:text-lg'>
              I am passionate about learning new technologies and finding 
              new ways to solve problems. I enjoy working on projects that have a positive impact on people's lives.
            </p>
          </div>

          {/*-----Socials-----*/}
          <div className='flex justify-center gap-16 py-3 text-5xl text-gray-600'>
            <Link
               href='https://www.linkedin.com/in/tiffany-pietersen-1297b2213'
               target='_blank'
               rel='noreferrer'
            >
            <div className='social-icon' title="LinkedIn">
            <AiFillLinkedin />
            </div>
            </Link>
            <Link
               href='https://github.com/CrazyChips34'
               target='_blank'
               rel='noreferrer'
            >
            <div className='social-icon' title="GitHub">
            <AiFillGithub />
            </div>
            </Link>
            <Link
               href='https://wa.me/0812561948'
               target='_blank'
               rel='noreferrer'
            >
            <div className='social-icon' title="WhatsApp">
            <AiOutlineWhatsApp />
            </div>
            </Link>
          </div>
       </div>
    );
};
