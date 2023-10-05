import React from 'react';
import styled from 'styled-components';

const UnityExplanation = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  
  @media only screen and (max-width: 425px), only screen and (max-width: 768px), only screen and (max-width: 1024px){
    align-items: center;
    margin-left: 1.5rem;
  }
`
const Title = styled.h1`
  font-size: 48px;
  color: #AEFE14;

  @media only screen and (max-width: 1024px){
    font-size: 36px;
  }

  @media only screen and (max-width: 768px){
    font-size: 24px;
  }

   @media only screen and (max-width: 425px){
    font-size: 20px;
    
  }
`

const Line = styled.div`
  width: 100px;
  height: 6px;
  background: var(--gradient-bar-portfolio);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;

`

const Description = styled.div`
  font-size: 18px;
  margin: 0 0 2rem 0rem;
  color: lightgray;
  text-align: justify;

  @media only screen and (max-width: 1024px){
    font-size: 18px;
    padding: 0 4rem 0rem 0rem;
    margin: 0;
  }

  @media only screen and (max-width: 768px){
    font-size: 16px;
    padding: 0 4rem 0rem 0rem;
    margin: 0;
  }

  @media only screen and (max-width: 425px){
    font-size: 14px;
    padding: 0 2rem;
    margin-left:-1.5rem;
  }
`
const HighlightedText = styled.span`
  color: #AEFE14; /* Text color when not hovering */
  transition: color 0.3s, text-shadow 0.3s; /* Smooth transition for color and text-shadow */


  &:hover {
    text-shadow: 0 0 10px #FFF, 0 0 20px #74BE15, 0 0 30px #AEFE14;
  }
`

const Unity = () => {
  
  return (
    <UnityExplanation>
      <Title>Our VR Vision</Title>
      <Line />
      <Description className='focus-in-expand'>
      At <HighlightedText>NovaVirtualis</HighlightedText>,
       we promote immersive experiences with AI,
        shaping our vision of a VR metaverse where users can explore new dimensions and engage in innovative ways.
         Our projects are meticulously crafted to bring this vision to life,
          delivering interactive, AI-driven experiences that redefine immersion. Whether for gaming,
           simulations, or any other application, our team of skilled developers and designers ensures
            that every project reflects the future of virtual reality.
    
      </Description>
    </UnityExplanation>
  );

};
export default Unity;