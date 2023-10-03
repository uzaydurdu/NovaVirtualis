import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import styled from 'styled-components';
import '../styles/typewritercomp.css'; // Import the CSS file

const Line = styled.div`
  width: 100px;
  height: 6px;
  background: var(--gradient-bar-portfolio);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

`

const TypewriterComp = () => {
  const [text] = useTypewriter({
    words: [
      'are NovaVirtualis.',
      'are innovative game devs.',
      'are visionary VR creators.',
      'offer immersive experiences.',
      'create assets for games.',
      'build the future.',
      'are web-devs.',
      'do immersive analytics.',
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 120,
  });

  return (
    <h1 className="typewriter-container">
      <span className="typewriter-text-we">We</span>{' '}
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-cursor">
        <Cursor cursorStyle="|" />
      </span>
      <Line />
    </h1>
  );
};

export default TypewriterComp;
