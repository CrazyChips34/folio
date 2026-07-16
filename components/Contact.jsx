"use client";
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div id='contact' className='w-full py-24'>
      <p className='font-mono text-sm text-sage uppercase tracking-widest mb-2'>Contact</p>
      <h2 className='font-display text-4xl md:text-5xl text-ink mb-12'>Get in touch</h2>

      <div className='grid gap-8 lg:grid-cols-5'>
        {/* left */}
        <div className='w-full h-full col-span-3 lg:col-span-2 p-6 rounded-3xl border-2 border-ink bg-white'>
          <h3 className='font-display text-2xl text-ink'>Tiffany Pietersen</h3>
          <p className='mt-1 font-mono text-xs text-ink/50 uppercase tracking-wide'>Full-Stack Developer</p>
          <p className='mt-4 text-sm text-ink/70 leading-relaxed'>
            I&apos;m always excited to connect with like-minded people and share ideas — feel free to reach out.
          </p>

          <p className='mt-8 mb-3 font-mono text-xs text-ink/50 uppercase tracking-widest'>Connect</p>
          <div className='flex items-center gap-4'>
            <Link href='https://www.linkedin.com/in/tiffany-pietersen-1297b2213' target='_blank' rel='noreferrer' title='LinkedIn'>
              <div className='social-icon bg-paper border-2 border-ink rounded-full text-xl text-ink hover:bg-coral hover:text-paper'>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href='https://github.com/CrazyChips34' target='_blank' rel='noreferrer' title='GitHub'>
              <div className='social-icon bg-paper border-2 border-ink rounded-full text-xl text-ink hover:bg-coral hover:text-paper'>
                <FaGithub />
              </div>
            </Link>
          </div>
        </div>

        {/* right */}
        <div className='w-full col-span-3 p-6 rounded-3xl border-2 border-ink bg-white'>
          <form action='https://getform.io/f/58da03db-3ee4-469e-bca4-3138d8a8a7b6' method='POST'>
            <div className='grid w-full gap-4 py-2 md:grid-cols-2'>
              <div className='flex flex-col'>
                <label className='py-2 font-mono text-xs uppercase tracking-wide text-ink/60'>Name</label>
                <input className='p-3 border-2 border-line rounded-xl focus:border-coral focus:outline-none' type='text' name='name' required />
              </div>
              <div className='flex flex-col'>
                <label className='py-2 font-mono text-xs uppercase tracking-wide text-ink/60'>Phone Number</label>
                <input className='p-3 border-2 border-line rounded-xl focus:border-coral focus:outline-none' type='text' name='phone' />
              </div>
            </div>
            <div className='flex flex-col py-2'>
              <label className='py-2 font-mono text-xs uppercase tracking-wide text-ink/60'>Email</label>
              <input
                className='p-3 border-2 border-line rounded-xl focus:border-coral focus:outline-none'
                type='email'
                name='email'
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
            </div>
            <div className='flex flex-col py-2'>
              <label className='py-2 font-mono text-xs uppercase tracking-wide text-ink/60'>Subject</label>
              <input className='p-3 border-2 border-line rounded-xl focus:border-coral focus:outline-none' type='text' name='subject' required />
            </div>
            <div className='flex flex-col py-2'>
              <label className='py-2 font-mono text-xs uppercase tracking-wide text-ink/60'>Message</label>
              <textarea className='p-3 border-2 border-line rounded-xl focus:border-coral focus:outline-none' rows='8' name='message' required></textarea>
            </div>
            <button className='w-full p-4 mt-4 font-semibold text-paper bg-ink rounded-full hover:bg-coral transition-colors'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
