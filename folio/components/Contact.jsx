import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Svg from '../public/assets/svg/contact.png'

export const Contact =() => {
    return (
    
      <div id='contact' className='w-full min-h-screen max-h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
          <p className='py-10 text-4xl font-medium text-blue-500 md:text-5xl'>
            Contact
          </p>
          <h2 className='py-4'>Get In Touch</h2>
          <div className='grid gap-8 lg:grid-cols-5'>
            {/* left */}
            <div className='w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl'>
              <div className='h-full lg:p-4 '>
                <div>
                  <h2 className='py-2'>Tiffany Pietersen</h2>
                  <p className='px-1'>FullStack Developer</p>
                  <p className='py-2'>I am always excited to connect with like-minded individuals and share my experiences and insights. Let's Chat</p>
                </div>
                <div>
                  <p className='pt-8 uppercase'>Connect Me</p>
                  <div className='flex items-center justify-between py-4'>
                    <Link
                      href='https://www.linkedin.com/in/tiffany-pietersen-1297b2213'
                      target='_blank'
                      rel='noreferrer'
                      title="LinkedIn"
                    >
                      <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-110'>
                        <FaLinkedinIn />
                      </div>
                    </Link>
                    <Link
                      href='https://github.com/CrazyChips34'
                      target='_blank'
                      rel='noreferrer'
                      title="GitHub"
                    >
                      <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                        <FaGithub />
                      </div>
                      </Link>
  
                  </div>
                </div>
                <div>  
                  <Image src={Svg} alt='/' width={500} height={700} className='rounded-lg'/>
                  <p className='text-blue-200'>Image by vectorjuice on Freepik</p>
                </div>
              </div>
            </div>
  
            {/* right */}
            <div className='w-full h-auto col-span-3 shadow-xl shadow-gray-600 rounded-xl lg:p-4'>
              <div className='p-4'>
                <form
                  action='https://getform.io/f/58da03db-3ee4-469e-bca4-3138d8a8a7b6'
                  method='POST'
                >
                  <div className='grid w-full gap-4 py-2 md:grid-cols-2'>
                    <div className='flex flex-col'>
                      <label className='py-2 text-sm uppercase'>Name</label>
                      <input
                        className='flex p-3 border-2 border-gray-300 rounded-lg'
                        type='text'
                        name='name'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label className='py-2 text-sm uppercase'>
                        Phone Number
                      </label>
                      <input
                        className='flex p-3 border-2 border-gray-300 rounded-lg'
                        type='text'
                        name='phone'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='py-2 text-sm uppercase'>Email</label>
                    <input
                      className='flex p-3 border-2 border-gray-300 rounded-lg'
                      type='email'
                      name='email'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='py-2 text-sm uppercase'>Subject</label>
                    <input
                      className='flex p-3 border-2 border-gray-300 rounded-lg'
                      type='text'
                      name='subject'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='py-2 text-sm uppercase'>Message</label>
                    <textarea
                      className='p-3 border-2 border-gray-300 rounded-lg'
                      rows='10'
                      name='message'
                    ></textarea>
                  </div>
                  <button className='w-full p-4 mt-4 text-gray-700 hover:text-black'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='flex justify-center py-12'>
            <Link href='/'>
              
                <div className='p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                  <HiOutlineChevronDoubleUp
                    className='text-[#4566af]'
                    size={30}
                  />
                </div>
              
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  