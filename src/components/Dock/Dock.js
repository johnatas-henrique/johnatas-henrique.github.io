import React, { useContext } from 'react';
import StyledDock from './Dock.styled';
import { PortfolioContext } from '../../context/Portfolio';

const Dock = () => {
  const { location } = useContext(PortfolioContext);
  return (
    <StyledDock>
      <div className="left">
        <p>{location}</p>
      </div>
      <div>
        <a href="https://github.com/tryber">GitHub</a>
        <a href="https://www.linkedin.com/in/johnatashenrique/">LinkedIn</a>
      </div>
    </StyledDock>
  );
};

export default Dock;
