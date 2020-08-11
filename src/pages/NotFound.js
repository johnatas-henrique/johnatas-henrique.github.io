import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioContext } from '../context/Portfolio';
import StyledNotFound from './NotFound.styled';
import caveMan from '../images/caveman.gif';

const NotFound = () => {
  const { setLocation } = useContext(PortfolioContext);

  useEffect(() => {
    setLocation('Página não encontrada');
  }, [setLocation]);

  return (
    <StyledNotFound>
      <h1>Página não encontrada</h1>
      <div className="flex-container">
        <div className="image">
          <img src={caveMan} alt="Cartoon man scorched" />
        </div>
        <div className="text">
          <h3>Você parece perdido...</h3>
          <h3>Que tal voltar a locais civilizados?</h3>
          <Link className="link-btn" to="/">
            <button className="btn" type="button">Home</button>
          </Link>
        </div>
      </div>
    </StyledNotFound>
  );
};

export default NotFound;
