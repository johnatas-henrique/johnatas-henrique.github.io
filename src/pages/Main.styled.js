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

const StyledMain = styled.div`

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
    width: 100%;
  }

  a.button {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem;
    margin: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryOne};
    border: 1px solid ${({ theme }) => theme.primaryOne};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: block;
      font-size: 1.5rem;
      text-align: center;
      :last-child {
        margin-bottom: 50px;
      }
    }
  }

  a.button:hover {
    border: 1px solid ${({ theme }) => theme.primaryOne};
    background-color: ${({ theme }) => theme.primaryOne};
    color: ${({ theme }) => theme.primaryHover};
    transition: color 0.5s linear;
    transition: background-color 0.5s linear;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export default StyledMain;
