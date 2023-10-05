import React from 'react';
import Tilt from "react-parallax-tilt";
import styled from 'styled-components';
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

const Button = styled.button`
  display: inline-block;
  margin-top: 1rem;
  margin-left: 2.7rem;
  width: 8rem;
  padding: 16px 8px;
  cursor: pointer;
  background: linear-gradient(89.97deg, #AEFE14  10%, #27AA80 90%);
  color: #444654;
  border: none;
  border-radius: 2rem;
  font-weight: 500;
  transition: all 0.3s ease; /* Add transitions for opacity, box-shadow, and background-color */
  overflow: hidden;
  position: relative; /* Add position relative to contain the ::before element */

  

  &::before {
    content: '';
    position: absolute;
    height: 100px;
    width: 24px;
    background: #f3f3f3;
    box-shadow: 0 0 10px #fff;
    filter: blur(1px);
    opacity: 0.8;
    top: -30px;
    transition: 0.7s;
    transform: rotate(-20deg) translateX(-60px);
    
  }

  &:hover {
    opacity: 0.7; /* Reduce opacity on hover */
    box-shadow: 0 0 20px rgba(174, 254, 20, 0.7), 0 0 20px rgba(174, 254, 20, 0.7); /* Add a shining shadow on hover */
    background-color: #B2FF28; /* Adjust background color for a shining effect */

    &::before {
      transform: rotate(-20deg) translate(140px, 70px);
    }
  }
`


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
          className="asset__card"
          scale={1.1}
          transitionSpeed={2000}
          gyroscope={true}
        >


          <img src={data.image} alt={data.title} />

          <div className='tilt-content'>

            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <Button href={data.link}>Learn more</Button>
          </div>
        </Tilt>
      ))}
    </div>
  );
}

export default Assets;
