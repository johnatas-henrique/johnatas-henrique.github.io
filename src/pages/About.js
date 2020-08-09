import React, { useContext, useEffect } from 'react';
import { PortfolioContext } from '../context/Portfolio';

const About = () => {
  const { setLocation } = useContext(PortfolioContext);

  useEffect(() => {
    setLocation('Sobre mim');
  }, []);

  return (
    <div>
      <h1>Hello. This is burger menu tutorial</h1>
      <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
    </div>
  );
};

export default About;
