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

const StyledNotFound = styled.div`

  animation: ${showText} 1s linear;

  div.flex-container {
    display: flex;
    align-items: center;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: block;
    }
  }
  div.text{
    margin-left: 2rem;
    margin-bottom: 4rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      align-items: flex-start;
      margin-left: 0;
    }
  }
  
  h1, h2 {
    color: ${({ theme }) => theme.primaryOne};
    text-align: center;
    width: 100%;
    font-size: 200%;
    font-weight: 700;
    padding: 0 1rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-bottom: 0;
      display: none;
    }
  }

  h3, h4 {
    color: ${({ theme }) => theme.primaryOne};
    padding: 0 1rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 0;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 20px;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
  }

  .link-btn {
    text-decoration: none;
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
    transition: all 0.5s linear;
      margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 0 auto;
    }
  } 
  
  .btn:hover { 
    animation: effect 0.4s infinite; 
    transition: all 0.5s linear;
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

export default StyledNotFound;
