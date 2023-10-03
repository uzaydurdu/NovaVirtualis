import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { EarthCanvas, Footer } from '../components';
import emailjs from '@emailjs/browser';



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px), only screen and (max-width: 425px){
    height: 200vh;
    scroll-snap-align: unset;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2.0rem;

  @media only screen and (max-width: 768px), only screen and (max-width: 425px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 768px){
    flex-direction: column;
  }

  @media only screen and (max-width: 425px){
    width: 20.2rem;
    padding: 2rem;
    margin: 0;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
@media only screen and (max-width: 768px), only screen and (max-width: 425px){
    flex: 1;
    align-items: center;
    margin: 0;
    padding: 1rem;
  }
`

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px), only screen and (max-width: 425px){
    width: 100%;
    margin-left: 6.5rem;
  }
`

const Form = styled.form`
  width: 35.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.0rem;
  position: relative;
  padding: 2rem 4rem;
  background: #121212;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media only screen and (max-width: 768px){
    width: 25.2rem;
  }

  @media only screen and (max-width: 425px){
    width: 20.2rem;
    padding: 2rem;
    margin-left: 6.5rem;
  }
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

const SubTitle = styled.h4`
font-size: 18px;
color: #AEFE14;
margin-bottom: -2rem;
@media only screen and (max-width: 768px){
  font-size: 18px;
}

@media only screen and (max-width: 425px){
  font-size: 14px;

}
`

const Input = styled.input`
  padding: 1.25rem;
  background-color: #3E3E40;
  border: none;
  border-radius: 10px;
  color: #lightgray;
  outline: none; /* Remove the default focus outline */
  transition: all 0.3s ease; /* Add a transition for the border-color */

  &:focus {
    border: 4px solid transparent;
    background: linear-gradient(#3E3E40,#3E3E40) padding-box,
    linear-gradient(90deg, #AEFE14 10%, #27AA80 90%) border-box;
    border-radius: 10px;
    transform: scale(1.08);
  }
`

const TextArea = styled.textarea`
  padding: 1.25rem;
  resize: none;
  background-color: #3E3E40;
  border: none;
  border-radius: 10px;
  max-width: 27.2rem;
  min-width: 27.2rem;
  min-height: 16rem;
  max-height: 300px;
  color: #lightgray;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border: 4px solid transparent;
    background: linear-gradient(#3E3E40,#3E3E40) padding-box,
    linear-gradient(90deg, #AEFE14 10%, #27AA80 90%) border-box;
    border-radius: 10px;
    transform: scale(1.08);
    margin-top: 10px;
  }

  @media only screen and (max-width: 768px){
    max-width: auto;
  min-width: auto;
  min-height: auto;
  max-height: auto;
  }

  @media only screen and (max-width: 425px){
    max-width: auto;
    min-width: auto;
    min-height: auto;
    max-height: auto;
  }
`

const Button = styled.button`

  width: 8rem;
  padding: 16px 8px;
  cursor: pointer;
  background: linear-gradient(89.97deg, #AEFE14  10%, #27AA80 90%);
  color: #444654;
  border: none;
  border-radius: 2rem;
  align-self: flex-end;
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
    transition: all 0.8s ease;
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

const Line = styled.div`
  width: 100px;
  height: 6px;
  background: var(--gradient-bar-portfolio);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`
const FeedbackMessage = styled.div`
  position: fixed;
  bottom: 20px; /* Adjust the vertical position as needed */
  right: 20px;
  background-color: #AEFE14;
  color: #444654;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: opacity 0.3s ease;
  animation: ${(props) => (props.visible ? 'slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both' : 'none')};

`;

const WarningMessage = styled.div`
  position: fixed;
  bottom: 20px; /* Adjust the vertical position as needed */
  right: 20px; /* Adjust the horizontal position to the right as needed */
  background-color: #FF3131; /* Define your neon red color */
  color: #fff; /* Text color for the warning message */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: opacity 0.3s ease;
  animation: ${(props) => (props.visible ? 'slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both' : 'none')};

`;

const ErrorMessage = styled.div`
  color: #fff;
  font-size: 14px;
`;


const Contact = () => {
  const form = useRef();

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [successful, setSuccessful] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const hideFeedbackMessage = () => {
    setSuccessful(false);
  };

  const hideWarningMessage = () => {
    setShowWarning(false);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    setNameError('');
    setEmailError('');
    setMessageError('');

    // Validation checks
    if (!form.current.name.value.trim()) {
      setNameError('Please enter your name.');
      return;
    }
    if (!form.current.email.value.trim()) {
      setEmailError('Please enter your email.');
      return;
    }
    if (!form.current.message.value.trim()) {
      setMessageError('Please enter your message.');
      return;
    }

    emailjs.sendForm('service_yfcp3rg', 'template_a9f7i6k', form.current, 'Q6pnJ9ePF8-a7tld9')
      .then((result) => {
        console.log(result.text);
        setSuccessful(true);
        setShowWarning(false);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setSuccessful(false);
        setShowWarning(true);
      });
  };

  // Use useEffect to automatically hide the warning message after 5 seconds
  useEffect(() => {
    if (showWarning) {
      const warningTimeout = setTimeout(() => {
        setShowWarning(false);
      }, 5000);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(warningTimeout);
    }
    if (successful) {
      // Automatically hide the feedback message after 5 seconds
      const timer = setTimeout(() => {
        setSuccessful(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showWarning,successful]);

  return (
    <Section id='contact'>
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSendEmail}>

            <Title>Contact</Title>
            <Line />
            <SubTitle>Your Name</SubTitle>
<Input
  placeholder="Please type your full name"
  name="name"
  onChange={() => setNameError('')} // Clear the error when typing
/>
{nameError && <ErrorMessage>{nameError}</ErrorMessage>}

<SubTitle>Your E-mail</SubTitle>
<Input
  placeholder="Please type your e-mail"
  name="email"
  onChange={() => setEmailError('')} // Clear the error when typing
/>
{emailError && <ErrorMessage>{emailError}</ErrorMessage>}

<SubTitle>Your Message</SubTitle>
<TextArea
  placeholder="What you would like to say?"
  rows={10}
  name="message"
  onChange={() => setMessageError('')} // Clear the error when typing
/>
{messageError && <ErrorMessage>{messageError}</ErrorMessage>}
            <Button type="submit">Send E-mail</Button>
            <FeedbackMessage visible={successful === true} className='slide-in-blurred-right'>
              Your valuable message has been sent to us 🌟
            </FeedbackMessage>
            <WarningMessage visible={showWarning} className='slide-in-blurred-right'>
              Sending the message failed. Please try again.
            </WarningMessage>
          </Form>
        </Left>
        <Right>
          <EarthCanvas />
        </Right>
      </Container>
      <Footer />
    </Section>
  )
}

export default Contact