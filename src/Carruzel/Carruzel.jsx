// ----Dependacys
import React from 'react';
import { Carousel } from 'react-carousel-minimal';
// -----Others-----
import { CarruzelData } from '../Others/CarruzelData';

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
};
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
};

export default function Carruzel() {
  return (
    <div className="App">
      <div style={{ textAlign: 'center' }}>
        <h2>React Carousel Minimal</h2>
        <p>
          Easy to use, responsive and customizable carousel component for React
          Projects.
        </p>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <Carousel
            data={CarruzelData}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic
            dots
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '500px',
              margin: '50px auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}
