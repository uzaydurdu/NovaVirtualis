import React from 'react';
import Tilt from "react-parallax-tilt";
import '../styles/assets.css';
import as1 from '../../public/assets/as1.png';
import as2 from '../../public/assets/kb.png';

const assetsData = [
  {
    title: 'UI/VR Smart Keyboard',
    description: 'Our Intelligent VR Keyboard is a powerful asset that transforms Virtual Reality (VR) experiences. With effortless text input, driven by the BERT model ${\'s predictive typing and auto-completing.',
    link: 'https://example.com/asset1',
    image: as1, // You can import or provide the image source here
  },
  {
    title: '3D Animated Keyboard',
    description: 'The second asset description goes here.The second asset description goes here.The second asset description goes here.',
    link: 'https://example.com/asset2',
    image: as2, // You can import or provide the image source here
  },
];

const Assets = () => {
  return (
    <div className='assets' >
      {assetsData.map((data, index) => (
        <Tilt
          key={index}
          glareEnable={true}
          tiltMaxAngleX={35}
          tiltMaxAngleY={35}
          perspective={900}
          glareMaxOpacity={0.8}
          glareBorderRadius="10px"
          glarePosition="bottom"
          glareColor={"#AEFE14"}
          className="tilt-img"
          scale={1.1}
          transitionSpeed={2000}
          gyroscope={true}
        >
          <div className='assets__tilt_card'>
            <div className='tilt-content'>
              <div className="image-container">
                <img src={data.image} alt={data.title} />
              </div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <a href={data.link}>Learn more</a>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  );
}

export default Assets;
