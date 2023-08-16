import React from "react"
import Image from 'next/image'

//Importing images 
import Html from '../public/assets/html.png'
import Css from '../public/assets/css.png'
import Javascript from '../public/assets/javascript.png'
import ReactImg from '../public/assets/react.png'
import Github from '../public/assets/github1.png'
import Java from '../public/assets/java.png'
import C from '../public/assets/C.png'
import NextJS from '../public/assets/nextjs.png'
import NodeJS from '../public/assets/node.png'
import Bootstrap from '../public/assets/Bootstrap.png'
import Microsoft from '../public/assets/Microsoft_Office.png'
import TailwindImg from '../public/assets/tailwind.png'
import Azure from '../public/assets/Azure_DevOp.png'
import Python from '../public/assets/python.png'

//import the react-multi-carousel library and its styles
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills =() => {
  //creating an array of the images 
  const slides = [
    { src: Html, title: 'HTML' },
    { src: Css, title: 'CSS' },
    { src: Javascript, title: 'JavaScript' },
    { src: ReactImg, title: 'React' },
    { src: Github, title: 'Github' },
    { src: NextJS, title: 'Next' },
    { src: Python, title: 'Python' },
    { src: Java, title: 'JAVA' },
    { src: Azure, title: 'Azure DevOps' },
    { src: Microsoft, title: 'Microsoft Office' },
    { src: C, title: 'C#' },
    { src: Bootstrap, title: 'Bootstrap' },
    { src: NodeJS, title: 'Node JS' },
    { src: TailwindImg, title: 'Tailwind CSS' },
  ];

 //creating an object that determines the reponsive behaviour of the carousel for different devices 
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
    // Group the slides into chunks of 6
  const groupedSlides = [];
  for (let i = 0; i < slides.length; i += 2) {
    groupedSlides.push(slides.slice(i, i + 2));
  }

  //Adding a maximum slides per page limit 
  const maxSlidesCol = 2;


  return (
  
      <div id='skills' className='w-full p-2 lg:h-screen min-h-screen '>
        <p className='py-5 text-4xl font-medium text-blue-500 md:text-5xl'>
            Skills
          </p>
          <h2 className='py-4 '>What I Can Do</h2>
       <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        containerClass='carousel-container'
        itemClass='carousel-item'
      >
        {groupedSlides.map((group, groupIndex) => (
          <div key={groupIndex}>
            {group.map((slide, index) => (
              (groupIndex === 0 && index < maxSlidesCol) || (groupIndex > 0) ?
              <div key={index} className='p-9 duration-900 ease-in shadow-xl rounded-xl hover:scale-105 hover:bg-gray-200' style={{ width: '300px', height: '180px' }}>
                <div className='grid items-center justify-center gap-6'>
                  <div className='m-auto'>
                    <Image src={slide.src} width={65} height={65} alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>{slide.title}</h3>
                  </div>
                </div>
              </div>
              :null
            ))}
          </div>
        ))}
      </Carousel>
    </div>

    );
};

