import { BrowserRouter } from "react-router-dom";
import { About, Contact, Footer, Hero, Services, StarsCanvas, Carousel, BubbleBackground } from "./components";
import styled from 'styled-components';

const Container =  styled.div`
  height: 100vh;
  background: url("./assets/bg7.png");
  background-color: #000;
  background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  scroll-snap-type: y mandatory;
  scroll-behaviour: smooth;
  overflow-y: auto;
  color: white;
  scrollbar-width: none;
  position: relative;
  &::-webkit-scrollbar{
    display: none;
  }

  @media only screen and (max-width: 768px), only screen and (max-width: 425px){
    scroll-snap-type: unset;
    scroll-snap-align: unset;
  }
`;

const App = () => {

  return (
    <BrowserRouter>
    <Container>
      <Hero />
      <Services />
      <About />
        <Contact />
    </Container>
      
    </BrowserRouter>
  )
}

export default App
