import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StyledMain from './Main.styled';
import { PortfolioContext } from '../context/Portfolio';

const Main = () => {
  const { setLocation } = useContext(PortfolioContext);

  useEffect(() => {
    setLocation('Home');
  }, [setLocation]);

  return (
    <StyledMain>
      <div className="text">
        <h3>{'<Hello World>'}</h3>
        <h1>Meu nome é Johnatas Henrique.</h1>
        <h1>Sou um desenvolvedor full stack júnior e moro em São Paulo.</h1>
      </div>
      <Link to="/projects" className="button">Veja meus projetos</Link>
      <Link to="/contact" className="button">Entre em contato</Link>
    </StyledMain>
  );
};

export default Main;
