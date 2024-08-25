// components/InteractiveImage.js
import { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const MainImage = styled.img`
  width: 100%;
`;

const Marker = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  &:hover .Tooltip {
    display: block;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px;
  border-radius: 3px;
  display: none;
`;

const CloseViewImage = styled.img`
  width: 100%;
  max-width: 300px;
  display: block;
  margin: 10px auto;
`;

const markersData = [
  { id: 1, x: '20%', y: '30%', closeViewSrc: '/assets/pop.jpg' },
  { id: 2, x: '50%', y: '60%', closeViewSrc: '/assets/pop1.jpg' },
  // Add more markers as needed
];

const InteractiveImage = ({ src }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  return (
    <ImageContainer>
      <MainImage src={src} alt="Main View" />
      {markersData.map(marker => (
        <Marker
          key={marker.id}
          style={{ top: marker.y, left: marker.x }}
          onClick={() => setActiveMarker(marker)}
        >
          <Tooltip className="Tooltip">Click to view</Tooltip>
        </Marker>
      ))}
      {activeMarker && (
        <CloseViewImage src={activeMarker.closeViewSrc} alt="Close View" />
      )}
    </ImageContainer>
  );
};

export default InteractiveImage;
