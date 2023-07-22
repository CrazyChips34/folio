import React from "react"
import Image from 'next/image';
import Html from '../public/assets/html.png';
import Css from '../public/assets/css.png';
import Javascript from '../public/assets/javascript.png';
import ReactImg from '../public/assets/react.png';
import Github from '../public/assets/github1.png';
import Firebase from '../public/assets/firebase.png';
import NextJS from '../public/assets/nextjs.png'

export const Skills =() => {
    return (
    
        <div id='skills' className='w-full p-2 lg:h-screen'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='py-10 text-4xl font-medium text-blue-500 md:text-5xl'>
            Skills
          </p>
          <h2 className='py-4'>What I Can Do</h2>
          <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={Html} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={Css} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={Javascript} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={ReactImg} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={Github} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Github</h3>
                </div>
              </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={NextJS} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Next</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
     );
};

