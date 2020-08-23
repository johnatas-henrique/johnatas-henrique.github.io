import styled from 'styled-components';

const StyledMenu = styled.nav`
  z-index: 999;
  
  .carousel {
    width: 100vw;
  }

  .carousel-container {
    height: 500px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: fit-content;
      padding-bottom: 3rem;
    }
  }

  .flex-container {
    display: flex;
    justify-content: center;
    width: 100%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: fit-content;
      flex-wrap: wrap;
    }
  }

  .image-container {
    padding-right: 1rem;
    text-align: right;
    width: 50%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 0 1rem;
      text-align: center;
      width: 100%;
    }
  }

  .text-container {
    align-content: space-between;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 40%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
  }

  h1, .title {
    font-size: 3rem;
    margin: 0;
    text-align: center;
    width: 100%;
  }

  .project-title {
    height: fit-content;
    margin: 0;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin: 0;
    padding: 0 15%;
    text-align: justify;
    width: 100%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.2rem;
      padding: 0 1rem;
    }
  }

  .links-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .image {
    width: 80%;
    pointer-events: none;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
  }

  a {
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

export default StyledMenu;
