
import React from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import LogoCarousel from './LogoCarousel';
import BlurrButton from "../components/BlurrButton"


function landing() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
  return (
    <div>
      <BlurrButton text={undefined}/>
      <Head>
        <title>Shutter Effect with Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-blue-500 transition-transform duration-700 ${
          isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <LogoCarousel/>
      </div>

      <div className={`transition-opacity duration-700 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-10">
          <h2 className="text-2xl">Content Section 2</h2>
        </div>
        <div className="min-h-screen bg-gray-200 flex items-center justify-center">
          <h2 className="text-2xl">Content Section 3</h2>
        </div>
        <div className="min-h-screen bg-gray-300 flex items-center justify-center">
          <h2 className="text-2xl">Content Section 4</h2>
        </div>
      </div>
    </div>
  )
}

export default landing
