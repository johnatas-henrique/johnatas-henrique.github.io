import React, { useContext, useEffect } from 'react';
import { PortfolioContext } from '../context/Portfolio';
import SkillsStyled from './Skills.styled';

const Skills = () => {
  const { setLocation } = useContext(PortfolioContext);

  useEffect(() => {
    setLocation('Habilidades');
  }, [setLocation]);

  return (
    <SkillsStyled>
      <>
        <h1>HABILIDADES TÉCNICAS</h1>
        <div className="text">
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>Jest</h3>
          <h3>ReactJS</h3>
          <h3>RTL</h3>
          <h3>React Redux</h3>
          <h3>React Hooks</h3>
          <h3>MySQL</h3>
          <h3>MongoDB</h3>
          <h3>Node.js</h3>
          <h3>Express.js</h3>
          <h3>Heroku</h3>
          <h3>Git</h3>
          <h3>GitHub</h3>
        </div>
      </>
    </SkillsStyled>
  );
};

export default Skills;
