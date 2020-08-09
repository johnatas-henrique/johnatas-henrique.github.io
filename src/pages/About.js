import React, { useContext, useEffect } from 'react';
import { PortfolioContext } from '../context/Portfolio';
import StyledAbout from './About.styled';
import aboutImg from '../images/aboutme.jpeg';

const About = () => {
  const { setLocation } = useContext(PortfolioContext);

  useEffect(() => {
    setLocation('Sobre mim');
  }, []);

  return (
    <StyledAbout>
      <div className="text">
        <h1>JOHNATAS HENRIQUE</h1>
        <h3>
          Estudando para me tornar um desenvolvedor de software full-stack,
          adoro trabalhar em equipe e compartilhar conhecimentos. Estou fazendo uma
          transição de carreira, trabalhei por anos em outra área de tecnologia,
          a de suporte a TI.
        </h3>
        <h3>
          Acredito firmemente que pessoas são a parte mais importante
          para alcançar o sucesso, por isso trabalho fortemente tanto
          para melhorar meu conhecimento técnico, quanto minhas habilidades
          de comunicação interpessoal.
        </h3>
        <h3>
          Tenho a certeza de que trabalho em grupo, com foco na qualidade,
          sempre vão alcançar os melhores resultados.
        </h3>
      </div>
      <div className="image">
        <img src={aboutImg} alt="Minha foto" />
      </div>
    </StyledAbout>
  );
};

export default About;
