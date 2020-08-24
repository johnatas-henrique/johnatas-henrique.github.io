import styled from 'styled-components';
import logo from '../../images/menu.jpg';

const StyledMenu = styled.nav`
  z-index: 1001;
  background: ${({ theme }) => theme.primaryTwo};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  padding: 1.5rem;
  text-align: center;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.5s linear;
  /* width: 100vw; */
  
  ::before {
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    opacity: 0.7;
    position: absolute;
    top: 0;
    z-index: -1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  span {
    margin-right: 15px;
  }

  a {
    font-size: 2rem;
    padding: 1.5rem 0;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryOne};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
  
    &:hover {
      background-color: ${({ theme }) => theme.primaryOne};
      border-radius: 8px;
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  a:nth-of-type(1)
  {
    margin-top:40px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-top:0;
    }
  }
`;

export default StyledMenu;
