// import React from "react";
// import Image from "next/image";

// function ScrollBlendModeExample() {
//   return (
//     <div style={{ height: "300vh", position: "relative", overflow: "hidden" }}>
//       {/* Fixed Text Layer */}
//       <div
//         style={{
//           position: "fixed",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           zIndex: 2, // Ensure it's on top of scrolling images
//           mixBlendMode: "difference",
//           color: "white", // Default color
//         }}
//       >
//         <h1 style={{ fontSize: "10vw", fontWeight: "bold" }}>
//           Blending Text
//         </h1>
//       </div>

//       {/* Scrolling Images */}
//       <div style={{ height: "300vh" }}>
//         <div style={{ height: "100vh", position: "relative" }}>
//           <Image
//             src="/assets/img3.jpg" // Replace with your first image path
//             alt="Image 1"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>

//         <div style={{ height: "100vh", position: "relative" }}>
//           <Image
//             src="/assets/img4.png" // Replace with your second image path
//             alt="Image 2"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>

//         <div style={{ height: "100vh", position: "relative" }}>
//           <Image
//             src="/assets/img5.png" // Replace with your third image path
//             alt="Image 3"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ScrollBlendModeExample;




// import React from "react";
// import Image from "next/image";

// function ScrollBlendModeExample() {
//   return (
//     <div style={{ height: "300vh", position: "relative", overflow: "hidden" }}>
//       {/* Fixed Text Layer */}
//       <div
//         style={{
//           position: "fixed",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           zIndex: 2, // Ensure it's on top of scrolling images
//           color: "black", // Set default color to black
//           mixBlendMode: "different",
//           backgroundColor: "white", // This will ensure text stays black on white backgrounds
//           padding: "10px", // Optional: Add padding around the text
//         }}
//       >
//         <h1 style={{ fontSize: "10vw", fontWeight: "bold" }}>
//           Blending Text
//         </h1>
//       </div>

//       {/* Scrolling Images */}
//       <div style={{ height: "300vh" }}>
//         <div style={{ height: "100vh", position: "relative" }}>
//           <Image
//             src="/assets/img3.jpg" // Replace with your first image path
//             alt="Image 1"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>

//         <div style={{ height: "100vh", position: "relative" }}>
//           <Image
//             src="/assets/img4.png" // Replace with your second image path
//             alt="Image 2"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>

//         <div style={{ height: "100vh", position: "relative" }}>
//           <Image
//             src="/path/to/your-image3.jpg" // Replace with your third image path
//             alt="Image 3"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ScrollBlendModeExample;


import React, { useEffect, useState } from "react";
import Image from "next/image";

function ScrollBlendModeExample() {
  const [textColor, setTextColor] = useState("white"); // Default text color

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check the ID or a property to determine the background
            if (entry.target.id === "white-section") {
              setTextColor("black"); // Change text to black when in white section
            } else {
              setTextColor("white"); // Change text to white for other sections
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div style={{ height: "300vh", position: "relative", overflow: "hidden" }}>
      {/* Fixed Text Layer */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          color: textColor, // Dynamically set the text color
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            fontSize: "10vw",
            fontWeight: "bold",
            padding: "10px",
            margin: 0,
          }}
        >
          Blending Text
        </h1>
      </div>

      {/* Scrolling Sections */}
      <div style={{ height: "300vh" }}>
        <div id="white-section" className="section" style={{ height: "100vh", backgroundColor: "white", position: "relative" }}>
          {/* Section with white background */}
        </div>

        <div id="image-section1" className="section" style={{ height: "100vh", position: "relative" }}>
          <Image
            src="/assets/img3.jpg" // Replace with your first image path
            alt="Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div id="image-section2" className="section" style={{ height: "100vh", position: "relative" }}>
          <Image
            src="/assets/img4.png" // Replace with your second image path
            alt="Image 2"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div id="image-section3" className="section" style={{ height: "100vh", position: "relative" }}>
          <Image
            src="/assets/img5.png" // Replace with your third image path
            alt="Image 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollBlendModeExample;





