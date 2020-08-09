import React, { useContext, useEffect } from 'react';
import { PortfolioContext } from '../context/Portfolio';

const Projects = () => {
  const { setLocation } = useContext(PortfolioContext);

  useEffect(() => {
    setLocation('Projetos');
  }, []);

  return (
    <div>
      <h1>Projects page dummy</h1>
    </div>
  );
};

export default Projects;
