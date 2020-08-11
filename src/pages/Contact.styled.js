import styled, { keyframes } from 'styled-components';

const showText = keyframes`
  0% {
    opacity: 0.1;
  }

  70% {
    transform: translateY(-10%);
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const StyledContacts = styled.div`

  animation: ${showText} 1s linear;

  div.flex-container {
    display: flex;
    flex-wrap: wrap;
    width: 45rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100vw;
    }
  }

  div.form-contact, div.text{
    margin: 0 auto 4rem;
    text-align: center;
    width: 18rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      align-items: flex-start;
    }
  }
  
  div.text {
    width: 27rem;
  }

  h1.title {
    text-align: center;
    width: 100%;
  }

  input, textarea {
    border: none;
    border-bottom: 1px solid black;
    background: none;
    color: ${({ theme }) => theme.primaryOne};
    display: block;
    font-family: 'Rajdhani',sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    height: 1.5rem;
    width: 16rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 0 auto;
    }
  }

  textarea {
    height: 10rem;
  }

  input::placeholder, textarea::placeholder {
    color: #444444;
    font-family: 'Rajdhani',sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
  }

  h1, h2 {
    color: ${({ theme }) => theme.primaryOne};
    font-size: 200%;
    padding: 0 1rem;
  }

  h3, h4 {
    color: ${({ theme }) => theme.primaryOne};
    padding: 0 1rem;
  }

  h4.contact-text {
    margin: 0 auto 1rem;
    text-align: justify;
  }
  
  h4.contact-icon {
    margin: 0 auto 1rem;
    text-align: justify;
    @media(max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    }
  }

  .icon {
    width: 32px;
    height: 32px;
    margin-right: 1rem;
  }
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 80px;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
  }
  
  .btn { 
    text-align: center; 
    height: 3rem; 
    width: 10rem; 
    display: block;
    font-family: 'Rajdhani',sans-serif;
    font-size: 1.5rem; 
    font-weight: 700;
    background: ${({ theme }) => theme.primaryThree};
    transition: all 1s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 0 auto;
    }
  } 
  
  .btn:hover { 
    animation: effect 0.4s infinite; 
    transition: all 1s linear;
    background: ${({ theme }) => theme.primaryOne};
    color: ${({ theme }) => theme.primaryTwo};
  } 
  
  @keyframes effect { 
    0% { transform: translateX(0px) rotate(0deg); } 
    20% { transform: translateX(-4px) rotate(-4deg); } 
    40% { transform: translateX(-2px) rotate(-2deg); } 
    60% { transform: translateX(4px) rotate(4deg); } 
    80% { transform: translateX(2px) rotate(2deg); } 
    100% { transform: translateX(0px) rotate(0deg); } 
  } 
`;

export default StyledContacts;
