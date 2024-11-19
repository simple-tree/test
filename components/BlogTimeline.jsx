// import { useEffect } from 'react';

// const BlogTimeline = () => {
//   useEffect(() => {
//     const loadGsap = async () => {
//       const gsap = (await import('gsap')).default;
//       const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
//       gsap.registerPlugin(ScrollTrigger);

//       // Initialize ScrollTrigger for each year-group
//       gsap.utils.toArray('.year-group').forEach((group) => {
//         const yearDate = group.querySelector('.year-date');
//         const blogGroup = group.querySelector('.blog-group');

//         ScrollTrigger.create({
//           trigger: group,
//           start: 'top top',
//           end: () => `+=${blogGroup.scrollHeight}`,
//           pin: yearDate,
//           pinSpacing: false,
//           scrub: true,
//         });
//       });
//     };

//     loadGsap();
//   }, []);

//   return (
//     <div className="container mx-auto py-10">
//       <div className="timeline flex flex-col items-center">
//         {/* Year 2023 Section */}
//         <div className="year-group flex w-full mb-24">
//           {/* Sticky Year and Month Header */}
//           <div className="year-date w-1/4 pr-10 flex-shrink-0">
//             <div className="sticky top-[50px]">
//               <p className="text-2xl font-bold text-gray-800">2023</p>
//               <p className="text-lg text-gray-600">January</p>
//             </div>
//           </div>

//           {/* Blog Posts for the year */}
//           <div className="blog-group w-3/4 space-y-5">
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 1 for January 2023
//             </div>
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 2 for January 2023
//             </div>
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 3 for January 2023
//             </div>
//           </div>
//         </div>

//         {/* Year 2024 Section */}
//         <div className="year-group flex w-full mb-24">
//           <div className="year-date w-1/4 pr-10 flex-shrink-0">
//             <div className="sticky top-[50px]">
//               <p className="text-2xl font-bold text-gray-800">2024</p>
//               <p className="text-lg text-gray-600">February</p>
//             </div>
//           </div>

//           <div className="blog-group w-3/4 space-y-5">
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 1 for February 2024
//             </div>
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 2 for February 2024
//             </div>
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 3 for February 2024
//             </div>
//           </div>
//         </div>

//         {/* Year 2025 Section */}
//         <div className="year-group flex w-full mb-24">
//           <div className="year-date w-1/4 pr-10 flex-shrink-0">
//             <div className="sticky top-[50px]">
//               <p className="text-2xl font-bold text-gray-800">2025</p>
//               <p className="text-lg text-gray-600">January</p>
//             </div>
//           </div>

//           <div className="blog-group w-3/4 space-y-5">
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 1 for January 2025
//             </div>
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 2 for January 2025
//             </div>
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 3 for January 2025
//             </div>
//           </div>
//         </div>
//         <div className="year-group flex w-full mb-24">
//           <div className="year-date w-1/4 pr-10 flex-shrink-0">
//             <div className="sticky top-[50px]">
//               <p className="text-2xl font-bold text-gray-800">2026</p>
//               <p className="text-lg text-gray-600">January</p>
//             </div>
//           </div>

//           <div className="blog-group w-3/4 space-y-5">
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 1 for January 2025
//             </div>
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 2 for January 2025
//             </div>
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 3 for January 2025
//             </div>
//           </div>
//         </div>
//         <div className="year-group flex w-full mb-24">
//           <div className="year-date w-1/4 pr-10 flex-shrink-0">
//             <div className="sticky top-[50px]">
//               <p className="text-2xl font-bold text-gray-800">2027</p>
//               <p className="text-lg text-gray-600">January</p>
//             </div>
//           </div>

//           <div className="blog-group w-3/4 space-y-5">
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 1 for January 2025
//             </div>
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 2 for January 2025
//             </div>
//             <div className="blog-post bg-gray-100 p-5 shadow-lg">
//               Blog Post 3 for January 2025
//             </div>
//           </div>
//         </div>

//         {/* Add more year groups as needed */}
//       </div>
//     </div>
//   );
// };

// export default BlogTimeline;


// pages/index.js
// pages/index.js



// Header.js
import React, { useEffect, useState } from 'react';

const BlogTimeline = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > window.innerHeight - 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full bg-white transition-all duration-300 ${isSticky ? 'top-0' : 'bottom-0'} ${isSticky ? 'shadow-lg' : 'shadow-none'}`}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Sticky Header</h1>
      </div>
    </header>
  );
};

export default BlogTimeline;

