import React, { useContext, useEffect } from 'react';
import { PortfolioContext } from '../context/Portfolio';

const Contact = () => {
  const { setLocation } = useContext(PortfolioContext);

  useEffect(() => {
    setLocation('Contato');
  }, [setLocation]);

  return (
    <div>
      <h1>Contact page dummy</h1>
    </div>
  );
};

export default Contact;
