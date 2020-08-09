import React, { useContext } from 'react';
import StyledDock from './Dock.styled';
import { PortfolioContext } from '../../context/Portfolio';
import gitHub from '../../images/github.png';
import linkedIn from '../../images/linkedin.png';

const Dock = () => {
  const { location } = useContext(PortfolioContext);
  return (
    <StyledDock>
      <div className="left">
        <p>{location}</p>
      </div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/johnatas-henrique">
          <img src={gitHub} alt="GitHub Logo" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/johnatashenrique/">
          <img src={linkedIn} alt="LinkedIn Logo" />
        </a>
      </div>
    </StyledDock>
  );
};

export default Dock;
