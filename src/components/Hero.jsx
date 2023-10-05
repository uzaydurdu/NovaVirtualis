import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { Navbar, TypewriterComp, VRglassCanvas } from "../components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;  
  flex-direction: column;
  align-items: center
  justify-content: space-between;

  @media only screen and (max-width: 768px), only screen and (max-width: 425px), only screen and (max-width: 1024px){
    height: 160vh;
    scroll-snap-align: unset;
  }
`
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;  
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px), only screen and (max-width: 425px), only screen and (max-width: 1024px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-left: 10rem;

  @media only screen and (max-width: 768px), only screen and (max-width: 425px), only screen and (max-width: 1024px){
    flex: 1;
    align-items: center;
    margin: 0;
    padding: 1rem;
  }

 
`

const Right = styled.div`
  flex: 3;
  position: relative;
  width: 0%;
  @media only screen and (max-width: 768px), only screen and (max-width: 425px) , only screen and (max-width: 1024px){
    flex: 1;
    
  }

  
`

const Line = styled.div`
  width: 200px;
  height: 6px;
  background: var(--gradient-bar-portfolio);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
  margin-left: 3.2rem;
`

const Subtitle = styled.h2`


`

const Description = styled.div`
  font-size: 18px;
  margin: 0 0 2rem 2rem;
  color: lightgray;
  text-align: justify;

  
  @media only screen and (max-width: 768px){
    font-size: 18px;
    text-align: center;
  }

  @media only screen and (max-width: 425px){
    font-size: 14px;
    padding: 0 1rem;
    margin-right: 2rem;
  }
`

const Button = styled.button`
  margin-left: 2rem;
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

  @media only screen and (max-width: 1024px){
    margin: 0;
  }
`

const HighlightedText = styled.span`
  color: #AEFE14; /* Text color when not hovering */
  transition: color 0.3s, text-shadow 0.3s; /* Smooth transition for color and text-shadow */


  &:hover {
    text-shadow: 0 0 10px #FFF, 0 0 20px #74BE15, 0 0 30px #AEFE14;
  }
`

const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #1c2832;
`;

const handleLinkClick = (param) => {
  // Add the logic to route to the home page ("/") with a parameter
  // For example:
  window.location.href = `/?param=${param}`;
};

const Hero = () => {
  
  return (
    <Section id='home'>
      <Navbar />
      <Container>
        <Left>
          <TypewriterComp />
          <Description className='focus-in-expand'>
            <HighlightedText>NovaVirtualis</HighlightedText> delivers immersive VR experiences, complete project packages, seamless interactions,
            and robust analytics, providing compact, powerful VR solutions.
          </Description>
          <Button > <StyledLink href= "#assets">Explore Us</StyledLink></Button>
        </Left>
        <Right>
          <VRglassCanvas />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero