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

const StyledProjects = styled.div`

  animation: ${showText} 1s linear;

  div.text{
    margin-bottom: 4rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      align-items: flex-start;
    }
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
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 80px;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
  }
`;

export default StyledProjects;
