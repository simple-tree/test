// import React, { useEffect, useRef } from 'react';
// import styles from '../styles/LogoCarousel.module.css'

// const LogoCarousel: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const container = containerRef.current;
//     const logos = container.querySelectorAll<HTMLDivElement>(`.${styles.logoItem}`);

//     let currentOffset = 0;
//     let animationSpeed = 1; // Adjust animation speed as needed

//     const moveLogos = () => {
//       currentOffset += animationSpeed;
//       container.style.transform = `translateX(-${currentOffset}px)`;

//       // Reset offset when logos have moved beyond their total width
//       if (currentOffset >= logos[0].offsetWidth) {
//         currentOffset = 0;
//         container.style.transform = `translateX(0)`;
//       }

//       // Recursive call for smooth animation
//       requestAnimationFrame(moveLogos);
//     };

//     // Start animation loop
//     moveLogos();

//     // Clean up animation on component unmount
//     return () => cancelAnimationFrame(moveLogos);
//   }, []);

//   return (
//     <div className={`overflow-hidden ${styles.logoCarousel}`}>
//       <div ref={containerRef} className={`flex space-x-8 p-4 ${styles.logoContainer}`}>
//         {/* Repeat these divs for each logo */}
//         <div className={`${styles.logoItem}`}>
//           <img src="/assets/google.png" className="w-32" alt="Google Logo" />
//         </div>
//         <div className={`${styles.logoItem}`}>
//           <img src="/assets/microsoft.png" className="w-32" alt="Microsoft Logo" />
//         </div>
//         <div className={`${styles.logoItem}`}>
//           <img src="/assets/tech_crunch.png" className="w-32" alt="Tech Crunch Logo" />
//         </div>
//         <div className={`${styles.logoItem}`}>
//           <img src="/assets/yc.png" className="w-32" alt="Y Combinator Logo" />
//         </div>
//         {/* <div className={`${styles.logoItem}`}>
//           <img src="/assets/New_York_Times_Logo.png" className="w-32" alt="New York Times Logo" />
//         </div>
//         <div className={`${styles.logoItem}`}>
//           <img src="/assets/hubspot.png" className="w-32" alt="HubSpot Logo" />
//         </div> */}
//         {/* Repeat ends */}
//       </div>
//     </div>
//   );
// };

// export default LogoCarousel;

import React, { useState, useEffect } from 'react';
import styles from '../styles/LogoCarousel.module.css'; // Import CSS module for local styles
import BlurrButton from "../components/BlurrButton"

const logos = [
  '/assets/google.png',
  '/assets/microsoft.png',
  '/assets/tech_crunch.png',
  '/assets/yc.png',
  
];

const LogoCarousel: React.FC = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col justify-center items-center h-screen ${styles.logoContainer}`}>
      <div className={`text-center ${styles.row}`}>
        <p className="text-9xl font-bold text-gray-800">Simple</p>
      </div>
      <div className={`flex items-center ${styles.row}`}>
        <div className={`w-40 h-40 border border-gray-300 rounded-md overflow-hidden ${styles.innerLogoBox}`}>
          <img src={logos[currentLogoIndex]} className="w-full h-full object-contain" alt="Logo" />
        </div>
        <p className="text-9xl font-bold ml-4 text-gray-800">Tree</p>
      </div>
           {/* <BlurrButton text="hello"/> */}
    </div>
  );
};

export default LogoCarousel;