import React from "react";

export const ImageComponent = () => {

    const markers = [
      { name: 'Forge', x: 50.4, y: 26 },
      { name: 'Rentals', x: 58.5, y: 76.3 },
      // Add more 
    ];
  
    const handleMarkerClick = (m) => {
      // do something with marker
    };
  
    return (
      <div style={{ position: 'relative', width: '100vw' }}>
        <img style={{ width: '100%', display: 'block'}} src="/assets/img.jpg" alt="Image with markers" />
  
        {markers.map((marker, index) => (
          <div
            key={index}
            className="marker"
            style={{ left: `${marker.x}%`, top: `${marker.y}%`, position: "absolute" }}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}
      </div>
    );
  };