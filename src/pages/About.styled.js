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

const StyledAbout = styled.div`

  align-items: center;
  animation: ${showText} 1s linear;
  display: flex;
  margin: 0 auto;
  width: 80%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 80px;
    display: block;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
  }

  div.text{
    margin-right: 40px;
    width: 60%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-right: 0;
      align-items: flex-start;
      margin-bottom: 4rem;
      width: 100%;
    }
  }

  .image {
    border-radius: 12%;
    display: inline-block;
    position: relative;
    width: 40%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: none;
    }
}
  .image img {
      border-radius: 12%;
      display: block;
      max-height:100%;
      max-width: 100%;
  }
  .image:after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        ellipse at center, 
        rgba(255,255,255,0) 0%,
        rgba(255,255,255,0) 72%,
        rgba(255,255,255,1) 100%
      );
      border-radius: 12%;
      position: absolute;
      top: 0; left: 0;
      @media (max-width: ${({ theme }) => theme.mobile}) {
      display: none;
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
    text-align: justify;
  }
`;

export default StyledAbout;
