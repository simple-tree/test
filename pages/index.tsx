import Image from "next/image";
import { Inter } from "next/font/google";
import React from 'react';
import NavBar from "../components/Navbar"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar/>
    <div className="relative w-full h-screen flex items-center justify-between">
      {/* Small image positioned at the bottom-left */}
      <div className="absolute left-[2.29vw] bottom-[2.29vw] w-[20vw]  min-w-[150px] min-h-[225px]">
        <Image
          src="/landing.png"
          alt="Responsive Small Image"
          layout="intrinsic"
          width={408}
          height={612}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Responsive text container centered between the two images */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="relative" style={{ 
          width: '17vw', 
          maxWidth: '13.5vw', 
          height: '30vw', 
          minHeight: '225px',
          marginBottom: '2.29vw', // Adjusts the bottom gap between the text and small image
          marginRight: '13.354vw' // Dynamically calculated equal margins
        }}>
          <p className="text-landing-thin text-[0.78vw] leading-[1vw]">
  SIMPLETREE is a One-Stop-Shop that is emerging as a pioneer in the real estate industry of Bangladesh. We dedicate ourselves to serve our clients with innovative and intelligent design solutions, execution, and facilities management. We strive every day to set new benchmarks for this industry in our country without deviating from our core values circling around Trust, Reliability, Sustainability, and Innovation. With over 6 LEED Certified projects, it is also in our practice to be conscious of our environment through the use of progressive technology.
  <span className="cursor-icon-background-website" />
</p>

 <div className="mt-[3.75vw]">
        <p className="text-description">WE DESIGN.</p>
        <p className="text-description">WE CONSTRUCT.</p>
        <p className="text-description">WE EXECUTE.</p>
      </div>
        </div>
      </div>

      {/* Big image positioned on the right side with min-width */}
      <div className="absolute right-0 top-0 w-[35vw] h-full min-w-[20.229vw]">
        <Image
          src="/big-image.png"  // Replace with the correct path to the big image
          alt="Responsive Big Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </div>
    </div>
  );
}












