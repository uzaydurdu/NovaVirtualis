import React, { useState } from 'react';
import styled from 'styled-components';
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";



const Links = styled.div`
  display: flex;  
  align-items: center;
  gap: 200px;
  justify-content: flex-end;
  flex-direction: row;
`

const Buttons = styled.div`
  display: flex;  
  align-items: center;
  gap: 20px;
`

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

const Logo = styled.img`
  height: 128px;
  width: 248px;
  margin: -1rem;
  margin-left: 1rem;
  cursor: pointer;

  
`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`
const ListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  list-style: none;
`

const ListItem = styled.li`
  cursor: pointer;
  margin: 0 3.8rem;
`

const NavbarMenu = styled.div`
  margin-left: 1rem;
  display: none;
  position: relative;
`

const LinksMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: end;
  background: #121212;
  position: absolute;
  padding: 2rem;
  top: 40px;
  right: 0;
  margin-top: 1rem;
  gap: 30px;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0 0 5 rgba(0, 0, 0, 0.4);
`

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 8rem;
  align-items: center;
  z-index: 5;

  @media screen and (max-width: 768px){
    width: 100%;
  }

  @media only screen and (max-width: 425px){
    padding: 0;
  }
`

const Container = styled.div`
  display: flex;  
  width: 1600px;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
  
  @media screen and (max-width: 1050px) {
    ${Links} {
      display: none;
    }


  
    ${NavbarMenu} {
      display: flex;
    }
  }

  @media only screen and (max-width: 768px){
    width: 100%;
  }

  @media only screen and (max-width: 425px){
    width: 100%;
    padding: 0;
    justify-content: space-around;
  align-items: center;
  }

  @media screen and (max-width: 425px) {
    ${Logo} {
      transform: scale(0.7); /* Adjust the scale factor as needed */
      margin: 0;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
   
  }
`

const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: lightgray;
`;

const StyledLinkButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #1c2832;
`;

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleButtonClick = (url, event) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <Section>
      <Container>
        <Logo src="../../public/assets/novaLogo2.png" />
        <Links>

          <List>
            <ListItem> <StyledLink href='#home'>Home</StyledLink> </ListItem>
            <ListItem> <StyledLink href='#assets'>Assets</StyledLink> </ListItem>
            <ListItem> <StyledLink href='#about'>About Us</StyledLink> </ListItem>
            <ListItem> <StyledLink href='#contact'>Contact</StyledLink> </ListItem>
          </List>
          <Buttons>
            <Button onClick={(e) => handleButtonClick("https://assetstore.unity.com/", e)}> <StyledLinkButton href="https://assetstore.unity.com/">Check Assets </StyledLinkButton></Button>
          </Buttons>
        </Links>
        <NavbarMenu>

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
            <LinksMenu>
              <ListMenu>
                <ListItem> Home </ListItem>
                <ListItem> Projects </ListItem>
                <ListItem> Assets </ListItem>
                <ListItem> About Us </ListItem>
                <ListItem> Contact </ListItem>
              </ListMenu>
              <Buttons>
                <Button onClick={(e) => handleButtonClick("https://assetstore.unity.com/", e)}> <StyledLinkButton href="https://assetstore.unity.com/">Check Assets </StyledLinkButton></Button>
              </Buttons>
            </LinksMenu>
          )}

        </NavbarMenu>

      </Container>
    </Section>
  )
}

export default Navbar