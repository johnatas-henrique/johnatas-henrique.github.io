import React, { useContext, useEffect } from 'react';
import { PortfolioContext } from '../context/Portfolio';

const Skills = () => {
  const { setLocation } = useContext(PortfolioContext);

  useEffect(() => {
    setLocation('Habilidades');
  }, []);

  return (
    <div>
      <h1>Skills page dummy</h1>
    </div>
  );
};

export default Skills;
