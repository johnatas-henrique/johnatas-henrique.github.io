import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { node } from 'prop-types';

const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  // useState Part
  const [isFetching, setIsFetching] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const [gitInfo, setGitInfo] = useState(null);
  const [location, setLocation] = useState(null);

  // Functions

  useEffect(() => {
    const url = 'https://gitconnected.com/v1/portfolio/johnatas-henrique';
    const fetchData = async () => {
      setIsFetching(true);
      const response = await axios.get(url).catch((err) => err.response);
      if (response && response.status === 200) {
        setGitInfo(response.data);
      } else {
        setGitInfo('Ocorreu um erro, tente recarregar a página');
      }
      console.log(gitInfo);
      setIsFetching(false);
    };
    fetchData();
  }, []);

  // Export context

  const contextValues = {
    isFetching,
    setIsFetching,
    openBurger,
    setOpenBurger,
    gitInfo,
    setGitInfo,
    location,
    setLocation,
  };

  // Render

  return (
    <PortfolioContext.Provider value={contextValues}>
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };

PortfolioProvider.propTypes = {
  children: node.isRequired,
};
