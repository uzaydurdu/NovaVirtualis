import React from 'react';
import styled from 'styled-components';
import { CubeCanvas, AvatarLoader } from '../components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;  
  flex-direction: column;
  align-items: center
  justify-content: space-between;

  @media only screen and (max-width: 768px), only screen and (max-width: 425px){
    height: 160vh;
  }
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1800px;
  display: flex;  
  justify-content: space-between;

  @media only screen and (max-width: 768px), only screen and (max-width: 425px){
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
  margin: 0 0 0rem 4rem;
  padding-left: 8rem;

  @media only screen and (max-width: 768px), only screen and (max-width: 425px){
    flex: 1;
    align-items: center;
    margin: 0;
    margin-top: 12rem;
    padding: 2rem;
  }
`

const Right = styled.div`
  flex: 2;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;

  @media only screen and (max-width: 768px), only screen and (max-width: 425px){
    flex: 1;
    margin-top: 4rem;
    width: 100%;
  }
`

const Line = styled.div`
  width: 100px;
  height: 6px;
  background: var(--gradient-bar-portfolio);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
  margin-left: 0rem;
`

const Title = styled.h1`
  font-size: 48px;
  color: #AEFE14;

  @media only screen and (max-width: 768px){
    font-size: 24px;
  }

   @media only screen and (max-width: 425px){
    font-size: 20px;
    
  }
`

const Description = styled.div`
  font-size: 18px;
  margin: 0 0 2rem 0rem;
  color: lightgray;
  text-align: justify;

  @media only screen and (max-width: 768px){
    font-size: 18px;
   
    margin: 0;
    
  }

  @media only screen and (max-width: 425px){
    font-size: 14px;
  }
`

const Button = styled.button`
  margin-top: 1rem;
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

  @media only screen and (max-width: 768px){
    margin: 4rem;
  }

  @media only screen and (max-width: 425px){
    margin-top: 2rem;
  }
`

const HighlightedText = styled.span`
  color: #AEFE14; /* Text color when not hovering */
  transition: color 0.3s, text-shadow 0.3s; /* Smooth transition for color and text-shadow */


  &:hover {
    text-shadow: 0 0 10px #FFF, 0 0 20px #74BE15, 0 0 30px #AEFE14;
  }
`

const handleLinkClick = (param) => {
  // Add the logic to route to the home page ("/") with a parameter
  // For example: <Button  onClick={() => handleLinkClick("/#assets")} > Explore Us</Button>
  window.location.href = `/?param=${param}`;
};

const About = () => {
  return (
    <Section id='about'>
      <Container>
        <Left>
          <Title>About Us</Title>
          <Line />
          <Description className='focus-in-expand'>
            <HighlightedText>NovaVirtualis</HighlightedText> is dedicated to revolutionizing the world of
             virtual reality. Our passion is to create immersive
              experiences that transport individuals to new dimensions.
               We specialize in crafting complete project packages, ensuring seamless interactions,
                and providing in-depth analytics within the virtual realm.
                 Our goal is to offer powerful and compact solutions that cater to your virtual reality needs.
                  With a team of experts and a commitment to excellence, 
             {' '} <HighlightedText>NovaVirtualis</HighlightedText> is your gateway to the extraordinary.
          </Description>
          <Button  onClick={() => handleLinkClick("/#contact")} > Work With Us </Button>
        </Left>
        <Right>
          <AvatarLoader />
        </Right>
      </Container>
    </Section>
  )
}

export default About