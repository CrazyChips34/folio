'use client';
import { useState } from 'react'
import {Navbar} from '../components/Navbar'
import {Main}  from '../components/Main'
import {About} from '../components/About'
import {Skills} from '../components/Skills'
import {Contact} from '../components/Contact'
import Head from 'next/head';





export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
      <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <main className='px-10 bg-white md:px-20 lg:px-40 dark:bg-gray-800'>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}