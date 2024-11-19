import React from "react";
import Image from "next/image";

function ScrollBlendModeExample() {
  return (
    <div style={{ height: "300vh", position: "relative", overflow: "hidden" }}>
      {/* Fixed Text Layer */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2, // Ensure it's on top of scrolling images
          color: "white", // Start with white text for blending
          mixBlendMode: "difference", // Difference blend mode for inverting color based on background
          pointerEvents: "none", // Prevent text from interfering with scroll or other interactions
        }}
      >
        <h1
          style={{
            fontSize: "10vw",
            fontWeight: "bold",
            padding: "10px", // Optional padding for better spacing
            margin: 0,
          }}
        >
          Blending Text
        </h1>
      </div>

      {/* Scrolling Images */}
      <div style={{ height: "300vh" }}>
        <div
          style={{
            height: "100vh",
            position: "relative",
            backgroundColor: "white", // White background
          }}
        >
          {/* Empty div for white background */}
        </div>

        <div style={{ height: "100vh", position: "relative" }}>
          <Image
            src="/assets/img3.jpg" // Replace with your first image path
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            style={{ zIndex: 1 }} // Ensure image is behind the text
          />
        </div>

        <div style={{ height: "100vh", position: "relative" }}>
          <Image
            src="/assets/img4.png" // Replace with your second image path
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            style={{ zIndex: 1 }} // Ensure image is behind the text
          />
        </div>

        <div style={{ height: "100vh", position: "relative" }}>
          <Image
            src="/assets/img5.png" // Replace with your third image path
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            style={{ zIndex: 1 }} // Ensure image is behind the text
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollBlendModeExample;
