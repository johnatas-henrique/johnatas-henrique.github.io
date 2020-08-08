import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { node } from 'prop-types';

const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  // useState Part
  const [isFetching, setIsFetching] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const [gitInfo, setGitInfo] = useState(null);

  // Functions

  useEffect(() => {
    const url = 'https://gitconnected.com/v1/portfolio/johnatas-henrique';
    const fetchData = async () => {
      setIsFetching(true);
      const { data } = await axios.get(url);
      setGitInfo(data);
      console.log(data);
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
