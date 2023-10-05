import React, { useState } from 'react';
import novaLogo from '../../public/assets/novaLogo2.png';
import styled from 'styled-components';
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import '../styles/navbar.css';

const Button = styled.button`
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

const Buttons = styled.div`
  display: flex;  
  align-items: center;
  gap: 20px;
`

const StyledLinkButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #1c2832;
`;

const Links = () => {

  return (
    <>
      <a href='#home'>Home</a>
      <a href='#assets'>Assets</a>
      <a href='#about'>About Us</a>
      <a href='#contact'>Contact</a>
    </>
  )
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleButtonClick = (url, event) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <header className='nova__navbar'>
      <a href="#home"><img src={novaLogo} className='nova__navbar-logo' /></a>
      <div className='nova__navbar-menu_container'>
      {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              cursor="pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#AEFE14"
              size={27}
              cursor="pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className='nova__navbar-nav_menu'>
              <Links />
              <Buttons>
                <Button onClick={(e) => handleButtonClick("https://assetstore.unity.com/", e)}> Check Assets</Button>
              </Buttons>
            </div>
          )}
       </div>
      <div className='nova__navbar-nav_links'>
        <Links />
      </div>
      <div className='nova__navbar-nav_buttons'>
      <Buttons>
        <Button onClick={(e) => handleButtonClick("https://assetstore.unity.com/", e)}> Check Assets </Button>
      </Buttons>
      </div>
      
    
    </header>
  )
}

export default Navbar