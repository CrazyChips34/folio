import React from "react"
import Image from 'next/image';
import Html from '../public/assets/html.png';
import Css from '../public/assets/css.png';
import Javascript from '../public/assets/javascript.png';
import ReactImg from '../public/assets/react.png';
import Github from '../public/assets/github1.png';
import Java from '../public/assets/java.png'
import C from '../public/assets/C#.png'
import NextJS from '../public/assets/nextjs.png'
import NodeJS from '../public/assets/nodejs.jpg'
import Bootstrap from '../public/assets/Bootstrap.jpg'
import Microsoft from '../public/assets/Microsoft_Office.png'
import Tailwind from '../public/assets/tailwind.jpg'
import Azure from '../public/assets/Azure_DevOp.png'
import Python from '../public/assets/python.jpg'


export const Skills =() => {
    return (
    
      <div id='skills' className='w-full p-2 lg:h-screen min-h-screen'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='py-5 text-4xl font-medium text-blue-500 md:text-5xl'>
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
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={Python} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Python</h3>
                </div>
              </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={Java} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>JAVA</h3>
                </div>
              </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={Azure} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Azure DevOps</h3>
                </div>
              </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={Microsoft} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Microsoft Office</h3>
                </div>
              </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={C} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>C#</h3>
                </div>
              </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={Bootstrap} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Bootstrap</h3>
                </div>
              </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={NodeJS} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Node JS</h3>
                </div>
              </div>
            </div>
            <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
              <div className='grid items-center justify-center grid-cols-2 gap-4'>
                <div className='m-auto'>
                  <Image src={Tailwind} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind CSS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
     );
};

