// import React, { useEffect, useRef, useState } from "react";

// // BlogSection Component for individual months
// const BlogSection = ({ blogs }) => {
//   const sectionRef = useRef(null);
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       const sectionTop = section.getBoundingClientRect().top;
//       const sectionHeight = section.offsetHeight;

//       // Check if section is sticky
//       if (sectionTop <= 0 && sectionTop + sectionHeight > 0) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative mb-10">
//       <div
//         ref={sectionRef}
//         className={`sticky top-0 bg-white z-10 shadow-md p-4 transition-all duration-300 ${
//           isSticky ? "bg-gray-100" : ""
//         }`}
//       >
//         <h2 className="text-xl font-bold">{blogs[0].month}</h2>
//         <h3 className="text-lg">{blogs[0].year}</h3>
//       </div>
//       {blogs.map((blog, index) => (
//         <div
//           key={index}
//           className="h-[5vh] border-b border-gray-200 flex items-center p-2"
//         >
//           <p>{blog.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// // BlogContainer Component for all months
// const BlogContainer = ({ data }) => {
//   return (
//     <div>
//       {data.map((monthData, index) => (
//         <BlogSection key={index} blogs={monthData.blogs} />
//       ))}
//     </div>
//   );
// };

// // Main App Component
// const App = () => {
//   const blogData = [
//     {
//       year: 2024,
//       month: "January",
//       blogs: [
//         { title: "Blog 1: Introduction to React" },
//         { title: "Blog 2: Understanding State and Props" },
//         { title: "Blog 3: Component Lifecycle" },
//         { title: "Blog 4: Hooks in React" },
//         { title: "Blog 5: Building a Simple App" },
//       ],
//     },
//     {
//       year: 2024,
//       month: "February",
//       blogs: [
//         { title: "Blog 1: Tailwind CSS Basics" },
//         { title: "Blog 2: Responsive Design" },
//         { title: "Blog 3: Custom Components" },
//       ],
//     },
//     {
//       year: 2024,
//       month: "March",
//       blogs: [
//         { title: "Blog 1: Working with APIs" },
//         { title: "Blog 2: Managing State with Redux" },
//         { title: "Blog 3: Deploying React Applications" },
//       ],
//     },
//     {
//         year: 2024,
//         month: "January",
//         blogs: [
//           { title: "Blog 1: Introduction to React" },
//           { title: "Blog 2: Understanding State and Props" },
//           { title: "Blog 3: Component Lifecycle" },
//           { title: "Blog 4: Hooks in React" },
//           { title: "Blog 5: Building a Simple App" },
//         ],
//     },
//     {
//         year: 2024,
//         month: "January",
//         blogs: [
//           { title: "Blog 1: Introduction to React" },
//           { title: "Blog 2: Understanding State and Props" },
//           { title: "Blog 3: Component Lifecycle" },
//           { title: "Blog 4: Hooks in React" },
//           { title: "Blog 5: Building a Simple App" },
//         ],
//     }
//     // Add more months and blogs as needed
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <div> 
//       <h1 className="text-2xl font-bold mb-4">Blog Archive</h1>
//       </div>
//       <BlogContainer data={blogData} />
//     </div>
//   );
// };

// export default App;

import Head from 'next/head';

const BlogSection = () => {
    return (
        <div className="flex h-screen">
            <Head>
                <title>Blog Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Sticky Sidebar on the Left */}
            <div className="w-1/4 p-4">
                <div className="sticky top-12 bg-white shadow-lg p-4">
                    <h2 className="text-xl font-semibold">Sticky Section</h2>
                    <p>This section will stick at the top when you scroll.</p>
                </div>
            </div>

            {/* Scrollable Blog Content on the Right */}
            <div className="w-3/4 p-8 overflow-y-auto">
                <h1 className="text-2xl font-bold">Blog Title</h1>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                
                {/* Add enough content to make the right side scrollable */}
                {Array.from({ length: 50 }, (_, i) => (
                    <p key={i} className="mt-4">More blog content... {i + 1}</p>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;


