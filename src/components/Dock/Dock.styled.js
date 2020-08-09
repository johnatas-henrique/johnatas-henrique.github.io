import styled, { keyframes } from 'styled-components';

const showText = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const iconRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const StyledDock = styled.nav`
  align-items: center;
  animation: ${showText} 1s linear;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  background: ${({ theme }) => theme.primaryOne};
  color: ${({ theme }) => theme.primaryTwo};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  div.left {
    display: flex;
    justify-content: flex-start;
    width: 50%;
  }

  div {
    display: flex;
    justify-content: flex-end;
    width: 50%;
  }

  img {
    animation: ${iconRotate} 1s linear;
    height: 2rem;
    margin-top: 4px;
    transform: rotate(360deg);
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 1.5rem;
      text-align: center;
    }
  }
  
  img:hover {
    animation: ${iconRotate} 3s linear infinite;
  }

  p, a {
    animation: ${iconRotate} 1s linear;
    margin: 0 1rem;
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryTwo};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      background-color: ${({ theme }) => theme.primaryOne};
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export default StyledDock;
