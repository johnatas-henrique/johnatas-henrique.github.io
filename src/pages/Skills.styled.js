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

const StyledSkills = styled.div`
  
  align-items: center;
  animation: ${showText} 1s linear;
  margin: 0 auto;
  width: 37.5rem;
  max-width: 1100px;

  div.text{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 4rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      align-items: flex-start;
    }
  }
  
  .text p {
    
  }

  h1, h2 {
    color: ${({ theme }) => theme.primaryOne};
    font-size: 200%;
    padding: 0 1rem;
    text-align: center;
  }

  h3, h4 {
    color: ${({ theme }) => theme.primaryOne};
    padding: 0 1rem;
    text-align: center;
    width: 33%;
  }
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
  }
`;

export default StyledSkills;
